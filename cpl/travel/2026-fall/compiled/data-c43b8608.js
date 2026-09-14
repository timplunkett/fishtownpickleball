(function () {
  const DATA = {
 "players": [
  {
   "name": "Ana Bautista",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 20,
   "losses": 0,
   "pointsWon": 420,
   "totalPointsAgainst": 226,
   "mixedWins": 9,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 194,
   "ppg": 21,
   "leagueRank": 6,
   "rating": 4.3,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.7,
   "playerId": "33692212-f6ed-47f3-bac2-e19da564c0c6"
  },
  {
   "name": "Roberto Marcillo",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 14,
   "losses": 0,
   "pointsWon": 294,
   "totalPointsAgainst": 187,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 107,
   "ppg": 21,
   "leagueRank": 9,
   "rating": 2.6,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -1.2,
   "playerId": "4516a66f-67b3-4981-a16d-036deb8db9bc"
  },
  {
   "name": "Amanda Gardiner",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 13,
   "losses": 0,
   "pointsWon": 273,
   "totalPointsAgainst": 166,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 107,
   "ppg": 21,
   "leagueRank": 7,
   "rating": 3.4,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.2,
   "playerId": "5fe0b62e-e4be-4dc3-9f9c-46123a17f754"
  },
  {
   "name": "Debbie Tovitz",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 12,
   "losses": 0,
   "pointsWon": 252,
   "totalPointsAgainst": 158,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 94,
   "ppg": 21,
   "leagueRank": 10,
   "rating": 2.4,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -1.3,
   "playerId": "1260ba09-fd19-4cad-95d4-325744e32327"
  },
  {
   "name": "Wallace Lee",
   "gender": "Male",
   "team": "Montville Rocks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 14,
   "losses": 0,
   "pointsWon": 294,
   "totalPointsAgainst": 207,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 87,
   "ppg": 21,
   "leagueRank": 4,
   "rating": 3.5,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.1,
   "playerId": "ecf2cd14-2d76-4e21-9e99-e86aff72c356"
  },
  {
   "name": "Susan M Fett",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 11,
   "losses": 0,
   "pointsWon": 231,
   "totalPointsAgainst": 147,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 84,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 3.5,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.7,
   "playerId": "91857142-d537-4b98-bbc2-481129371949"
  },
  {
   "name": "Keith Bloom",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 11,
   "losses": 0,
   "pointsWon": 231,
   "totalPointsAgainst": 165,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 66,
   "ppg": 21,
   "leagueRank": 8,
   "rating": 2.1,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.9,
   "playerId": "f0ecf5f8-9392-4625-ba53-de6a61de6218"
  },
  {
   "name": "Cindi Goldstein",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 68,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 58,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.6,
   "playerId": "900813f8-0026-4040-b11e-7222b87545db"
  },
  {
   "name": "Sandy Hartman",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 72,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 54,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 2.7,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1.6,
   "playerId": "35afefad-1bab-485e-8f04-d68feb2d8e82"
  },
  {
   "name": "Bing Leng",
   "gender": "Female",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 77,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 49,
   "ppg": 21,
   "leagueRank": 19,
   "rating": 2.6,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.9,
   "playerId": "9334d28c-6aab-4669-9297-799876b8ca16"
  },
  {
   "name": "Ann Betterton",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 77,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "abe02688-e77f-414b-9747-25f3bdc149c7",
   "winPct": 100,
   "diff": 49,
   "ppg": 21,
   "leagueRank": 14,
   "rating": 2.6,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -1
  },
  {
   "name": "Jack Tran",
   "gender": "Male",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 79,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 47,
   "ppg": 21,
   "leagueRank": 20,
   "rating": 2.6,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": -0.6,
   "playerId": "dbe6ecd1-6aad-4f8f-bc44-702ef0be5667"
  },
  {
   "name": "Robert Huntley",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 104,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 43,
   "ppg": 21,
   "leagueRank": 11,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -1.1,
   "playerId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "name": "Elias Eid",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 84,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "77f18b1c-db78-4d0e-b81d-6d1efde8bb08",
   "winPct": 100,
   "diff": 42,
   "ppg": 21,
   "leagueRank": 24,
   "rating": 2.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Sherri Falsetti",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 64,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 41,
   "ppg": 21,
   "leagueRank": 38,
   "rating": 3.2,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.1,
   "playerId": "57f76666-8731-4408-9e83-fbab3d007fae"
  },
  {
   "name": "Steve Peck",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 65,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 40,
   "ppg": 21,
   "leagueRank": 5,
   "rating": 2.7,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.8,
   "playerId": "17c1d95a-2f52-4329-a52a-a991d1fc3335"
  },
  {
   "name": "Pankaj Yadava",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 113,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "a6d726d7-f535-4ae8-aa6a-adce2a094fc3",
   "winPct": 100,
   "diff": 34,
   "ppg": 21,
   "leagueRank": 29,
   "rating": 1,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.4
  },
  {
   "name": "Matt Stone",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 53,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 31,
   "ppg": 21,
   "leagueRank": 75,
   "rating": 1.7,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.9,
   "playerId": "f32137a7-e7f0-4891-8691-81732f3db7f5"
  },
  {
   "name": "Gennadiy Sterin",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 80,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 25,
   "ppg": 21,
   "leagueRank": 47,
   "rating": 1.8,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "57ef9d21-095b-4eef-a332-5943f07d39a7"
  },
  {
   "name": "Ira Krassan",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 60,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 24,
   "ppg": 21,
   "leagueRank": 26,
   "rating": 0,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -2.3,
   "playerId": "03de01b1-2236-46cf-a94d-6f98cb142ddd"
  },
  {
   "name": "Liang Chao",
   "gender": "Female",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 62,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 22,
   "ppg": 21,
   "leagueRank": 76,
   "rating": 1.3,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.8,
   "playerId": "34ae5ecc-b6b2-44a4-b0a6-b8e59437a32c"
  },
  {
   "name": "Mark Lederman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 18,
   "wins": 17,
   "losses": 1,
   "pointsWon": 376,
   "totalPointsAgainst": 255,
   "mixedWins": 8,
   "mixedLosses": 1,
   "genderWins": 9,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 94.4,
   "diff": 121,
   "ppg": 20.9,
   "leagueRank": 15,
   "rating": 1.6,
   "ratingGames": 18,
   "confidence": 74,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1.6,
   "playerId": "1181bed8-38bd-4496-8be0-323f36d5d7c4"
  },
  {
   "name": "Xiaohong Fang",
   "gender": "Female",
   "team": "Montville Rocks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 14,
   "losses": 1,
   "pointsWon": 308,
   "totalPointsAgainst": 217,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 93.3,
   "diff": 91,
   "ppg": 20.5,
   "leagueRank": 17,
   "rating": 2.5,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.5,
   "playerId": "2279ed76-ddf7-4ed7-aeef-e2bc83db3ed4"
  },
  {
   "name": "Shuming Zhu",
   "gender": "Female",
   "team": "Montville Rocks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 14,
   "losses": 1,
   "pointsWon": 301,
   "totalPointsAgainst": 219,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 93.3,
   "diff": 82,
   "ppg": 20.1,
   "leagueRank": 21,
   "rating": 2.1,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.4,
   "playerId": "ce26642b-bd69-4cbc-a478-95e060c2b0a8"
  },
  {
   "name": "Jhon Cifuentes",
   "gender": "Male",
   "team": "Montville Rocks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 292,
   "totalPointsAgainst": 198,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 92.9,
   "diff": 94,
   "ppg": 20.9,
   "leagueRank": 12,
   "rating": 3.5,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.2,
   "playerId": "91f844b2-dd13-45a0-b66d-9b7ea751037a"
  },
  {
   "name": "Cindy Walters",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 12,
   "losses": 1,
   "pointsWon": 269,
   "totalPointsAgainst": 193,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 92.3,
   "diff": 76,
   "ppg": 20.7,
   "leagueRank": 23,
   "rating": 0.9,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": -1.1,
   "playerId": "e1957c7a-4e30-47e1-bf43-fae97adcf183"
  },
  {
   "name": "Tom Matko",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 12,
   "losses": 1,
   "pointsWon": 269,
   "totalPointsAgainst": 194,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 92.3,
   "diff": 75,
   "ppg": 20.7,
   "leagueRank": 13,
   "rating": 3.6,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5"
  },
  {
   "name": "Jason Fingerman",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 12,
   "losses": 1,
   "pointsWon": 269,
   "totalPointsAgainst": 205,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 92.3,
   "diff": 64,
   "ppg": 20.7,
   "leagueRank": 18,
   "rating": 1.7,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1,
   "playerId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "name": "Cathy Proctor",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 12,
   "losses": 1,
   "pointsWon": 264,
   "totalPointsAgainst": 212,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 92.3,
   "diff": 52,
   "ppg": 20.3,
   "leagueRank": 22,
   "rating": 1.7,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "cb02b0c7-7df6-481e-aeb2-5f945a9522bc"
  },
  {
   "name": "Yan Wang",
   "gender": "Male",
   "team": "Montville Rocks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 250,
   "totalPointsAgainst": 172,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 91.7,
   "diff": 78,
   "ppg": 20.8,
   "leagueRank": 16,
   "rating": 2.5,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": -0.4,
   "playerId": "e9147f78-5bc3-4cab-9b59-6f830a44337c"
  },
  {
   "name": "Hongjie Liu",
   "gender": "Male",
   "team": "Montville Rocks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 245,
   "totalPointsAgainst": 194,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 91.7,
   "diff": 51,
   "ppg": 20.4,
   "leagueRank": 27,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": -0.6,
   "playerId": "32208805-a6c4-402d-bdf6-b44c29c35ba6"
  },
  {
   "name": "Gajendra Mehta",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 284,
   "totalPointsAgainst": 221,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 63,
   "ppg": 20.3,
   "leagueRank": 30,
   "rating": 2.3,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "9ecb04f7-d32e-4f28-8585-aad932450f89"
  },
  {
   "name": "Robert Lee",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 96,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 49,
   "ppg": 20.7,
   "leagueRank": 49,
   "rating": 1.3,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.8,
   "playerId": "c7ffa10b-a10b-4adc-9fb6-46ed7afaeecb"
  },
  {
   "name": "Renee Froeberg",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 17,
   "losses": 3,
   "pointsWon": 412,
   "totalPointsAgainst": 348,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 9,
   "genderLosses": 1,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 85,
   "diff": 64,
   "ppg": 20.6,
   "leagueRank": 33,
   "rating": 2.9,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "3804b024-a017-4fa2-90d3-5d726e764f44"
  },
  {
   "name": "Tammy Dragon",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 269,
   "totalPointsAgainst": 203,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 84.6,
   "diff": 66,
   "ppg": 20.7,
   "leagueRank": 32,
   "rating": 0.8,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.6,
   "playerId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f"
  },
  {
   "name": "Bob Sochor",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 261,
   "totalPointsAgainst": 196,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 84.6,
   "diff": 65,
   "ppg": 20.1,
   "leagueRank": 31,
   "rating": 2,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1,
   "playerId": "27be2d93-9ffb-48be-a464-e0ab103426e3"
  },
  {
   "name": "Janet Bellaran",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 267,
   "totalPointsAgainst": 209,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 84.6,
   "diff": 58,
   "ppg": 20.5,
   "leagueRank": 28,
   "rating": 3.1,
   "ratingGames": 13,
   "confidence": 65,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7"
  },
  {
   "name": "Luis Perez",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 269,
   "totalPointsAgainst": 217,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 84.6,
   "diff": 52,
   "ppg": 20.7,
   "leagueRank": 34,
   "rating": 2.2,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "fe7754f9-404d-4b6d-8499-552ee9f237fa"
  },
  {
   "name": "Kristie Capitanelli",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 245,
   "totalPointsAgainst": 170,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 75,
   "ppg": 20.4,
   "leagueRank": 25,
   "rating": 3,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1,
   "playerId": "4f87890f-1940-405a-82a2-bd2d50b5bf21"
  },
  {
   "name": "Kate Clow",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 248,
   "totalPointsAgainst": 188,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 83.3,
   "diff": 60,
   "ppg": 20.7,
   "leagueRank": 40,
   "rating": 0.8,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.4,
   "playerId": "1bdfe261-94e8-4713-972b-785953b6dd88"
  },
  {
   "name": "Jeff Kesner",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 248,
   "totalPointsAgainst": 205,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 83.3,
   "diff": 43,
   "ppg": 20.7,
   "leagueRank": 43,
   "rating": -0.8,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -2,
   "playerId": "26116ec9-7f8d-4944-8c35-d2e0ad651a01"
  },
  {
   "name": "Vilayvanh Sysounthone",
   "gender": "Female",
   "team": "Montville Rocks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 248,
   "totalPointsAgainst": 206,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 83.3,
   "diff": 42,
   "ppg": 20.7,
   "leagueRank": 42,
   "rating": 0.2,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -0.4,
   "playerId": "adcdbc67-29b2-4411-9d74-919d1c7abf0b"
  },
  {
   "name": "Linda Goss",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 119,
   "totalPointsAgainst": 96,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 23,
   "ppg": 19.8,
   "leagueRank": 44,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -2.6,
   "playerId": "14e5edae-ff22-415b-8267-d46a2117ed8d"
  },
  {
   "name": "Andy Knight",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 101,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 23,
   "ppg": 20.7,
   "leagueRank": 64,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.4,
   "playerId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "name": "Hal Greenspan",
   "gender": "Male",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 103,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 20,
   "ppg": 20.5,
   "leagueRank": 56,
   "rating": 2.6,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0,
   "playerId": "36b33227-285b-4959-a3b8-21012748391e"
  },
  {
   "name": "Jenn Guerrini",
   "gender": "Female",
   "team": "One Love",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 9,
   "losses": 2,
   "pointsWon": 210,
   "totalPointsAgainst": 194,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "0a61962c-a23d-4651-8153-201d107f4477",
   "winPct": 81.8,
   "diff": 16,
   "ppg": 19.1,
   "leagueRank": 61,
   "rating": 1.7,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Qiuwei Feng",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 13,
   "losses": 3,
   "pointsWon": 330,
   "totalPointsAgainst": 265,
   "mixedWins": 7,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 81.3,
   "diff": 65,
   "ppg": 20.6,
   "leagueRank": 35,
   "rating": 3.3,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.6,
   "playerId": "5afdbd12-d79e-45ec-ae26-63ea91a262f2"
  },
  {
   "name": "Karin Schneider",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 68,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "6b3df055-e504-46b4-8072-5ebded92a310",
   "winPct": 80,
   "diff": 35,
   "ppg": 20.6,
   "leagueRank": 89,
   "rating": 2.1,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1.8
  },
  {
   "name": "Michele Heinle",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 75,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 28,
   "ppg": 20.6,
   "leagueRank": 96,
   "rating": 1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1,
   "playerId": "4ac086b1-686b-4396-9645-7b403528877c"
  },
  {
   "name": "David Cartwright",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 75,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "d6a6177b-1ee7-410c-bafc-bf1a91628876",
   "winPct": 80,
   "diff": 28,
   "ppg": 20.6,
   "leagueRank": 41,
   "rating": 1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Jane Chang",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 81,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 22,
   "ppg": 20.6,
   "leagueRank": 112,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 2.8,
   "strengthOfOpponents": -1.1,
   "playerId": "6be7e486-9396-4542-a6dd-b99cc57b95b7"
  },
  {
   "name": "Sue Agneli",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 82,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 21,
   "ppg": 20.6,
   "leagueRank": 39,
   "rating": 1.3,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.2,
   "playerId": "cb3cfdef-4bf3-4287-8d4e-dc17490860aa"
  },
  {
   "name": "Barbara Thall",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 91,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 12,
   "ppg": 20.6,
   "leagueRank": 126,
   "rating": -0.1,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.1,
   "playerId": "4a01c170-a937-4061-8385-cfb0e00e3742"
  },
  {
   "name": "Gladys Garzone",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 282,
   "totalPointsAgainst": 210,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 78.6,
   "diff": 72,
   "ppg": 20.1,
   "leagueRank": 37,
   "rating": 2.8,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "130961d9-c1d1-47b6-9bee-90183531473c"
  },
  {
   "name": "Steve Roth",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 260,
   "totalPointsAgainst": 221,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 76.9,
   "diff": 39,
   "ppg": 20,
   "leagueRank": 57,
   "rating": 1.9,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "183983b9-993f-471e-ac3d-224dcee6d80f"
  },
  {
   "name": "Neil Vijayendran",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 242,
   "totalPointsAgainst": 176,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 66,
   "ppg": 20.2,
   "leagueRank": 36,
   "rating": 4.2,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "1feab7e4-0989-45ae-acda-7ad5e78c3079"
  },
  {
   "name": "Rich Traynor",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 240,
   "totalPointsAgainst": 184,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 56,
   "ppg": 20,
   "leagueRank": 52,
   "rating": 1.2,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.9,
   "playerId": "85b74629-7dd6-48c5-bb23-d4216ec81261"
  },
  {
   "name": "Joanne Rim",
   "gender": "Female",
   "team": "Montville Rocks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 244,
   "totalPointsAgainst": 189,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 55,
   "ppg": 20.3,
   "leagueRank": 48,
   "rating": 1.1,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.6,
   "playerId": "a6f156e3-7dfa-42ec-8c69-a73c25e55833"
  },
  {
   "name": "Kirsten Hinds",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 246,
   "totalPointsAgainst": 199,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 47,
   "ppg": 20.5,
   "leagueRank": 46,
   "rating": 2,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.1,
   "playerId": "23bf4ad6-5b88-4d00-93c8-3134ec378f34"
  },
  {
   "name": "Claudia Calle",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 246,
   "totalPointsAgainst": 201,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 45,
   "ppg": 20.5,
   "leagueRank": 51,
   "rating": 0.7,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.7,
   "playerId": "cf05f9f7-40a6-4861-b9be-020ee81a9c06"
  },
  {
   "name": "Robert Mroz",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 123,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 41,
   "ppg": 20.5,
   "leagueRank": 55,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1.3,
   "playerId": "d580c22d-f8c0-4688-90d5-af4f0e180c6d"
  },
  {
   "name": "Nate Brochin",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 246,
   "totalPointsAgainst": 210,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 36,
   "ppg": 20.5,
   "leagueRank": 58,
   "rating": 0.8,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0,
   "playerId": "90204557-bb5d-4892-abfe-d2530aa1ac3a"
  },
  {
   "name": "Uma Kamineni",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 137,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "0eacbe77-e8aa-4c18-8cd8-74830c99351a",
   "winPct": 75,
   "diff": 27,
   "ppg": 20.5,
   "leagueRank": 62,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.1
  },
  {
   "name": "John Romeo",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 79,
   "totalPointsAgainst": 55,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 24,
   "ppg": 19.8,
   "leagueRank": 145,
   "rating": -0.2,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -2.6,
   "playerId": "813470f2-6efd-44e2-87b0-c373c5ecacfd"
  },
  {
   "name": "Ralph Croat",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 155,
   "totalPointsAgainst": 137,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "1da995e5-0151-44d5-8809-07e0c147d1d7",
   "winPct": 75,
   "diff": 18,
   "ppg": 19.4,
   "leagueRank": 77,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Pete Dunn",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 80,
   "totalPointsAgainst": 63,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 17,
   "ppg": 20,
   "leagueRank": 98,
   "rating": 0.4,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.6,
   "playerId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "name": "Erik Lombardo",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 80,
   "totalPointsAgainst": 67,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd",
   "winPct": 75,
   "diff": 13,
   "ppg": 20,
   "leagueRank": 92,
   "rating": 0.9,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "George Chen",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 381,
   "totalPointsAgainst": 315,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 73.7,
   "diff": 66,
   "ppg": 20.1,
   "leagueRank": 54,
   "rating": 2,
   "ratingGames": 19,
   "confidence": 75,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "36d781d6-de40-4d55-b17f-97f8c8757bd3"
  },
  {
   "name": "Geordielyn Alviola",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 387,
   "totalPointsAgainst": 338,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 73.7,
   "diff": 49,
   "ppg": 20.4,
   "leagueRank": 60,
   "rating": 2,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "0a458710-16fc-4aac-93a1-91ce89d6bacf"
  },
  {
   "name": "Ben Xie",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 389,
   "totalPointsAgainst": 340,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 73.7,
   "diff": 49,
   "ppg": 20.5,
   "leagueRank": 59,
   "rating": 1.6,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "ed9f303e-a29c-4172-a72d-6a9a31bf7124"
  },
  {
   "name": "Michael Johnson",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 379,
   "totalPointsAgainst": 334,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 73.7,
   "diff": 45,
   "ppg": 19.9,
   "leagueRank": 67,
   "rating": 0.8,
   "ratingGames": 19,
   "confidence": 73,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.3,
   "playerId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "name": "Alam Mohammad",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 374,
   "totalPointsAgainst": 331,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 73.7,
   "diff": 43,
   "ppg": 19.7,
   "leagueRank": 70,
   "rating": 0.8,
   "ratingGames": 19,
   "confidence": 75,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.2,
   "playerId": "d621bf00-b03f-478d-a0b6-cab0ba96b28b"
  },
  {
   "name": "Michael Gilbert",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 220,
   "totalPointsAgainst": 163,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 57,
   "ppg": 20,
   "leagueRank": 53,
   "rating": 1.5,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.6,
   "playerId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a"
  },
  {
   "name": "Andrew Mclean",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 214,
   "totalPointsAgainst": 194,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 72.7,
   "diff": 20,
   "ppg": 19.5,
   "leagueRank": 80,
   "rating": 0.5,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.2,
   "playerId": "2d439cdc-347e-4beb-9975-1b31bc46f2df"
  },
  {
   "name": "Sarah Flynn",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 219,
   "totalPointsAgainst": 207,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 12,
   "ppg": 19.9,
   "leagueRank": 86,
   "rating": -0.4,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "29b01229-f7ed-4692-bdb4-32926b8a7cc5"
  },
  {
   "name": "Elizabeth Biehl",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 13,
   "losses": 5,
   "pointsWon": 343,
   "totalPointsAgainst": 283,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 72.2,
   "diff": 60,
   "ppg": 19.1,
   "leagueRank": 72,
   "rating": 1,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1,
   "playerId": "a10029d9-c75f-4a33-98cd-6173faa99ddc"
  },
  {
   "name": "May Syso",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 18,
   "wins": 13,
   "losses": 5,
   "pointsWon": 359,
   "totalPointsAgainst": 315,
   "mixedWins": 10,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 72.2,
   "diff": 44,
   "ppg": 19.9,
   "leagueRank": 66,
   "rating": 1.8,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "e81b7980-75d9-4dab-b9e2-626065c3ee51"
  },
  {
   "name": "Joe Monello",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 15,
   "losses": 6,
   "pointsWon": 416,
   "totalPointsAgainst": 352,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 64,
   "ppg": 19.8,
   "leagueRank": 63,
   "rating": 3.1,
   "ratingGames": 21,
   "confidence": 77,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "e5eb8990-4b8d-4a10-bff8-29740ce57276"
  },
  {
   "name": "Allison Harmony",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 142,
   "totalPointsAgainst": 96,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 46,
   "ppg": 20.3,
   "leagueRank": 85,
   "rating": 1.8,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -1.1,
   "playerId": "5b98410e-1f1f-4143-ab72-c7d8a53e5309"
  },
  {
   "name": "Dari Mehl",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 143,
   "totalPointsAgainst": 103,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "b2fa8b98-b75f-4754-a17f-a088e67fe990",
   "winPct": 71.4,
   "diff": 40,
   "ppg": 20.4,
   "leagueRank": 88,
   "rating": 0.9,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.7
  },
  {
   "name": "Michael Saggese",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 142,
   "totalPointsAgainst": 107,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 35,
   "ppg": 20.3,
   "leagueRank": 50,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.9,
   "playerId": "b9846bcc-bfe3-494e-aa14-c25e864463b6"
  },
  {
   "name": "Kimberly Sorce",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 140,
   "totalPointsAgainst": 132,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "playerId": "4e15db5a-174c-4d1a-92b4-340566b5ae93",
   "winPct": 71.4,
   "diff": 8,
   "ppg": 20,
   "leagueRank": 130,
   "rating": -0.7,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "John Cave",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 12,
   "losses": 5,
   "pointsWon": 342,
   "totalPointsAgainst": 281,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 70.6,
   "diff": 61,
   "ppg": 20.1,
   "leagueRank": 65,
   "rating": 1.6,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.7,
   "playerId": "f93f978f-ba60-44ac-b8dc-9e872af0e5c2"
  },
  {
   "name": "Samuel Sickles",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 202,
   "totalPointsAgainst": 142,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 70,
   "diff": 60,
   "ppg": 20.2,
   "leagueRank": 45,
   "rating": 2.5,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.1,
   "playerId": "36b88cb3-c746-48d1-b18d-a080a7761a5e"
  },
  {
   "name": "Mike Leach",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 201,
   "totalPointsAgainst": 180,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 70,
   "diff": 21,
   "ppg": 20.1,
   "leagueRank": 73,
   "rating": 1.5,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "name": "Jody Scarano",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 260,
   "totalPointsAgainst": 220,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 69.2,
   "diff": 40,
   "ppg": 20,
   "leagueRank": 69,
   "rating": 1.3,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.2,
   "playerId": "059a8d88-00ba-4f5b-add3-7a4bb09441f8"
  },
  {
   "name": "Cathy Fiebs",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 256,
   "totalPointsAgainst": 224,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 69.2,
   "diff": 32,
   "ppg": 19.7,
   "leagueRank": 84,
   "rating": 0.3,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.8,
   "playerId": "b39f886b-aa7a-40ca-81a1-5963941e541f"
  },
  {
   "name": "Susan Goeckeler",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 244,
   "totalPointsAgainst": 218,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 69.2,
   "diff": 26,
   "ppg": 18.8,
   "leagueRank": 99,
   "rating": 1.1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "201e264e-23da-435d-a4b5-0fea908d1098"
  },
  {
   "name": "Kelley Batejan",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 254,
   "totalPointsAgainst": 228,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 69.2,
   "diff": 26,
   "ppg": 19.5,
   "leagueRank": 93,
   "rating": 0.1,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.9,
   "playerId": "5d124581-6317-4648-8c11-2fa9235da2c3"
  },
  {
   "name": "Stephen Arleth",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 315,
   "totalPointsAgainst": 280,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 68.8,
   "diff": 35,
   "ppg": 19.7,
   "leagueRank": 91,
   "rating": 0.1,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.5,
   "playerId": "5a5c19dd-0788-4c96-975f-18c91f580210"
  },
  {
   "name": "Garry Wright",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 306,
   "totalPointsAgainst": 277,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 68.8,
   "diff": 29,
   "ppg": 19.1,
   "leagueRank": 95,
   "rating": 0.6,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "6c10bca6-6034-42ca-8adc-1532e7e3c629"
  },
  {
   "name": "Robert Goldenberg",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 381,
   "totalPointsAgainst": 315,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 68.4,
   "diff": 66,
   "ppg": 20.1,
   "leagueRank": 83,
   "rating": 0.1,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1,
   "playerId": "52940bf9-2379-45c0-94db-829704ea0ecc"
  },
  {
   "name": "Robert Toledo",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 380,
   "totalPointsAgainst": 320,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 68.4,
   "diff": 60,
   "ppg": 20,
   "leagueRank": 71,
   "rating": 2.2,
   "ratingGames": 19,
   "confidence": 72,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "a1e0d6a6-b8d4-47b7-bdfc-6cb8670a421d"
  },
  {
   "name": "Cyndee Catalano",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 369,
   "totalPointsAgainst": 321,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 68.4,
   "diff": 48,
   "ppg": 19.4,
   "leagueRank": 94,
   "rating": 0,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.8,
   "playerId": "7b807cdf-4322-4979-b810-acae5cc05409"
  },
  {
   "name": "Ashish Malhotra",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 241,
   "totalPointsAgainst": 190,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 51,
   "ppg": 20.1,
   "leagueRank": 78,
   "rating": 1.2,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.6,
   "playerId": "c7c10631-26d1-46cf-9c21-84eed5659847"
  },
  {
   "name": "Robert Bernstein",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 354,
   "totalPointsAgainst": 310,
   "mixedWins": 7,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 44,
   "ppg": 19.7,
   "leagueRank": 79,
   "rating": 2,
   "ratingGames": 18,
   "confidence": 74,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.6,
   "playerId": "5c119a69-3fc4-40b6-a8e1-dc3504df440a"
  },
  {
   "name": "Marguerite Greener",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 241,
   "totalPointsAgainst": 198,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 43,
   "ppg": 20.1,
   "leagueRank": 68,
   "rating": 2.6,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "name": "Dan Yang",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 286,
   "totalPointsAgainst": 244,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 42,
   "ppg": 19.1,
   "leagueRank": 81,
   "rating": 2.1,
   "ratingGames": 15,
   "confidence": 70,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9"
  },
  {
   "name": "Scott Kindzierski",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 349,
   "totalPointsAgainst": 307,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 42,
   "ppg": 19.4,
   "leagueRank": 87,
   "rating": 1.5,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "b3c8341b-b3d8-442b-93dc-1da6a5c4e868"
  },
  {
   "name": "Kathleen Grennan",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 228,
   "totalPointsAgainst": 200,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 28,
   "ppg": 19,
   "leagueRank": 104,
   "rating": 0.9,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "84092931-7836-43e8-a35c-790bd5555b1a"
  },
  {
   "name": "Sushma Rayapudi",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 238,
   "totalPointsAgainst": 210,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 28,
   "ppg": 19.8,
   "leagueRank": 74,
   "rating": 2.8,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "ea658d89-a540-405d-9819-9c98a0484f60"
  },
  {
   "name": "Lawrence Padersky",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 9,
   "wins": 6,
   "losses": 3,
   "pointsWon": 180,
   "totalPointsAgainst": 161,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 19,
   "ppg": 20,
   "leagueRank": 97,
   "rating": -0.4,
   "ratingGames": 9,
   "confidence": 61,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.3,
   "playerId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "name": "Toby Athron",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 229,
   "totalPointsAgainst": 212,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 17,
   "ppg": 19.1,
   "leagueRank": 108,
   "rating": 0.6,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "65e91297-9d8e-4aad-a836-8458adc59a75"
  },
  {
   "name": "Mike Matchett",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 106,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 16,
   "ppg": 20.3,
   "leagueRank": 124,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.9,
   "playerId": "352c1c52-e08e-4cb8-826d-21c700529419"
  },
  {
   "name": "Howard Cetel",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 219,
   "totalPointsAgainst": 206,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 13,
   "ppg": 18.3,
   "leagueRank": 115,
   "rating": 0.8,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.5,
   "playerId": "bff308e5-13f7-4eec-9c98-9095255f062f"
  },
  {
   "name": "James Liao",
   "gender": "Male",
   "team": "Montville Rocks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 108,
   "totalPointsAgainst": 98,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "f531d208-4654-40ae-82e2-7c73886d7d7d",
   "winPct": 66.7,
   "diff": 10,
   "ppg": 18,
   "leagueRank": 143,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Carlos Colon",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 6,
   "ppg": 19.8,
   "leagueRank": 103,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "03bc5e6c-8df7-4b9d-a0df-37cb4068adac"
  },
  {
   "name": "Marty Tan",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 112,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "64a75f67-1825-4e71-8704-25f0e370ae81",
   "winPct": 66.7,
   "diff": 4,
   "ppg": 19.3,
   "leagueRank": 131,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Charles Buzad",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 334,
   "totalPointsAgainst": 332,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 2,
   "ppg": 18.6,
   "leagueRank": 121,
   "rating": -1.2,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.2,
   "playerId": "5d3b9d31-abbd-49ef-b63b-fa8a30759147"
  },
  {
   "name": "Jennifer Qian",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00",
   "winPct": 66.7,
   "diff": 2,
   "ppg": 19.7,
   "leagueRank": 125,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Doreen Arleth",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 11,
   "losses": 6,
   "pointsWon": 339,
   "totalPointsAgainst": 293,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 64.7,
   "diff": 46,
   "ppg": 19.9,
   "leagueRank": 90,
   "rating": 1.2,
   "ratingGames": 17,
   "confidence": 71,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "869705bd-7c6f-4515-a1a4-d214c92fabb4"
  },
  {
   "name": "Shawn Maloney",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 11,
   "losses": 6,
   "pointsWon": 344,
   "totalPointsAgainst": 314,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 64.7,
   "diff": 30,
   "ppg": 20.2,
   "leagueRank": 100,
   "rating": 0.5,
   "ratingGames": 17,
   "confidence": 73,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "c51970e8-6156-404b-863a-eb694ad67be9"
  },
  {
   "name": "Jo Marie Holzhammer",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 277,
   "totalPointsAgainst": 232,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 64.3,
   "diff": 45,
   "ppg": 19.8,
   "leagueRank": 82,
   "rating": 2.4,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "f4af59de-c7a2-4aa4-a3db-1e3856181ffe"
  },
  {
   "name": "Sharon Streit",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 208,
   "totalPointsAgainst": 176,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 63.6,
   "diff": 32,
   "ppg": 18.9,
   "leagueRank": 107,
   "rating": 0.6,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "name": "Sal Garfi",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 201,
   "totalPointsAgainst": 174,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 63.6,
   "diff": 27,
   "ppg": 18.3,
   "leagueRank": 119,
   "rating": -1.7,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -2.2,
   "playerId": "38441ed7-017a-47a0-859b-ddb00d17d1cb"
  },
  {
   "name": "Joan Glass",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 213,
   "totalPointsAgainst": 196,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "38739b70-06ec-41c1-bcfb-18a3c539951d",
   "winPct": 63.6,
   "diff": 17,
   "ppg": 19.4,
   "leagueRank": 106,
   "rating": 1.4,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0
  },
  {
   "name": "Rachel Shirley",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 209,
   "totalPointsAgainst": 200,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 63.6,
   "diff": 9,
   "ppg": 19,
   "leagueRank": 113,
   "rating": 0.1,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.7,
   "playerId": "ff713931-208e-4b8f-9b1d-c7919e6af892"
  },
  {
   "name": "Jay Zeng",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 150,
   "totalPointsAgainst": 143,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "abc4de4c-a9af-4b75-8e57-5b7374af96c2",
   "winPct": 62.5,
   "diff": 7,
   "ppg": 18.8,
   "leagueRank": 132,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Mike Lasko",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 154,
   "totalPointsAgainst": 156,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": -2,
   "ppg": 19.3,
   "leagueRank": 133,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "67a7b684-fd3e-4299-b67b-8ba9e8b1c235"
  },
  {
   "name": "Joe Carrano",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 257,
   "totalPointsAgainst": 237,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 61.5,
   "diff": 20,
   "ppg": 19.8,
   "leagueRank": 101,
   "rating": 2.1,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "f6fcffef-8b65-4735-a0bd-ae87f7ea2e25"
  },
  {
   "name": "Jennifer Jones",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 11,
   "losses": 7,
   "pointsWon": 352,
   "totalPointsAgainst": 303,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 61.1,
   "diff": 49,
   "ppg": 19.6,
   "leagueRank": 102,
   "rating": 1.3,
   "ratingGames": 18,
   "confidence": 74,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "aae8138e-15d4-44b2-b48c-60c87c40a116"
  },
  {
   "name": "Krystal Johnson",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 11,
   "losses": 7,
   "pointsWon": 344,
   "totalPointsAgainst": 309,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 61.1,
   "diff": 35,
   "ppg": 19.1,
   "leagueRank": 111,
   "rating": 1.2,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "a4fb87af-daed-4bc9-9027-2a4b215c060c"
  },
  {
   "name": "Dan He",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 295,
   "totalPointsAgainst": 254,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 60,
   "diff": 41,
   "ppg": 19.7,
   "leagueRank": 105,
   "rating": 1.3,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.4,
   "playerId": "f544c236-d1bb-4bcf-bf15-df57dfb4e7f1"
  },
  {
   "name": "Olga Khalev",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 198,
   "totalPointsAgainst": 172,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 26,
   "ppg": 19.8,
   "leagueRank": 109,
   "rating": 0.6,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "429103e6-a3b1-4cb1-853d-bb4b849df001"
  },
  {
   "name": "Janine Kietrys",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 192,
   "totalPointsAgainst": 176,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 16,
   "ppg": 19.2,
   "leagueRank": 122,
   "rating": -1.1,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.8,
   "playerId": "e224a324-8a0d-4739-9dae-07055090ef2a"
  },
  {
   "name": "Chris Shung",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 99,
   "totalPointsAgainst": 85,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 14,
   "ppg": 19.8,
   "leagueRank": 139,
   "rating": 1.9,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.3,
   "playerId": "2253df3c-7a50-4a9a-b197-2f80d64b089f"
  },
  {
   "name": "Melissa Engel",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 94,
   "totalPointsAgainst": 88,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 6,
   "ppg": 18.8,
   "leagueRank": 128,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.2,
   "playerId": "4f4a4924-f4d1-462f-a1f2-6a896503ba4a"
  },
  {
   "name": "Scott Mckay",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 96,
   "totalPointsAgainst": 94,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 2,
   "ppg": 19.2,
   "leagueRank": 175,
   "rating": -0.2,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "55b4770f-a6fa-41ce-b47b-a6e55a33d513"
  },
  {
   "name": "Jeffrey Kowalski",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
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
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 2,
   "ppg": 19,
   "leagueRank": 114,
   "rating": 1.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1,
   "playerId": "fc8f4c96-b37a-4b4c-a31d-01d270e1bda9"
  },
  {
   "name": "Thomas Licciardello",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 192,
   "totalPointsAgainst": 193,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": -1,
   "ppg": 19.2,
   "leagueRank": 123,
   "rating": 0.6,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "ac13b60d-b370-45f4-8980-0ecbdd1b81b4"
  },
  {
   "name": "Gail Humphreys-Mackenzie",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 88,
   "totalPointsAgainst": 92,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -4,
   "ppg": 17.6,
   "leagueRank": 186,
   "rating": 1.4,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -3.3,
   "strengthOfOpponents": 0,
   "playerId": "493d1f95-ca55-4e30-b627-1f3f8d787449"
  },
  {
   "name": "Jill Mundenar",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 89,
   "totalPointsAgainst": 97,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -8,
   "ppg": 17.8,
   "leagueRank": 205,
   "rating": -1.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "923cf821-3b2d-42e9-9269-97ab1b499ad8"
  },
  {
   "name": "Robert Alexander",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 17,
   "wins": 10,
   "losses": 7,
   "pointsWon": 323,
   "totalPointsAgainst": 310,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 58.8,
   "diff": 13,
   "ppg": 19,
   "leagueRank": 129,
   "rating": 0.3,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "6b844385-0db4-4fa9-a38f-1f79ecef1db0"
  },
  {
   "name": "Maria Fanfa",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 10,
   "losses": 7,
   "pointsWon": 309,
   "totalPointsAgainst": 316,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 58.8,
   "diff": -7,
   "ppg": 18.2,
   "leagueRank": 140,
   "rating": -0.5,
   "ratingGames": 17,
   "confidence": 76,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "98bfa16f-b5e6-4534-a4b9-5b84267284d4"
  },
  {
   "name": "Linda Bozzo",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 228,
   "totalPointsAgainst": 199,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 29,
   "ppg": 19,
   "leagueRank": 110,
   "rating": 1,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "94c45058-cae5-4085-ad9e-684309568903"
  },
  {
   "name": "Cindy Darcy",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 138,
   "totalPointsAgainst": 118,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 20,
   "ppg": 19.7,
   "leagueRank": 135,
   "rating": 1.3,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0,
   "playerId": "3e6d0ced-4c54-4733-8fd5-c685729f66ae"
  },
  {
   "name": "Lydia Fiore",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 135,
   "totalPointsAgainst": 118,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 17,
   "ppg": 19.3,
   "leagueRank": 153,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.5,
   "playerId": "602fc2fd-c2f6-4909-9951-c829b5831548"
  },
  {
   "name": "Andrea Schwab",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 133,
   "totalPointsAgainst": 119,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 14,
   "ppg": 19,
   "leagueRank": 117,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "605d7726-f903-4606-ad3d-14964b9e2e1b"
  },
  {
   "name": "Tara Lombardo",
   "gender": "Female",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 137,
   "totalPointsAgainst": 126,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "77d20dd0-823c-474e-b470-12f69db5a588",
   "winPct": 57.1,
   "diff": 11,
   "ppg": 19.6,
   "leagueRank": 118,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Lisa Mctague",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 123,
   "totalPointsAgainst": 135,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": -12,
   "ppg": 17.6,
   "leagueRank": 151,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "0d68c1e4-633a-4b56-bb73-06365cf5bdcb"
  },
  {
   "name": "Peter Shen",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 312,
   "totalPointsAgainst": 281,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 56.3,
   "diff": 31,
   "ppg": 19.5,
   "leagueRank": 116,
   "rating": 0.6,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.7,
   "playerId": "7417eca2-2140-47f9-bd14-be210ba9d630"
  },
  {
   "name": "Julie Chiappa",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 298,
   "totalPointsAgainst": 276,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 56.3,
   "diff": 22,
   "ppg": 18.6,
   "leagueRank": 127,
   "rating": 0.8,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "7c329f6b-3ee5-4a0a-8cd9-b3d439da6e47"
  },
  {
   "name": "Cheryl Klein",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 10,
   "losses": 8,
   "pointsWon": 351,
   "totalPointsAgainst": 328,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 55.6,
   "diff": 23,
   "ppg": 19.5,
   "leagueRank": 120,
   "rating": 0.9,
   "ratingGames": 18,
   "confidence": 74,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "d521a98f-88b6-488e-8903-8c35386df363"
  },
  {
   "name": "Dawn Gordon",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 5,
   "losses": 4,
   "pointsWon": 163,
   "totalPointsAgainst": 162,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 55.6,
   "diff": 1,
   "ppg": 18.1,
   "leagueRank": 148,
   "rating": -1.2,
   "ratingGames": 9,
   "confidence": 61,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -1.1,
   "playerId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "name": "John Laspina",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 214,
   "totalPointsAgainst": 202,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 54.5,
   "diff": 12,
   "ppg": 19.5,
   "leagueRank": 134,
   "rating": 0.5,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.5,
   "playerId": "9a0e3b23-efa6-4c87-bc93-f8fa1bbde474"
  },
  {
   "name": "Maricel Pineda",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 208,
   "totalPointsAgainst": 215,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 54.5,
   "diff": -7,
   "ppg": 18.9,
   "leagueRank": 146,
   "rating": -1.4,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.2,
   "playerId": "810856e7-f746-4641-a633-d870ff787e8d"
  },
  {
   "name": "Barb Mulckhuyse",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 237,
   "totalPointsAgainst": 241,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": -4,
   "ppg": 18.2,
   "leagueRank": 156,
   "rating": -2.3,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.1,
   "playerId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "name": "Stephen Villani",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 227,
   "totalPointsAgainst": 236,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 53.8,
   "diff": -9,
   "ppg": 17.5,
   "leagueRank": 159,
   "rating": -1.5,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1,
   "playerId": "cc8cfbf1-a6d3-40d7-99a9-eb20343774eb"
  },
  {
   "name": "Andrew Pohlmann",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 120,
   "totalPointsAgainst": 95,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 25,
   "ppg": 20,
   "leagueRank": 142,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -2.3,
   "playerId": "b676efe0-5294-4ebe-ae21-989f42b33ebc"
  },
  {
   "name": "Shah Faisal",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 185,
   "totalPointsAgainst": 170,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 15,
   "ppg": 18.5,
   "leagueRank": 136,
   "rating": 0.8,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "824c403f-8e75-42d5-bdbe-8effc6224ae0"
  },
  {
   "name": "Kevin Larkin",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 106,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 10,
   "ppg": 19.3,
   "leagueRank": 158,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -1.5,
   "playerId": "c5081aa0-2c57-4a76-94d2-946aac182331"
  },
  {
   "name": "Ken Carlson",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 111,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 5,
   "ppg": 19.3,
   "leagueRank": 165,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6,
   "playerId": "b93dc821-ad17-49b2-8561-0c9da7614364"
  },
  {
   "name": "Michael Barry",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 266,
   "totalPointsAgainst": 262,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 4,
   "ppg": 19,
   "leagueRank": 144,
   "rating": -0.2,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "8aa9db46-30ca-4985-93b5-33ad3d7d1963"
  },
  {
   "name": "Eric Shipon",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 302,
   "totalPointsAgainst": 302,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": 0,
   "ppg": 18.9,
   "leagueRank": 149,
   "rating": -0.3,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "b035d8be-372b-4bec-92be-0b0bde7dce82"
  },
  {
   "name": "Lisa Yuskevich",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 194,
   "totalPointsAgainst": 195,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": -1,
   "ppg": 19.4,
   "leagueRank": 137,
   "rating": 1.2,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "f03105d3-576a-4955-909a-24c18a087d1e"
  },
  {
   "name": "Bart Allgeier",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 106,
   "totalPointsAgainst": 108,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "236ac99f-3ad9-42b7-bb97-a2c238fbbf98",
   "winPct": 50,
   "diff": -2,
   "ppg": 17.7,
   "leagueRank": 182,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Jocelyn Carney",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 114,
   "totalPointsAgainst": 117,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -3,
   "ppg": 19,
   "leagueRank": 141,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.2,
   "playerId": "99f7821f-79d3-4e9e-9a9f-01043edcebee"
  },
  {
   "name": "Christopher Aiello",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 181,
   "totalPointsAgainst": 184,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -3,
   "ppg": 18.1,
   "leagueRank": 160,
   "rating": -2,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.1,
   "playerId": "c9ff8d7f-0d8c-4b52-8b15-ae89d132542f"
  },
  {
   "name": "Christine Anderson",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 235,
   "totalPointsAgainst": 243,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -8,
   "ppg": 16.8,
   "leagueRank": 163,
   "rating": -0.1,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "688aa4c5-9179-42aa-a456-92413a4ab4ad"
  },
  {
   "name": "Nirav Solanki",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 111,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -8,
   "ppg": 18.5,
   "leagueRank": 152,
   "rating": 1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.4,
   "playerId": "938658e5-f3f0-4597-8d1b-8d65a9378673"
  },
  {
   "name": "Marvin Gordon",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 135,
   "totalPointsAgainst": 144,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -9,
   "ppg": 16.9,
   "leagueRank": 176,
   "rating": -2.5,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.7,
   "playerId": "1d9d1a52-6704-43c9-a8bf-8e902e260e01"
  },
  {
   "name": "Jen Carara",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 109,
   "totalPointsAgainst": 118,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -9,
   "ppg": 18.2,
   "leagueRank": 157,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "3123a017-5268-43cb-8306-d70ac18760c3"
  },
  {
   "name": "Patty Andrzejewski",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 106,
   "totalPointsAgainst": 120,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -14,
   "ppg": 17.7,
   "leagueRank": 161,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 2.1,
   "playerId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2"
  },
  {
   "name": "Lucy Sha",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 240,
   "totalPointsAgainst": 273,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 1,
   "playerId": "4807af08-76d9-4c85-9e4b-c16be77b4d78",
   "winPct": 50,
   "diff": -33,
   "ppg": 17.1,
   "leagueRank": 171,
   "rating": -0.4,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Nicole Nelson",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 363,
   "totalPointsAgainst": 356,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 47.4,
   "diff": 7,
   "ppg": 19.1,
   "leagueRank": 147,
   "rating": 0,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "2e2b7732-48a3-4102-86f9-555111fa9ae8"
  },
  {
   "name": "Carolyn Coonan",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 265,
   "totalPointsAgainst": 283,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 46.7,
   "diff": -18,
   "ppg": 17.7,
   "leagueRank": 170,
   "rating": -0.8,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.7,
   "playerId": "a6669cc7-9c23-4088-8e49-e529dc9b46a8"
  },
  {
   "name": "Christine Clark",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 258,
   "totalPointsAgainst": 240,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 46.2,
   "diff": 18,
   "ppg": 19.8,
   "leagueRank": 138,
   "rating": 0.4,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "e05ce193-53c0-4251-8a44-734c522f7a75"
  },
  {
   "name": "Mara Levy",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 235,
   "totalPointsAgainst": 228,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 46.2,
   "diff": 7,
   "ppg": 18.1,
   "leagueRank": 150,
   "rating": 0.9,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "384831b2-73f2-411a-a6ba-987562301f37"
  },
  {
   "name": "Saritha Kondra",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 206,
   "totalPointsAgainst": 205,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 45.5,
   "diff": 1,
   "ppg": 18.7,
   "leagueRank": 154,
   "rating": 0.3,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.8,
   "playerId": "b4f3fc0d-6166-4726-9180-2a9a698afcdf"
  },
  {
   "name": "Jessie Yan Han",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 4,
   "losses": 5,
   "pointsWon": 168,
   "totalPointsAgainst": 160,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 44.4,
   "diff": 8,
   "ppg": 18.7,
   "leagueRank": 155,
   "rating": -0.3,
   "ratingGames": 9,
   "confidence": 63,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.2,
   "playerId": "e913ece6-fc6e-4ef6-aef8-ba623d72fe4b"
  },
  {
   "name": "Jenn Zhang",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 4,
   "losses": 5,
   "pointsWon": 163,
   "totalPointsAgainst": 167,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 44.4,
   "diff": -4,
   "ppg": 18.1,
   "leagueRank": 167,
   "rating": -1.5,
   "ratingGames": 9,
   "confidence": 63,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.6,
   "playerId": "7b374f2a-8e98-445a-8ac1-f373be68f1e5"
  },
  {
   "name": "Raquel Murphy",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 130,
   "totalPointsAgainst": 131,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -1,
   "ppg": 18.6,
   "leagueRank": 192,
   "rating": -0.2,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.8,
   "playerId": "d19964cc-f176-4f86-9cf9-e7bcb6a694f8"
  },
  {
   "name": "Christine Ziegler",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 123,
   "totalPointsAgainst": 129,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -6,
   "ppg": 17.6,
   "leagueRank": 216,
   "rating": -2,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1,
   "playerId": "63946930-2dca-489e-8158-028722c045f5"
  },
  {
   "name": "Susan Colicchio",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 9,
   "losses": 12,
   "pointsWon": 388,
   "totalPointsAgainst": 406,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 42.9,
   "diff": -18,
   "ppg": 18.5,
   "leagueRank": 169,
   "rating": -1.3,
   "ratingGames": 21,
   "confidence": 77,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "9443df04-e253-4d24-8d52-6c89bba6b4e1"
  },
  {
   "name": "Alex Lawrason",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 225,
   "totalPointsAgainst": 233,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 41.7,
   "diff": -8,
   "ppg": 18.8,
   "leagueRank": 166,
   "rating": -0.5,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.5,
   "playerId": "b925cfcd-a7a4-4c6c-a604-5b7997bceebb"
  },
  {
   "name": "Randi Yezer",
   "gender": "Female",
   "team": "One Love",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 7,
   "losses": 10,
   "pointsWon": 297,
   "totalPointsAgainst": 337,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 41.2,
   "diff": -40,
   "ppg": 17.5,
   "leagueRank": 188,
   "rating": -1,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "477f09e9-1b92-40e0-ae94-e32a0722f1cd"
  },
  {
   "name": "Brooke Obrien",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 98,
   "totalPointsAgainst": 94,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": 4,
   "ppg": 19.6,
   "leagueRank": 211,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.1,
   "playerId": "06b66cca-2292-4bbe-962e-1217c4418e18"
  },
  {
   "name": "Christina Pietrak",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 172,
   "totalPointsAgainst": 169,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": 3,
   "ppg": 17.2,
   "leagueRank": 174,
   "rating": -0.5,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "753f0571-691f-4de6-b307-50980e237994"
  },
  {
   "name": "Richie Nicholasi",
   "gender": "Male",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 97,
   "totalPointsAgainst": 98,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -1,
   "ppg": 19.4,
   "leagueRank": 212,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "9d439fce-c801-40b3-8e58-c5616fd7c2b7"
  },
  {
   "name": "Tyson Hoeflinger",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 93,
   "totalPointsAgainst": 96,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -3,
   "ppg": 18.6,
   "leagueRank": 162,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.8,
   "playerId": "eae8e588-17f6-4f61-ba17-ed73cbe3daf7"
  },
  {
   "name": "Fabricio Pazmino",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 92,
   "totalPointsAgainst": 98,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -6,
   "ppg": 18.4,
   "leagueRank": 164,
   "rating": 1,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "928966ea-f05c-4aed-8f98-df1f7313e41c"
  },
  {
   "name": "Hayley Yandoli",
   "gender": "Female",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 90,
   "totalPointsAgainst": 96,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "winPct": 40,
   "diff": -6,
   "ppg": 18,
   "leagueRank": 173,
   "rating": 0.5,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1
  },
  {
   "name": "Jackie Mclaughlin",
   "gender": "Female",
   "team": "One Love",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 89,
   "totalPointsAgainst": 95,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "76e720b0-fda1-4365-be13-cc7e252125e7",
   "winPct": 40,
   "diff": -6,
   "ppg": 17.8,
   "leagueRank": 227,
   "rating": 0.5,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Sergio Fasciano",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 93,
   "totalPointsAgainst": 100,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -7,
   "ppg": 18.6,
   "leagueRank": 236,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -1,
   "playerId": "3fb4ee3b-cfde-49fe-8dba-bfb90c5db4e1"
  },
  {
   "name": "Liz Mooney",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 88,
   "totalPointsAgainst": 98,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -10,
   "ppg": 17.6,
   "leagueRank": 177,
   "rating": 1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.6,
   "playerId": "3899495d-b8a7-40b2-a42d-a48270d0ff6f"
  },
  {
   "name": "Craig Girvan",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 183,
   "totalPointsAgainst": 193,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -10,
   "ppg": 18.3,
   "leagueRank": 179,
   "rating": -1.3,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "e75f20a0-43a8-456e-ace4-6c3c0a1d7e80"
  },
  {
   "name": "Denise Brownlee",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 90,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -11,
   "ppg": 18,
   "leagueRank": 235,
   "rating": -1.3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "4f1119b1-60c7-4430-bfe1-d98b286bde28"
  },
  {
   "name": "William Askin",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 86,
   "totalPointsAgainst": 98,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -12,
   "ppg": 17.2,
   "leagueRank": 194,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.8,
   "playerId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3"
  },
  {
   "name": "Katy Taylor",
   "gender": "Female",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 175,
   "totalPointsAgainst": 190,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -15,
   "ppg": 17.5,
   "leagueRank": 183,
   "rating": 0,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": -0.3,
   "playerId": "2827e15f-71d2-4ced-9841-c5f224f98339"
  },
  {
   "name": "Terri Pflueger",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 84,
   "totalPointsAgainst": 101,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -17,
   "ppg": 16.8,
   "leagueRank": 197,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "name": "Michael Neyrus",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 81,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -18,
   "ppg": 16.2,
   "leagueRank": 202,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.7,
   "playerId": "da2dbedd-2a9d-4b7e-924c-374e11dcddd8"
  },
  {
   "name": "Heidi Lipton",
   "gender": "Female",
   "team": "One Love",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 279,
   "totalPointsAgainst": 298,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 40,
   "diff": -19,
   "ppg": 18.6,
   "leagueRank": 172,
   "rating": -0.3,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "7fbaae89-bf6e-441a-b713-9b1db817dc5c"
  },
  {
   "name": "Jim Sintic",
   "gender": "Male",
   "team": "One Love",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 257,
   "totalPointsAgainst": 286,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -29,
   "ppg": 17.1,
   "leagueRank": 191,
   "rating": -0.5,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "b3317f76-7939-45f1-a100-dbd17d9c768e"
  },
  {
   "name": "Cesar Fojas",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 255,
   "totalPointsAgainst": 289,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -34,
   "ppg": 17,
   "leagueRank": 189,
   "rating": -0.4,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "7c31fae2-4ca2-47e5-a531-cdcbdb069c80"
  },
  {
   "name": "Michael Cisar",
   "gender": "Male",
   "team": "One Love",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 7,
   "losses": 11,
   "pointsWon": 314,
   "totalPointsAgainst": 340,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 38.9,
   "diff": -26,
   "ppg": 17.4,
   "leagueRank": 185,
   "rating": -0.9,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.3,
   "playerId": "7e8fcb9e-d338-4358-9181-f03e57ba5c7c"
  },
  {
   "name": "Karen Kelly",
   "gender": "Female",
   "team": "One Love",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 7,
   "losses": 11,
   "pointsWon": 301,
   "totalPointsAgainst": 355,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 38.9,
   "diff": -54,
   "ppg": 16.7,
   "leagueRank": 203,
   "rating": -0.8,
   "ratingGames": 18,
   "confidence": 74,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "07767191-9167-4314-973d-3798ae6265a9"
  },
  {
   "name": "Nan Feng",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 280,
   "totalPointsAgainst": 310,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -30,
   "ppg": 17.5,
   "leagueRank": 181,
   "rating": 1.1,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.9,
   "playerId": "37674a49-6b43-48ad-827a-4d3baa1cab1c"
  },
  {
   "name": "Andre Goldstein",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 199,
   "totalPointsAgainst": 209,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 36.4,
   "diff": -10,
   "ppg": 18.1,
   "leagueRank": 178,
   "rating": 0.9,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "155f1b6d-eba7-4faf-a4c0-0fc6184e08ae"
  },
  {
   "name": "Eileen Clark",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 182,
   "totalPointsAgainst": 220,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 36.4,
   "diff": -38,
   "ppg": 16.5,
   "leagueRank": 219,
   "rating": -2.5,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "2abe95e2-0e73-49b6-aca8-689041f98b94"
  },
  {
   "name": "Sandy Hopkins",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 173,
   "totalPointsAgainst": 213,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 36.4,
   "diff": -40,
   "ppg": 15.7,
   "leagueRank": 214,
   "rating": -1,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -2.8,
   "strengthOfOpponents": -0.3,
   "playerId": "e80ce493-2de2-40d5-a94c-ea0d42634f82"
  },
  {
   "name": "Lisa Kulback",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 118,
   "totalPointsAgainst": 112,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 33.3,
   "diff": 6,
   "ppg": 19.7,
   "leagueRank": 193,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "ac75f27b-6bc1-4888-8a4e-0fdac0b4a558"
  },
  {
   "name": "Gustavo Ramos",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 114,
   "totalPointsAgainst": 110,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": 4,
   "ppg": 19,
   "leagueRank": 168,
   "rating": 1,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "c4cb1aad-8e5f-4793-a206-18739d2190d3"
  },
  {
   "name": "Leonard Procaccino",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 3,
   "losses": 6,
   "pointsWon": 156,
   "totalPointsAgainst": 158,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -2,
   "ppg": 17.3,
   "leagueRank": 184,
   "rating": 0.3,
   "ratingGames": 9,
   "confidence": 61,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "fe15dec9-7fc3-4a99-9035-ff18c41bb6d2"
  },
  {
   "name": "Tinglan Zhao",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 3,
   "wins": 1,
   "losses": 2,
   "pointsWon": 55,
   "totalPointsAgainst": 59,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "winPct": 33.3,
   "diff": -4,
   "ppg": 18.3,
   "leagueRank": 264,
   "rating": 0.1,
   "ratingGames": 3,
   "confidence": 29,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0
  },
  {
   "name": "Cristian Castro",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 111,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "6d414441-10cf-4e32-82e9-b781b406e64a",
   "winPct": 33.3,
   "diff": -5,
   "ppg": 18.5,
   "leagueRank": 196,
   "rating": 1.6,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -3,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Sal Frangipane",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 106,
   "totalPointsAgainst": 114,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a",
   "winPct": 33.3,
   "diff": -8,
   "ppg": 17.7,
   "leagueRank": 187,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Ying Lin",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 112,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "b31d49f9-a969-4c47-a7a5-2ae2b7a914df",
   "winPct": 33.3,
   "diff": -9,
   "ppg": 18.7,
   "leagueRank": 208,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Lisa Loeber",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 112,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -10,
   "ppg": 18.7,
   "leagueRank": 180,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.7,
   "playerId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd"
  },
  {
   "name": "Stephanie Sozomenu",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 111,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -11,
   "ppg": 18.5,
   "leagueRank": 195,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.4,
   "playerId": "9b43d5cd-a837-4958-a69e-404061700cc6"
  },
  {
   "name": "Andrew Fang",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 107,
   "totalPointsAgainst": 119,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -12,
   "ppg": 17.8,
   "leagueRank": 190,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.5,
   "playerId": "71f39077-b218-4226-8cf0-6419364ce275"
  },
  {
   "name": "Aaron Smith",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 208,
   "totalPointsAgainst": 238,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -30,
   "ppg": 17.3,
   "leagueRank": 198,
   "rating": 0.1,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.2,
   "playerId": "c52d90c3-f405-4312-8c1d-0a828ce19a18"
  },
  {
   "name": "Stephen Cordaro",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 244,
   "totalPointsAgainst": 298,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -54,
   "ppg": 16.3,
   "leagueRank": 220,
   "rating": -0.9,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "5c67007f-4ceb-44a8-873d-0c00553626a5"
  },
  {
   "name": "Ting Chen",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 275,
   "totalPointsAgainst": 321,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 31.3,
   "diff": -46,
   "ppg": 17.2,
   "leagueRank": 204,
   "rating": 0.1,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.1,
   "playerId": "9642a1bd-ed0a-4d65-9c6e-8f0c04721c75"
  },
  {
   "name": "Lance Arlaus",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 271,
   "totalPointsAgainst": 318,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 31.3,
   "diff": -47,
   "ppg": 16.9,
   "leagueRank": 213,
   "rating": -1.1,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "3b4a5b66-69e2-44be-96c8-b48d93e9ae6f"
  },
  {
   "name": "Kristen Silvestri",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 230,
   "totalPointsAgainst": 257,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 30.8,
   "diff": -27,
   "ppg": 17.7,
   "leagueRank": 207,
   "rating": -0.3,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "035a8041-2b2d-4050-a71d-9a8e7fb1b5e6"
  },
  {
   "name": "Christian Aberin",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 223,
   "totalPointsAgainst": 261,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 30.8,
   "diff": -38,
   "ppg": 17.2,
   "leagueRank": 217,
   "rating": -1.5,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "d4254f79-f461-4723-9a64-2660985b2702"
  },
  {
   "name": "Denise Rempson",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 206,
   "totalPointsAgainst": 255,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 30.8,
   "diff": -49,
   "ppg": 15.8,
   "leagueRank": 223,
   "rating": 0.2,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.4,
   "playerId": "2e13698d-f902-43c1-b5b1-226d40d7af3d"
  },
  {
   "name": "Zhaohui Li",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 180,
   "totalPointsAgainst": 190,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -10,
   "ppg": 18,
   "leagueRank": 199,
   "rating": -0.6,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "318197d4-7171-47d3-b14a-a5c9b4276f77"
  },
  {
   "name": "Kenneth Pickett",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 181,
   "totalPointsAgainst": 201,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -20,
   "ppg": 18.1,
   "leagueRank": 201,
   "rating": -0.3,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "98d93578-da83-40f7-ba1d-ac42a61c848c"
  },
  {
   "name": "Roni Douber",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 169,
   "totalPointsAgainst": 192,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 30,
   "diff": -23,
   "ppg": 16.9,
   "leagueRank": 215,
   "rating": -1,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "8ec58af7-1a0a-445f-a4b8-6b4cdd68d908"
  },
  {
   "name": "Michael Stout",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 156,
   "totalPointsAgainst": 204,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 30,
   "diff": -48,
   "ppg": 15.6,
   "leagueRank": 237,
   "rating": -2.3,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.1,
   "playerId": "c6ea0e1b-0c39-4824-a7f8-68bcf38be1a9"
  },
  {
   "name": "Stella Ott",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 5,
   "losses": 12,
   "pointsWon": 300,
   "totalPointsAgainst": 335,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 29.4,
   "diff": -35,
   "ppg": 17.6,
   "leagueRank": 200,
   "rating": 0.3,
   "ratingGames": 17,
   "confidence": 73,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "a9c9b8dc-e4b6-49b3-9ec3-de99246526fa"
  },
  {
   "name": "Cromwell Palomares",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 17,
   "wins": 5,
   "losses": 12,
   "pointsWon": 295,
   "totalPointsAgainst": 338,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 29.4,
   "diff": -43,
   "ppg": 17.4,
   "leagueRank": 206,
   "rating": 0.4,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.8,
   "playerId": "bc82cbed-1dfa-43fa-9cc5-1f12b6c4fe76"
  },
  {
   "name": "Larry Minsky",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 111,
   "totalPointsAgainst": 130,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440",
   "winPct": 28.6,
   "diff": -19,
   "ppg": 15.9,
   "leagueRank": 250,
   "rating": -0.1,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Vlad Radomsky",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 112,
   "totalPointsAgainst": 143,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "f292c0a4-030f-4f06-bef6-1588f91c5cab",
   "winPct": 28.6,
   "diff": -31,
   "ppg": 16,
   "leagueRank": 243,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Raffaella Pernice",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 192,
   "totalPointsAgainst": 224,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 27.3,
   "diff": -32,
   "ppg": 17.5,
   "leagueRank": 222,
   "rating": -0.8,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "f886bdf8-6b28-4b31-9587-fe6d2e9aea4a"
  },
  {
   "name": "Brenda Weckerly",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 71,
   "totalPointsAgainst": 78,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -7,
   "ppg": 17.8,
   "leagueRank": 285,
   "rating": -1.7,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "02393ba1-f669-4704-87de-0d61a131ee75"
  },
  {
   "name": "Henry Rodrique",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 70,
   "totalPointsAgainst": 81,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -11,
   "ppg": 17.5,
   "leagueRank": 292,
   "rating": -1.7,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "2760d071-a517-47ed-8c05-f7547dd464f9"
  },
  {
   "name": "Rosanna Neis",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 215,
   "totalPointsAgainst": 233,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -18,
   "ppg": 17.9,
   "leagueRank": 210,
   "rating": -1.3,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "b4ef8674-2eff-4b19-80c1-82de7f94d8b7"
  },
  {
   "name": "Buyi Zhang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 61,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -21,
   "ppg": 15.3,
   "leagueRank": 309,
   "rating": -0.8,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.5,
   "playerId": "abd55992-7237-4a92-817d-3d39388369c9"
  },
  {
   "name": "Jim Hu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 138,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "2ec82ce9-5de9-4bee-9f84-b28c2f6c0f2c",
   "winPct": 25,
   "diff": -26,
   "ppg": 17.3,
   "leagueRank": 218,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Rita Hung",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 212,
   "totalPointsAgainst": 245,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -33,
   "ppg": 17.7,
   "leagueRank": 209,
   "rating": 0.7,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.6,
   "playerId": "42cd2ea9-67c6-4d62-ad7f-8005e5c03606"
  },
  {
   "name": "Mark Vanarendonk",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 131,
   "totalPointsAgainst": 164,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -33,
   "ppg": 16.4,
   "leagueRank": 225,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.5,
   "playerId": "7d118eb0-a3f3-4932-a637-1e9fcb986ff9"
  },
  {
   "name": "Savita Nandal",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 128,
   "totalPointsAgainst": 161,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -33,
   "ppg": 16,
   "leagueRank": 234,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.1,
   "playerId": "ce787b4f-30b9-4fd0-a12a-caba1f27ca68"
  },
  {
   "name": "Pedro Oliveira",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 192,
   "totalPointsAgainst": 243,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -51,
   "ppg": 16,
   "leagueRank": 228,
   "rating": 0.1,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.4,
   "playerId": "6600b9f3-d27b-4772-8308-5636ac646776"
  },
  {
   "name": "Herald Barber",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 262,
   "totalPointsAgainst": 322,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -60,
   "ppg": 16.4,
   "leagueRank": 226,
   "rating": -0.8,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.9,
   "playerId": "8bb1e9d8-4569-41d0-8502-a265101a76d6"
  },
  {
   "name": "Nancy Culley",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 253,
   "totalPointsAgainst": 318,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -65,
   "ppg": 15.8,
   "leagueRank": 233,
   "rating": -1,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.4,
   "playerId": "f58a1856-de9a-46ee-8a63-0445bee6fd3f"
  },
  {
   "name": "Janine Thompson",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 234,
   "totalPointsAgainst": 283,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 21.4,
   "diff": -49,
   "ppg": 16.7,
   "leagueRank": 230,
   "rating": -0.4,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.9,
   "playerId": "e9c2ebf6-88d5-485d-be0f-8c71488231ae"
  },
  {
   "name": "Jennie Diamond",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 82,
   "totalPointsAgainst": 94,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -12,
   "ppg": 16.4,
   "leagueRank": 280,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "14cdc9a7-221c-4933-bec3-854de864ccea"
  },
  {
   "name": "Hugh Pinder",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 90,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -13,
   "ppg": 18,
   "leagueRank": 221,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.3,
   "playerId": "db17f42a-bdb5-4e65-ae18-487c8d6f4915"
  },
  {
   "name": "Willie Simmons",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 90,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "525db6fc-8fd4-42f1-97c6-51fb915cb21b",
   "winPct": 20,
   "diff": -13,
   "ppg": 18,
   "leagueRank": 270,
   "rating": 0.7,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -3.4,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Nancy Atkinson",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 87,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -14,
   "ppg": 17.4,
   "leagueRank": 229,
   "rating": -1.3,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "4ef265ed-35c0-4d1d-a51e-a258891a9261"
  },
  {
   "name": "Guihua Zhang",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 88,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "81abfb04-0994-4144-9d27-5c37354151cf",
   "winPct": 20,
   "diff": -15,
   "ppg": 17.6,
   "leagueRank": 278,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Idris Nejumi",
   "gender": "Male",
   "team": "Premiere",
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
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -16,
   "ppg": 17.4,
   "leagueRank": 238,
   "rating": -1.2,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "be327e7d-88f5-4531-b6b9-a2ff187578a4"
  },
  {
   "name": "Andre Illipronti",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 83,
   "totalPointsAgainst": 100,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "ee105674-dae7-4275-b99a-df2775178111",
   "winPct": 20,
   "diff": -17,
   "ppg": 16.6,
   "leagueRank": 281,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "David Fintzy",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 83,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "619e457b-6d1f-45a8-b26a-e7103920eb21",
   "winPct": 20,
   "diff": -20,
   "ppg": 16.6,
   "leagueRank": 287,
   "rating": -1.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "John Dedeaux",
   "gender": "Male",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 80,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -21,
   "ppg": 16,
   "leagueRank": 297,
   "rating": -1.8,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "3f619777-f9a4-4b60-b0a7-6d3c8b0d64db"
  },
  {
   "name": "Hal Gandhi",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 75,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "a7263768-f53d-4f61-8638-369a107e99f7",
   "winPct": 20,
   "diff": -26,
   "ppg": 15,
   "leagueRank": 306,
   "rating": -1.4,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Tina Pucciarelli",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 76,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -27,
   "ppg": 15.2,
   "leagueRank": 255,
   "rating": -0.8,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.4,
   "playerId": "b0500f7e-717f-4926-bcbf-393c69bb395b"
  },
  {
   "name": "Guitta Barghash",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 71,
   "totalPointsAgainst": 100,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "8011677b-64c0-467d-8d54-c32da035effe",
   "winPct": 20,
   "diff": -29,
   "ppg": 14.2,
   "leagueRank": 308,
   "rating": -2,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Mark Szeman",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 74,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "809f4c8e-21ab-4742-b993-4e9e99d0fd16",
   "winPct": 20,
   "diff": -29,
   "ppg": 14.8,
   "leagueRank": 301,
   "rating": -0.9,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Kim Rodano",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 72,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -31,
   "ppg": 14.4,
   "leagueRank": 263,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.5,
   "playerId": "eb092346-ac88-4215-bc16-b7c20c01aa62"
  },
  {
   "name": "Janette Crowe",
   "gender": "Female",
   "team": "One Love",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 66,
   "totalPointsAgainst": 97,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "cc77a7f0-8771-48b0-aedb-6a6aae456efc",
   "winPct": 20,
   "diff": -31,
   "ppg": 13.2,
   "leagueRank": 315,
   "rating": -1.7,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Joe Chin",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 167,
   "totalPointsAgainst": 206,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -39,
   "ppg": 16.7,
   "leagueRank": 248,
   "rating": -3.3,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "6ff12922-82df-486a-a686-c5a77674cbf4"
  },
  {
   "name": "Stu Schwartz",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 156,
   "totalPointsAgainst": 206,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -50,
   "ppg": 15.6,
   "leagueRank": 256,
   "rating": -2.6,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.6,
   "playerId": "083316b5-595a-4b81-90e7-d72ee570e021"
  },
  {
   "name": "Ericka Lyn Mayer",
   "gender": "Female",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 147,
   "totalPointsAgainst": 197,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -50,
   "ppg": 14.7,
   "leagueRank": 271,
   "rating": -4,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.6,
   "playerId": "442d80c7-8eaf-413b-b99b-7cdaddb08b7c"
  },
  {
   "name": "Ronald Wong",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 154,
   "totalPointsAgainst": 205,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "6518a1dd-c30a-464a-a378-d8080c480742",
   "winPct": 20,
   "diff": -51,
   "ppg": 15.4,
   "leagueRank": 244,
   "rating": -1.2,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Izabel Illipronti",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 238,
   "totalPointsAgainst": 303,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -65,
   "ppg": 15.9,
   "leagueRank": 240,
   "rating": -1.5,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.6,
   "playerId": "e4b1fba4-7df9-45eb-ad2f-d6b352d25cf4"
  },
  {
   "name": "Thomas Lum",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 3,
   "losses": 13,
   "pointsWon": 257,
   "totalPointsAgainst": 327,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 18.8,
   "diff": -70,
   "ppg": 16.1,
   "leagueRank": 241,
   "rating": -1.1,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.7,
   "playerId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7"
  },
  {
   "name": "Gwen Leach",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 3,
   "losses": 13,
   "pointsWon": 217,
   "totalPointsAgainst": 321,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 18.8,
   "diff": -104,
   "ppg": 13.6,
   "leagueRank": 276,
   "rating": -3.6,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": -0.1,
   "playerId": "1ca5f8b5-dd7b-4761-94ed-6eb61c36eb78"
  },
  {
   "name": "Michael-John Van Rhyn",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 187,
   "totalPointsAgainst": 227,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 18.2,
   "diff": -40,
   "ppg": 17,
   "leagueRank": 231,
   "rating": -1,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "9d3946e6-1bab-4f1c-911c-81e21eb6caf1"
  },
  {
   "name": "Yolanda Li",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 176,
   "totalPointsAgainst": 223,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 18.2,
   "diff": -47,
   "ppg": 16,
   "leagueRank": 257,
   "rating": -2.2,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "c27bd9a5-be16-49eb-a849-d3a556ab1d75"
  },
  {
   "name": "Rachel Baluyot",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 177,
   "totalPointsAgainst": 226,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 18.2,
   "diff": -49,
   "ppg": 16.1,
   "leagueRank": 249,
   "rating": -2.1,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "5e265a90-558b-4564-acd8-f358bab162a9"
  },
  {
   "name": "Derek Manwaring",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 17,
   "wins": 3,
   "losses": 14,
   "pointsWon": 308,
   "totalPointsAgainst": 340,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 17.6,
   "diff": -32,
   "ppg": 18.1,
   "leagueRank": 224,
   "rating": 0.4,
   "ratingGames": 17,
   "confidence": 72,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.7,
   "playerId": "ec511d19-2f10-425b-828f-708e5365bfcf"
  },
  {
   "name": "Karen Gallione",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 3,
   "losses": 14,
   "pointsWon": 273,
   "totalPointsAgainst": 345,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 17.6,
   "diff": -72,
   "ppg": 16.1,
   "leagueRank": 242,
   "rating": -0.4,
   "ratingGames": 17,
   "confidence": 76,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.3,
   "playerId": "401902c9-4e46-4ed7-9995-643dc73f135a"
  },
  {
   "name": "Jun Li",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 107,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -13,
   "ppg": 17.8,
   "leagueRank": 259,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "75e4a96f-5f49-4dec-97f2-6a79d5d290f4"
  },
  {
   "name": "Rob Mendez",
   "gender": "Male",
   "team": "One Love",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 108,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "e51938cc-4b58-4738-b95a-1cc62a37f4a6",
   "winPct": 16.7,
   "diff": -16,
   "ppg": 18,
   "leagueRank": 252,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Jess Cox",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 102,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -18,
   "ppg": 17,
   "leagueRank": 260,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "e8a46252-99c1-405e-857c-d52d9550717a"
  },
  {
   "name": "Allison Klein",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 96,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "b7d7724a-519a-4a7e-ae32-df4c63799f3f",
   "winPct": 16.7,
   "diff": -20,
   "ppg": 16,
   "leagueRank": 273,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Dawn Willemsen",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 95,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "34d7bcec-00db-4531-a2f3-95b962aa748e",
   "winPct": 16.7,
   "diff": -21,
   "ppg": 15.8,
   "leagueRank": 289,
   "rating": -3.4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Annette Sutton",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 102,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "a0794ad8-1116-4fe9-a85b-0cfba278df20",
   "winPct": 16.7,
   "diff": -22,
   "ppg": 17,
   "leagueRank": 269,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Dave Hartzell",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 101,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -23,
   "ppg": 16.8,
   "leagueRank": 239,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.5,
   "playerId": "844b1121-409f-4c34-8030-cbbcaee54cc3"
  },
  {
   "name": "Kelly Davis",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 93,
   "totalPointsAgainst": 118,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "65434b16-8756-4212-bfc5-e707a95da934",
   "winPct": 16.7,
   "diff": -25,
   "ppg": 15.5,
   "leagueRank": 277,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Mauricio Ramirez",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 98,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -26,
   "ppg": 16.3,
   "leagueRank": 247,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.1,
   "playerId": "4b8bb97a-f15c-4f8d-926f-8a19379d6cfa"
  },
  {
   "name": "Sarah Ramadas",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 205,
   "totalPointsAgainst": 236,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 16.7,
   "diff": -31,
   "ppg": 17.1,
   "leagueRank": 232,
   "rating": -1.1,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1,
   "playerId": "8137da09-2781-4112-972a-dfd1c8102ba3"
  },
  {
   "name": "Manop Sutipayakul",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 88,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -33,
   "ppg": 14.7,
   "leagueRank": 284,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.7,
   "playerId": "fc240672-f23c-40d4-9601-d019937cd3bf"
  },
  {
   "name": "Jonathan Basa",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 188,
   "totalPointsAgainst": 242,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 16.7,
   "diff": -54,
   "ppg": 15.7,
   "leagueRank": 254,
   "rating": -1.4,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "916dafeb-720f-471b-9609-7f338b793ed3"
  },
  {
   "name": "Shobana Ravishankar",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 184,
   "totalPointsAgainst": 242,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -58,
   "ppg": 15.3,
   "leagueRank": 251,
   "rating": -0.6,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.3,
   "playerId": "12f7de26-e375-4efe-a282-f292bd8ca719"
  },
  {
   "name": "Jemma Bucks",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 3,
   "losses": 15,
   "pointsWon": 252,
   "totalPointsAgainst": 358,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -106,
   "ppg": 14,
   "leagueRank": 275,
   "rating": -3.4,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "f0acebf7-62fd-455a-9fa4-c5ca589fc1b5"
  },
  {
   "name": "Sergei Hoffman",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 116,
   "totalPointsAgainst": 145,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 14.3,
   "diff": -29,
   "ppg": 16.6,
   "leagueRank": 246,
   "rating": -0.6,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "1595a2c9-191e-42fc-808f-801346211bdd"
  },
  {
   "name": "Sara Renzulli",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 2,
   "losses": 13,
   "pointsWon": 250,
   "totalPointsAgainst": 306,
   "mixedWins": 0,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 13.3,
   "diff": -56,
   "ppg": 16.7,
   "leagueRank": 245,
   "rating": -2.2,
   "ratingGames": 15,
   "confidence": 69,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0,
   "playerId": "21da9d6f-1118-44a7-984d-0565cb46f43d"
  },
  {
   "name": "Lisa Braumann",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 2,
   "losses": 13,
   "pointsWon": 222,
   "totalPointsAgainst": 307,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 13.3,
   "diff": -85,
   "ppg": 14.8,
   "leagueRank": 267,
   "rating": -1.3,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.2,
   "playerId": "b3d8b1e5-378c-4b5b-bc50-dfa39e6c8311"
  },
  {
   "name": "Stephen Levitt",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 2,
   "losses": 13,
   "pointsWon": 226,
   "totalPointsAgainst": 311,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 13.3,
   "diff": -85,
   "ppg": 15.1,
   "leagueRank": 265,
   "rating": -1.5,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.2,
   "playerId": "d8be7fe2-86ab-439d-b245-fe02733b80d3"
  },
  {
   "name": "Xilin Zhao",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 118,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "bfecc55a-a909-44da-8292-6b59b37a6043",
   "winPct": 12.5,
   "diff": -48,
   "ppg": 14.8,
   "leagueRank": 272,
   "rating": -1.2,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Margaret Bayse",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 2,
   "losses": 14,
   "pointsWon": 206,
   "totalPointsAgainst": 327,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -121,
   "ppg": 12.9,
   "leagueRank": 288,
   "rating": -4.5,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "941eff8b-b056-483d-b927-48cf751a04d9"
  },
  {
   "name": "Enid Lum",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 2,
   "losses": 15,
   "pointsWon": 271,
   "totalPointsAgainst": 351,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 11.8,
   "diff": -80,
   "ppg": 15.9,
   "leagueRank": 261,
   "rating": -1.7,
   "ratingGames": 17,
   "confidence": 73,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.5,
   "playerId": "fa4eb637-9da5-4418-9135-c41cca7e6ced"
  },
  {
   "name": "Stephen Stasiulewicz",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 2,
   "losses": 15,
   "pointsWon": 247,
   "totalPointsAgainst": 350,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 11.8,
   "diff": -103,
   "ppg": 14.5,
   "leagueRank": 274,
   "rating": -2.6,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.1,
   "playerId": "40a679d7-818c-46dc-872c-5e1cdf926e44"
  },
  {
   "name": "Rayleen Romeo",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 1,
   "losses": 8,
   "pointsWon": 156,
   "totalPointsAgainst": 185,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 11.1,
   "diff": -29,
   "ppg": 17.3,
   "leagueRank": 262,
   "rating": -3.9,
   "ratingGames": 9,
   "confidence": 61,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.9,
   "playerId": "ed39904c-85db-4a4d-ba86-1e5c7f98529a"
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 1,
   "losses": 8,
   "pointsWon": 147,
   "totalPointsAgainst": 185,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 11.1,
   "diff": -38,
   "ppg": 16.3,
   "leagueRank": 253,
   "rating": -0.4,
   "ratingGames": 9,
   "confidence": 62,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.4,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "name": "David Tisony",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 137,
   "totalPointsAgainst": 208,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 10,
   "diff": -71,
   "ppg": 13.7,
   "leagueRank": 290,
   "rating": -3.7,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "cc825d8d-1218-413e-93c0-576dfe643a79"
  },
  {
   "name": "Michael Mastando",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 1,
   "losses": 10,
   "pointsWon": 185,
   "totalPointsAgainst": 225,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 9.1,
   "diff": -40,
   "ppg": 16.8,
   "leagueRank": 258,
   "rating": -1.4,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "e1da49d1-14cf-4a20-9f10-39c7ba6c38c4"
  },
  {
   "name": "Louis Sapirman",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 1,
   "losses": 10,
   "pointsWon": 155,
   "totalPointsAgainst": 229,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 9.1,
   "diff": -74,
   "ppg": 14.1,
   "leagueRank": 291,
   "rating": -4.7,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "2a05bac5-f8e0-4e68-928e-bb0ac69f1921"
  },
  {
   "name": "Gary Grzankowski",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 1,
   "losses": 14,
   "pointsWon": 219,
   "totalPointsAgainst": 309,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 6.7,
   "diff": -90,
   "ppg": 14.6,
   "leagueRank": 279,
   "rating": -2.1,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.3,
   "playerId": "67f81846-bb41-4b0b-8d77-c0d876a4561c"
  },
  {
   "name": "Vincent Lamarco",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 1,
   "losses": 14,
   "pointsWon": 215,
   "totalPointsAgainst": 310,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 6.7,
   "diff": -95,
   "ppg": 14.3,
   "leagueRank": 282,
   "rating": -3.1,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.2,
   "playerId": "0930c5f6-0231-431b-b9bb-609e61b519c1"
  },
  {
   "name": "Julian Stamper",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 1,
   "losses": 14,
   "pointsWon": 171,
   "totalPointsAgainst": 313,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 6.7,
   "diff": -142,
   "ppg": 11.4,
   "leagueRank": 310,
   "rating": -6.4,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "e66968be-773e-47ec-9f2c-10d7f2bcd3af"
  },
  {
   "name": "Joy Perry",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 1,
   "losses": 15,
   "pointsWon": 212,
   "totalPointsAgainst": 331,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 6.3,
   "diff": -119,
   "ppg": 13.3,
   "leagueRank": 299,
   "rating": -3.6,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -2.8,
   "strengthOfOpponents": 0.1,
   "playerId": "a9f2a010-b832-4aed-b68e-28fecd6a297d"
  },
  {
   "name": "Mark Pleasanton",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 1,
   "losses": 16,
   "pointsWon": 242,
   "totalPointsAgainst": 355,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 1,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 5.9,
   "diff": -113,
   "ppg": 14.2,
   "leagueRank": 286,
   "rating": -2.6,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": 0.5,
   "playerId": "f0d9f371-371e-4625-ad0a-aea8da83fb8e"
  },
  {
   "name": "Glenn Gelband",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
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
   "playerId": "07a72050-9445-4192-82f6-7aed7722129f"
  },
  {
   "name": "Rodney Pierson",
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
   "leagueRank": 375,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0a43c509-a439-4ddd-8084-728b7818a416"
  },
  {
   "name": "Bruce Bilow",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
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
   "playerId": "1607c79a-6ca1-4214-a557-5ae0617ac8a1"
  },
  {
   "name": "Ronnie Kostak",
   "gender": "Female",
   "team": "Montville Rocks",
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
   "playerId": "1a34ae87-9a09-4766-bdeb-dc8638846f24"
  },
  {
   "name": "Colleen Derose",
   "gender": "Female",
   "team": "ACE Moorestown",
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
   "leagueRank": 341,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1b8d34a3-9006-4e6f-b475-e5f3b4f7e814"
  },
  {
   "name": "Liane Feyas",
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
   "leagueRank": 344,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2266824f-5ba8-4da3-a512-94c8e14f7c90"
  },
  {
   "name": "Vilmantas Latvys",
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
   "leagueRank": 356,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "258defc8-d5f3-4a32-bad2-66e180b19d44"
  },
  {
   "name": "Peter Kuehne",
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
   "leagueRank": 354,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2dfb6945-94b8-4fcd-85a6-2696fb38d54b"
  },
  {
   "name": "Virna Schuck",
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
   "leagueRank": 382,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "39d80b41-0804-4cc7-b92f-b225849bb720"
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
   "leagueRank": 362,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "431b6290-28c1-49a9-b2a1-a0bb26532cca"
  },
  {
   "name": "Bill Del Pizzo",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
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
   "leagueRank": 339,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "510eec89-c8f8-4e7d-8d41-b8f7e9dc4959"
  },
  {
   "name": "Christina Rothman-Iliff",
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
   "leagueRank": 379,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "52221bc6-418a-45b2-9e92-5600b5a3040d"
  },
  {
   "name": "Marilyn Janssen",
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
   "leagueRank": 350,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "721ae7df-e56e-45a3-b814-ff040a4f5bb4"
  },
  {
   "name": "Lynne Walrod",
   "gender": "Female",
   "team": "One Love",
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
   "leagueRank": 386,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "779942b7-7f8c-45bd-ba33-9c07bd261d23"
  },
  {
   "name": "Linda Deroberts",
   "gender": "Female",
   "team": "One Love",
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
   "leagueRank": 340,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7cedc985-b9e3-4d1d-ad0c-2880c5ad255a"
  },
  {
   "name": "Susan Belanger",
   "gender": "Female",
   "team": "One Love",
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
   "playerId": "864e4dd6-eb0d-46bf-9f15-5a9848251509"
  },
  {
   "name": "Amy Maussner",
   "gender": "Female",
   "team": "APC Garden State",
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
   "leagueRank": 365,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3"
  },
  {
   "name": "Ronnie Yin",
   "gender": "Female",
   "team": "Allstar Pickler",
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
   "leagueRank": 394,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "name": "Scott Richeal",
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
   "leagueRank": 377,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b6494c60-f3bc-4500-b908-d8e5b4ebcf89"
  },
  {
   "name": "Gerilynn Calato",
   "gender": "Female",
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
   "leagueRank": 335,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b97f2734-690d-4b32-a003-5950ae351c3a"
  },
  {
   "name": "Stephane Sabathiet",
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
   "leagueRank": 380,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c45a1c4a-3aec-4920-ac7b-22142f13030f"
  },
  {
   "name": "Alfonse Calato",
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
   "leagueRank": 334,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "name": "Gerard Scipione",
   "gender": "Male",
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
   "leagueRank": 383,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cc559f7c-6bee-455a-a2e9-bb6f994ddb85"
  },
  {
   "name": "Greg Schipske",
   "gender": "Male",
   "team": "APC Garden State",
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
   "leagueRank": 381,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cdd3c5e6-7a40-4b65-a175-7910ba8e9ef9"
  },
  {
   "name": "Jianfeng Wang",
   "gender": "Male",
   "team": "Montville Rocks",
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
   "leagueRank": 389,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d0138abd-f60e-490a-acaa-d4372e973d57"
  },
  {
   "name": "David Corwin",
   "gender": "Male",
   "team": "ACE Moorestown",
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
   "leagueRank": 338,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d026f18b-708f-49ce-99a2-77267ee0256e"
  },
  {
   "name": "Janine Mule",
   "gender": "Female",
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
   "leagueRank": 370,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d1a3fe62-7abd-44cf-9210-aae432439fa6"
  },
  {
   "name": "Linda Zarrilli",
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
   "leagueRank": 395,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d2a43eb3-f288-4ef4-bae9-209ab6ec0f0c"
  },
  {
   "name": "Valerie Ablaza",
   "gender": "Female",
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
   "leagueRank": 326,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d48ef63c-f537-4c65-93b1-f1907d2c2c2a"
  },
  {
   "name": "Lizzie Brofft",
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
   "leagueRank": 332,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d566e39d-ad62-41aa-be9c-a535f141a8ee"
  },
  {
   "name": "John Kuo",
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
   "leagueRank": 355,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d9cf59fa-8fad-405c-b881-fa78c3a30968"
  },
  {
   "name": "Kenny Xu",
   "gender": "Male",
   "team": "Montville Rocks",
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
   "playerId": "e745841f-fdb4-4c67-bdc7-97aacd76d75c"
  },
  {
   "name": "Mike Hardy",
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
   "leagueRank": 347,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "name": "Becky Poon",
   "gender": "Female",
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
   "leagueRank": 376,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f918cd15-2c56-4b28-a4ae-7e5588920538"
  },
  {
   "name": "Gene Meads",
   "gender": "Male",
   "team": "One Love",
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
   "playerId": "fc938723-024e-4a2f-af97-1631190542d9"
  },
  {
   "name": "Richard Ross",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 87,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -18,
   "ppg": 17.4,
   "leagueRank": 266,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "9d1192c8-e17a-4251-a23b-59d122f4bada"
  },
  {
   "name": "John Dechristopher",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 86,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -19,
   "ppg": 17.2,
   "leagueRank": 268,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.2,
   "playerId": "57ad882f-2a78-4756-adcf-3839833ddcd3"
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
   "pointsWon": 83,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -22,
   "ppg": 16.6,
   "leagueRank": 313,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.5,
   "playerId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
  },
  {
   "name": "Karan Bhagat",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 103,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -23,
   "ppg": 17.2,
   "leagueRank": 293,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.1,
   "playerId": "69c075d1-004a-4e82-934c-373878b9c3c0"
  },
  {
   "name": "Todd Baron",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 82,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "3383dc77-6aed-499b-ac62-cefafa3b8e90",
   "winPct": 0,
   "diff": -23,
   "ppg": 16.4,
   "leagueRank": 311,
   "rating": -0.5,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Yuri Paritsky",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 78,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -27,
   "ppg": 15.6,
   "leagueRank": 283,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.6,
   "playerId": "812b9580-5a00-44a9-a5ed-5d1046755718"
  },
  {
   "name": "Scott Carney",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 77,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -28,
   "ppg": 15.4,
   "leagueRank": 317,
   "rating": -1.2,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.2,
   "playerId": "9ec7c7a3-54fd-4238-b6d7-289494547026"
  },
  {
   "name": "Neil Kussick",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 3,
   "wins": 0,
   "losses": 3,
   "pointsWon": 35,
   "totalPointsAgainst": 63,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "159d2ded-4857-40ba-81f5-bd019d96bcde",
   "winPct": 0,
   "diff": -28,
   "ppg": 11.7,
   "leagueRank": 325,
   "rating": -1.4,
   "ratingGames": 3,
   "confidence": 35,
   "strengthOfPartners": -3,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Tammy Horner",
   "gender": "Female",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 76,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -29,
   "ppg": 15.2,
   "leagueRank": 319,
   "rating": -1.4,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.9,
   "playerId": "0f37fd76-3f54-4ae4-b46a-1fa6033c55dc"
  },
  {
   "name": "Scott Auty",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 52,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -32,
   "ppg": 13,
   "leagueRank": 320,
   "rating": -2.6,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.5,
   "playerId": "53024744-72eb-4d56-b0c9-93a6201bdc33"
  },
  {
   "name": "Stacy Ip-Mo",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 73,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -32,
   "ppg": 14.6,
   "leagueRank": 294,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.5,
   "playerId": "d0562c60-5e2c-4647-805c-ac3740562432"
  },
  {
   "name": "Gioia Pisano",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 73,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b09b11f8-dd86-4252-88d0-f33fb4496237",
   "winPct": 0,
   "diff": -32,
   "ppg": 14.6,
   "leagueRank": 298,
   "rating": -2,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Sue Caputo",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 71,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -34,
   "ppg": 14.2,
   "leagueRank": 302,
   "rating": -2.7,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.1,
   "playerId": "39c42fdb-bb35-458b-9460-b60d8fa5fcdb"
  },
  {
   "name": "Steven Jaffe",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 48,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -36,
   "ppg": 12,
   "leagueRank": 324,
   "rating": -2.4,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 2,
   "playerId": "13f229ac-5fc1-494f-91ee-691e86036486"
  },
  {
   "name": "Kimberly Brooks",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 68,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -37,
   "ppg": 13.6,
   "leagueRank": 305,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1,
   "playerId": "8dccb4ea-c8f8-4a4a-845b-42ef4211a12c"
  },
  {
   "name": "Vera Wong",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 107,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "09ff18df-a4f9-4af7-808b-d8ceca5d1c57",
   "winPct": 0,
   "diff": -40,
   "ppg": 15.3,
   "leagueRank": 304,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 2.1
  },
  {
   "name": "Kenneth Margolin",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 107,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "21277f01-5086-42c3-a156-c7b1a503e75b",
   "winPct": 0,
   "diff": -40,
   "ppg": 15.3,
   "leagueRank": 307,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Paula Kolb",
   "gender": "Female",
   "team": "PCKLRAMA",
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
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -41,
   "ppg": 14.2,
   "leagueRank": 314,
   "rating": -2.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.2,
   "playerId": "8354a910-27fd-4e09-85bd-499f5cf84237"
  },
  {
   "name": "Geoff Feingold",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 63,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -42,
   "ppg": 12.6,
   "leagueRank": 323,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 2.4,
   "playerId": "e54138b1-320c-4181-97a4-603ed66e6c25"
  },
  {
   "name": "Wenbin Dang",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 88,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "3da0e40e-3b18-4375-8426-0dbe4b3d8c17",
   "winPct": 0,
   "diff": -59,
   "ppg": 12.6,
   "leagueRank": 318,
   "rating": -2.1,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Jean Xie",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 102,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "29db615a-61dd-4d70-8095-93d65c2af89a",
   "winPct": 0,
   "diff": -66,
   "ppg": 12.8,
   "leagueRank": 303,
   "rating": -1.2,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 2
  },
  {
   "name": "Timothy Hopkins",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 0,
   "losses": 10,
   "pointsWon": 142,
   "totalPointsAgainst": 210,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -68,
   "ppg": 14.2,
   "leagueRank": 296,
   "rating": -2,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -2.8,
   "strengthOfOpponents": 0.6,
   "playerId": "8acca4cc-875c-4594-8f46-3d31b0912227"
  },
  {
   "name": "Allison Xiao",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 77,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "d50d8512-f462-48e4-9025-0135117cabae",
   "winPct": 0,
   "diff": -70,
   "ppg": 11,
   "leagueRank": 321,
   "rating": -2.6,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 2.3
  },
  {
   "name": "Denise Aronson",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 90,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "848cb4f7-05ae-44e2-b0b0-589d5223ae36",
   "winPct": 0,
   "diff": -78,
   "ppg": 11.3,
   "leagueRank": 312,
   "rating": -2.4,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 2.2
  },
  {
   "name": "Charles Li",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 66,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "8863f91b-fd05-4ff3-8596-057a564a9741",
   "winPct": 0,
   "diff": -81,
   "ppg": 9.4,
   "leagueRank": 322,
   "rating": -4.2,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Virasack Vorabouth",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 0,
   "losses": 12,
   "pointsWon": 167,
   "totalPointsAgainst": 252,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -85,
   "ppg": 13.9,
   "leagueRank": 295,
   "rating": -1.6,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.7,
   "playerId": "a478ffa6-7bfc-4c67-9b3d-0aad661a58bc"
  },
  {
   "name": "Jinghua Shi",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 0,
   "losses": 9,
   "pointsWon": 97,
   "totalPointsAgainst": 189,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -92,
   "ppg": 10.8,
   "leagueRank": 316,
   "rating": -3.3,
   "ratingGames": 9,
   "confidence": 61,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 2.1,
   "playerId": "83effba4-f2b6-4576-93ef-1ba487b02f0c"
  },
  {
   "name": "Yayuan Lien",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 0,
   "losses": 14,
   "pointsWon": 193,
   "totalPointsAgainst": 294,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "f4725f25-ce53-4104-8f94-d558d8c39e84",
   "winPct": 0,
   "diff": -101,
   "ppg": 13.8,
   "leagueRank": 300,
   "rating": -2,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.7
  }
 ],
 "teams": [
  {
   "name": "Pickleball Palace",
   "w": 3,
   "l": 0,
   "pf": 1917,
   "pa": 1357,
   "gw": 83,
   "gl": 13,
   "diff": 560,
   "gameDiff": 70,
   "power": 1.6,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     38,
     10
    ],
    "male": [
     21,
     3
    ],
    "female": [
     24,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Tinton Falls",
   "w": 3,
   "l": 0,
   "pf": 2021,
   "pa": 1773,
   "gw": 65,
   "gl": 31,
   "diff": 248,
   "gameDiff": 34,
   "power": 1.1,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Southeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     32,
     16
    ],
    "male": [
     17,
     7
    ],
    "female": [
     16,
     8
    ]
   }
  },
  {
   "name": "Picklr Newtown",
   "w": 3,
   "l": 0,
   "pf": 1910,
   "pa": 1733,
   "gw": 61,
   "gl": 35,
   "diff": 177,
   "gameDiff": 26,
   "power": 1.1,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     27,
     21
    ],
    "male": [
     17,
     7
    ],
    "female": [
     17,
     7
    ]
   }
  },
  {
   "name": "Montville Rocks",
   "w": 2,
   "l": 0,
   "pf": 1345,
   "pa": 991,
   "gw": 58,
   "gl": 6,
   "diff": 354,
   "gameDiff": 52,
   "power": 2,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     27,
     5
    ],
    "male": [
     16,
     0
    ],
    "female": [
     15,
     1
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 2,
   "l": 0,
   "pf": 1305,
   "pa": 992,
   "gw": 50,
   "gl": 14,
   "diff": 313,
   "gameDiff": 36,
   "power": 1.4,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     25,
     7
    ],
    "male": [
     13,
     3
    ],
    "female": [
     12,
     4
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 2,
   "l": 1,
   "pf": 1898,
   "pa": 1659,
   "gw": 65,
   "gl": 31,
   "diff": 239,
   "gameDiff": 34,
   "power": 0.5,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     32,
     16
    ],
    "male": [
     16,
     8
    ],
    "female": [
     17,
     7
    ]
   }
  },
  {
   "name": "Stelton Sports",
   "w": 2,
   "l": 1,
   "pf": 1896,
   "pa": 1780,
   "gw": 55,
   "gl": 41,
   "diff": 116,
   "gameDiff": 14,
   "power": 0.6,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Southeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     25,
     23
    ],
    "male": [
     13,
     11
    ],
    "female": [
     17,
     7
    ]
   }
  },
  {
   "name": "Dill Dinkers Lansdale",
   "w": 2,
   "l": 1,
   "pf": 1855,
   "pa": 1712,
   "gw": 54,
   "gl": 42,
   "diff": 143,
   "gameDiff": 12,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     30,
     18
    ],
    "male": [
     13,
     11
    ],
    "female": [
     11,
     13
    ]
   }
  },
  {
   "name": "PCKLRAMA",
   "w": 2,
   "l": 1,
   "pf": 1858,
   "pa": 1773,
   "gw": 54,
   "gl": 42,
   "diff": 85,
   "gameDiff": 12,
   "power": 0.7,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     28,
     20
    ],
    "male": [
     16,
     8
    ],
    "female": [
     10,
     14
    ]
   }
  },
  {
   "name": "PickleRage Union County",
   "w": 2,
   "l": 1,
   "pf": 1207,
   "pa": 1194,
   "gw": 29,
   "gl": 35,
   "diff": 13,
   "gameDiff": -6,
   "power": -0.1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
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
     6,
     10
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 1,
   "l": 1,
   "pf": 1253,
   "pa": 1130,
   "gw": 43,
   "gl": 21,
   "diff": 123,
   "gameDiff": 22,
   "power": 0.1,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     22,
     10
    ],
    "male": [
     12,
     4
    ],
    "female": [
     9,
     7
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 1,
   "l": 1,
   "pf": 1220,
   "pa": 1313,
   "gw": 26,
   "gl": 38,
   "diff": -93,
   "gameDiff": -12,
   "power": -0.3,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "Southeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     15,
     17
    ],
    "male": [
     7,
     9
    ],
    "female": [
     4,
     12
    ]
   }
  },
  {
   "name": "Picklr Fair Lawn",
   "w": 1,
   "l": 2,
   "pf": 1830,
   "pa": 1850,
   "gw": 46,
   "gl": 50,
   "diff": -20,
   "gameDiff": -4,
   "power": 0.1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     24,
     24
    ],
    "male": [
     7,
     17
    ],
    "female": [
     15,
     9
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 1,
   "l": 2,
   "pf": 993,
   "pa": 1161,
   "gw": 24,
   "gl": 40,
   "diff": -168,
   "gameDiff": -16,
   "power": -0.8,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     10,
     22
    ],
    "male": [
     8,
     8
    ],
    "female": [
     6,
     10
    ]
   }
  },
  {
   "name": "One Love",
   "w": 0,
   "l": 3,
   "pf": 1682,
   "pa": 1922,
   "gw": 34,
   "gl": 62,
   "diff": -240,
   "gameDiff": -28,
   "power": -0.9,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "Southeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     14,
     34
    ],
    "male": [
     8,
     16
    ],
    "female": [
     12,
     12
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 0,
   "l": 1,
   "pf": 567,
   "pa": 651,
   "gw": 11,
   "gl": 21,
   "diff": -84,
   "gameDiff": -10,
   "power": -0.2,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Southeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     7,
     9
    ],
    "male": [
     3,
     5
    ],
    "female": [
     1,
     7
    ]
   }
  },
  {
   "name": "Montville Dragons",
   "w": 0,
   "l": 3,
   "pf": 1621,
   "pa": 1969,
   "gw": 24,
   "gl": 72,
   "diff": -348,
   "gameDiff": -48,
   "power": -0.9,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     13,
     35
    ],
    "male": [
     7,
     17
    ],
    "female": [
     4,
     20
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Watchung",
   "w": 0,
   "l": 3,
   "pf": 1512,
   "pa": 1950,
   "gw": 20,
   "gl": 76,
   "diff": -438,
   "gameDiff": -56,
   "power": -1.2,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     16,
     32
    ],
    "male": [
     1,
     23
    ],
    "female": [
     3,
     21
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 0,
   "l": 1,
   "pf": 553,
   "pa": 676,
   "gw": 6,
   "gl": 26,
   "diff": -123,
   "gameDiff": -20,
   "power": -0.3,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     4,
     12
    ],
    "male": [
     0,
     8
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
   "l": 3,
   "pf": 1485,
   "pa": 1987,
   "gw": 16,
   "gl": 80,
   "diff": -502,
   "gameDiff": -64,
   "power": -2.1,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     7,
     41
    ],
    "male": [
     3,
     21
    ],
    "female": [
     6,
     18
    ]
   }
  },
  {
   "name": "Allstar Pickler",
   "w": 0,
   "l": 2,
   "pf": 995,
   "pa": 1350,
   "gw": 8,
   "gl": 56,
   "diff": -355,
   "gameDiff": -48,
   "power": -1,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     5,
     27
    ],
    "male": [
     2,
     14
    ],
    "female": [
     1,
     15
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Neil Vijayendran",
   "b": "Jennifer Jones",
   "team": "Dill Dinkers Lansdale",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 9,
   "avgExpected": 4.8,
   "aId": "1feab7e4-0989-45ae-acda-7ad5e78c3079",
   "bId": "aae8138e-15d4-44b2-b48c-60c87c40a116"
  },
  {
   "a": "George Chen",
   "b": "Krystal Johnson",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 7.7,
   "avgExpected": 3.4,
   "aId": "36d781d6-de40-4d55-b17f-97f8c8757bd3",
   "bId": "a4fb87af-daed-4bc9-9027-2a4b215c060c"
  },
  {
   "a": "Andre Goldstein",
   "b": "Joan Glass",
   "team": "Dill Dinkers Lansdale",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 6,
   "avgExpected": 1.9,
   "aId": "155f1b6d-eba7-4faf-a4c0-0fc6184e08ae",
   "bId": "38739b70-06ec-41c1-bcfb-18a3c539951d"
  },
  {
   "a": "Jenn Guerrini",
   "b": "Jim Sintic",
   "team": "One Love",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6.3,
   "avgExpected": 2.9,
   "aId": "0a61962c-a23d-4651-8153-201d107f4477",
   "bId": "b3317f76-7939-45f1-a100-dbd17d9c768e"
  },
  {
   "a": "Nate Brochin",
   "b": "Robert Toledo",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6.3,
   "avgExpected": 3.2,
   "aId": "90204557-bb5d-4892-abfe-d2530aa1ac3a",
   "bId": "a1e0d6a6-b8d4-47b7-bdfc-6cb8670a421d"
  },
  {
   "a": "Sarah Ramadas",
   "b": "Joe Monello",
   "team": "PCKLRAMA",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 4,
   "avgExpected": 0.5,
   "aId": "8137da09-2781-4112-972a-dfd1c8102ba3",
   "bId": "e5eb8990-4b8d-4a10-bff8-29740ce57276"
  },
  {
   "a": "Scott Kindzierski",
   "b": "May Syso",
   "team": "PCKLRAMA",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6.3,
   "avgExpected": 2.9,
   "aId": "b3c8341b-b3d8-442b-93dc-1da6a5c4e868",
   "bId": "e81b7980-75d9-4dab-b9e2-626065c3ee51"
  },
  {
   "a": "Susan Colicchio",
   "b": "Joe Monello",
   "team": "PCKLRAMA",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3,
   "avgExpected": 0.5,
   "aId": "9443df04-e253-4d24-8d52-6c89bba6b4e1",
   "bId": "e5eb8990-4b8d-4a10-bff8-29740ce57276"
  },
  {
   "a": "Peter Shen",
   "b": "Jenn Zhang",
   "team": "Stelton Sports",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 6.7,
   "avgExpected": 3.4,
   "aId": "7417eca2-2140-47f9-bd14-be210ba9d630",
   "bId": "7b374f2a-8e98-445a-8ac1-f373be68f1e5"
  },
  {
   "a": "Hongjie Liu",
   "b": "Jhon Cifuentes",
   "team": "Montville Rocks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 8,
   "avgExpected": 4.8,
   "aId": "32208805-a6c4-402d-bdf6-b44c29c35ba6",
   "bId": "91f844b2-dd13-45a0-b66d-9b7ea751037a"
  },
  {
   "a": "Jody Scarano",
   "b": "Robert Toledo",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 6.3,
   "avgExpected": 3.9,
   "aId": "059a8d88-00ba-4f5b-add3-7a4bb09441f8",
   "bId": "a1e0d6a6-b8d4-47b7-bdfc-6cb8670a421d"
  },
  {
   "a": "Karen Kelly",
   "b": "Randi Yezer",
   "team": "One Love",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 0.3,
   "avgExpected": -1.9,
   "aId": "07767191-9167-4314-973d-3798ae6265a9",
   "bId": "477f09e9-1b92-40e0-ae94-e32a0722f1cd"
  },
  {
   "a": "Zhaohui Li",
   "b": "Cheryl Klein",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 3,
   "avgExpected": 0.8,
   "aId": "318197d4-7171-47d3-b14a-a5c9b4276f77",
   "bId": "d521a98f-88b6-488e-8903-8c35386df363"
  },
  {
   "a": "Andrew Mclean",
   "b": "Marguerite Greener",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1,
   "avgActual": 5,
   "avgExpected": 3,
   "aId": "2d439cdc-347e-4beb-9975-1b31bc46f2df",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "a": "Stu Schwartz",
   "b": "Derek Manwaring",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1,
   "avgActual": -2,
   "avgExpected": -4,
   "aId": "083316b5-595a-4b81-90e7-d72ee570e021",
   "bId": "ec511d19-2f10-425b-828f-708e5365bfcf"
  },
  {
   "a": "Ana Bautista",
   "b": "Cindy Walters",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 10,
   "avgExpected": 8.3,
   "aId": "33692212-f6ed-47f3-bac2-e19da564c0c6",
   "bId": "e1957c7a-4e30-47e1-bf43-fae97adcf183"
  },
  {
   "a": "Marguerite Greener",
   "b": "Dan He",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 5,
   "avgExpected": 2.9,
   "aId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d",
   "bId": "f544c236-d1bb-4bcf-bf15-df57dfb4e7f1"
  },
  {
   "a": "Scott Kindzierski",
   "b": "Alam Mohammad",
   "team": "PCKLRAMA",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 7.3,
   "avgExpected": 5.2,
   "aId": "b3c8341b-b3d8-442b-93dc-1da6a5c4e868",
   "bId": "d621bf00-b03f-478d-a0b6-cab0ba96b28b"
  },
  {
   "a": "Renee Froeberg",
   "b": "Robert Bernstein",
   "team": "Picklr Fair Lawn",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 4.5,
   "avgExpected": 3.1,
   "aId": "3804b024-a017-4fa2-90d3-5d726e764f44",
   "bId": "5c119a69-3fc4-40b6-a8e1-dc3504df440a"
  },
  {
   "a": "Mike Leach",
   "b": "Eric Shipon",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.7,
   "avgExpected": 0.8,
   "aId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b",
   "bId": "b035d8be-372b-4bec-92be-0b0bde7dce82"
  },
  {
   "a": "Peter Shen",
   "b": "Christopher Aiello",
   "team": "Stelton Sports",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4,
   "avgExpected": 2.1,
   "aId": "7417eca2-2140-47f9-bd14-be210ba9d630",
   "bId": "c9ff8d7f-0d8c-4b52-8b15-ae89d132542f"
  },
  {
   "a": "Cesar Fojas",
   "b": "Stella Ott",
   "team": "Montville Dragons",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 0.2,
   "avgExpected": -1.2,
   "aId": "7c31fae2-4ca2-47e5-a531-cdcbdb069c80",
   "bId": "a9c9b8dc-e4b6-49b3-9ec3-de99246526fa"
  },
  {
   "a": "Jenn Guerrini",
   "b": "Heidi Lipton",
   "team": "One Love",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 3.3,
   "avgExpected": 1.7,
   "aId": "0a61962c-a23d-4651-8153-201d107f4477",
   "bId": "7fbaae89-bf6e-441a-b713-9b1db817dc5c"
  },
  {
   "a": "Sara Renzulli",
   "b": "Timothy Hopkins",
   "team": "Picklr Newark",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -4.3,
   "avgExpected": -6.3,
   "aId": "21da9d6f-1118-44a7-984d-0565cb46f43d",
   "bId": "8acca4cc-875c-4594-8f46-3d31b0912227"
  },
  {
   "a": "Qiuwei Feng",
   "b": "Krystal Johnson",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 5,
   "avgExpected": 3.5,
   "aId": "5afdbd12-d79e-45ec-ae26-63ea91a262f2",
   "bId": "a4fb87af-daed-4bc9-9027-2a4b215c060c"
  },
  {
   "a": "George Chen",
   "b": "Michael Johnson",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.7,
   "avgExpected": 2.5,
   "aId": "36d781d6-de40-4d55-b17f-97f8c8757bd3",
   "bId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "a": "Cromwell Palomares",
   "b": "Janine Thompson",
   "team": "Montville Dragons",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -1.5,
   "avgExpected": -3,
   "aId": "bc82cbed-1dfa-43fa-9cc5-1f12b6c4fe76",
   "bId": "e9c2ebf6-88d5-485d-be0f-8c71488231ae"
  },
  {
   "a": "Kristie Capitanelli",
   "b": "Charles Buzad",
   "team": "Dill Dinkers Lansdale",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.3,
   "avgExpected": 3.7,
   "aId": "4f87890f-1940-405a-82a2-bd2d50b5bf21",
   "bId": "5d3b9d31-abbd-49ef-b63b-fa8a30759147"
  },
  {
   "a": "Sara Renzulli",
   "b": "Sandy Hopkins",
   "team": "Picklr Newark",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": -1,
   "avgExpected": -2.6,
   "aId": "21da9d6f-1118-44a7-984d-0565cb46f43d",
   "bId": "e80ce493-2de2-40d5-a94c-ea0d42634f82"
  },
  {
   "a": "Dan Yang",
   "b": "Michael Barry",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.5,
   "avgExpected": 1.1,
   "aId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9",
   "bId": "8aa9db46-30ca-4985-93b5-33ad3d7d1963"
  },
  {
   "a": "Ting Chen",
   "b": "Izabel Illipronti",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -0.3,
   "avgExpected": -1.7,
   "aId": "9642a1bd-ed0a-4d65-9c6e-8f0c04721c75",
   "bId": "e4b1fba4-7df9-45eb-ad2f-d6b352d25cf4"
  },
  {
   "a": "Susan Goeckeler",
   "b": "John Cave",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 5.7,
   "avgExpected": 4.3,
   "aId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "bId": "f93f978f-ba60-44ac-b8dc-9e872af0e5c2"
  },
  {
   "a": "John Laspina",
   "b": "Shawn Maloney",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.3,
   "avgExpected": 0,
   "aId": "9a0e3b23-efa6-4c87-bc93-f8fa1bbde474",
   "bId": "c51970e8-6156-404b-863a-eb694ad67be9"
  },
  {
   "a": "Geordielyn Alviola",
   "b": "Saritha Kondra",
   "team": "Stelton Sports",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 1.7,
   "avgExpected": 0.2,
   "aId": "0a458710-16fc-4aac-93a1-91ce89d6bacf",
   "bId": "b4f3fc0d-6166-4726-9180-2a9a698afcdf"
  },
  {
   "a": "Jhon Cifuentes",
   "b": "Shuming Zhu",
   "team": "Montville Rocks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 7.7,
   "avgExpected": 6.2,
   "aId": "91f844b2-dd13-45a0-b66d-9b7ea751037a",
   "bId": "ce26642b-bd69-4cbc-a478-95e060c2b0a8"
  },
  {
   "a": "Charles Buzad",
   "b": "Robert Alexander",
   "team": "Dill Dinkers Lansdale",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0.8,
   "avgExpected": -0.4,
   "aId": "5d3b9d31-abbd-49ef-b63b-fa8a30759147",
   "bId": "6b844385-0db4-4fa9-a38f-1f79ecef1db0"
  },
  {
   "a": "Peter Shen",
   "b": "Ben Xie",
   "team": "Stelton Sports",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4.3,
   "avgExpected": 3,
   "aId": "7417eca2-2140-47f9-bd14-be210ba9d630",
   "bId": "ed9f303e-a29c-4172-a72d-6a9a31bf7124"
  },
  {
   "a": "Mark Lederman",
   "b": "Cindy Walters",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 6.7,
   "avgExpected": 5.4,
   "aId": "1181bed8-38bd-4496-8be0-323f36d5d7c4",
   "bId": "e1957c7a-4e30-47e1-bf43-fae97adcf183"
  },
  {
   "a": "Stephen Arleth",
   "b": "Doreen Arleth",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.4,
   "avgExpected": 3.6,
   "aId": "5a5c19dd-0788-4c96-975f-18c91f580210",
   "bId": "869705bd-7c6f-4515-a1a4-d214c92fabb4"
  },
  {
   "a": "Eileen Clark",
   "b": "Thomas Licciardello",
   "team": "Premiere",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": -0.7,
   "avgExpected": -1.9,
   "aId": "2abe95e2-0e73-49b6-aca8-689041f98b94",
   "bId": "ac13b60d-b370-45f4-8980-0ecbdd1b81b4"
  },
  {
   "a": "Thomas Licciardello",
   "b": "Joe Carrano",
   "team": "Premiere",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 2.7,
   "avgExpected": 1.4,
   "aId": "ac13b60d-b370-45f4-8980-0ecbdd1b81b4",
   "bId": "f6fcffef-8b65-4735-a0bd-ae87f7ea2e25"
  },
  {
   "a": "Cromwell Palomares",
   "b": "Jemma Bucks",
   "team": "Montville Dragons",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -0.7,
   "avgExpected": -1.8,
   "aId": "bc82cbed-1dfa-43fa-9cc5-1f12b6c4fe76",
   "bId": "f0acebf7-62fd-455a-9fa4-c5ca589fc1b5"
  },
  {
   "a": "Virasack Vorabouth",
   "b": "Yayuan Lien",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -7,
   "avgExpected": -8,
   "aId": "a478ffa6-7bfc-4c67-9b3d-0aad661a58bc",
   "bId": "f4725f25-ce53-4104-8f94-d558d8c39e84"
  },
  {
   "a": "Gladys Garzone",
   "b": "Susan Colicchio",
   "team": "PCKLRAMA",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3,
   "avgExpected": 2.2,
   "aId": "130961d9-c1d1-47b6-9bee-90183531473c",
   "bId": "9443df04-e253-4d24-8d52-6c89bba6b4e1"
  },
  {
   "a": "Nicole Nelson",
   "b": "Derek Manwaring",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -1,
   "aId": "2e2b7732-48a3-4102-86f9-555111fa9ae8",
   "bId": "ec511d19-2f10-425b-828f-708e5365bfcf"
  },
  {
   "a": "Lisa Braumann",
   "b": "Stephen Levitt",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -5,
   "avgExpected": -5.6,
   "aId": "b3d8b1e5-378c-4b5b-bc50-dfa39e6c8311",
   "bId": "d8be7fe2-86ab-439d-b245-fe02733b80d3"
  },
  {
   "a": "Kirsten Hinds",
   "b": "Doreen Arleth",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.8,
   "avgExpected": 3.2,
   "aId": "23bf4ad6-5b88-4d00-93c8-3134ec378f34",
   "bId": "869705bd-7c6f-4515-a1a4-d214c92fabb4"
  },
  {
   "a": "Renee Froeberg",
   "b": "Maria Fanfa",
   "team": "Picklr Fair Lawn",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 2.2,
   "avgExpected": 1.7,
   "aId": "3804b024-a017-4fa2-90d3-5d726e764f44",
   "bId": "98bfa16f-b5e6-4534-a4b9-5b84267284d4"
  },
  {
   "a": "Roni Douber",
   "b": "Maria Fanfa",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.7,
   "aId": "8ec58af7-1a0a-445f-a4b8-6b4cdd68d908",
   "bId": "98bfa16f-b5e6-4534-a4b9-5b84267284d4"
  },
  {
   "a": "Jody Scarano",
   "b": "Janet Bellaran",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.5,
   "avgExpected": 4,
   "aId": "059a8d88-00ba-4f5b-add3-7a4bb09441f8",
   "bId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7"
  },
  {
   "a": "Susan Goeckeler",
   "b": "Stephen Villani",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1.7,
   "avgExpected": 1.3,
   "aId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "bId": "cc8cfbf1-a6d3-40d7-99a9-eb20343774eb"
  },
  {
   "a": "Gladys Garzone",
   "b": "Joe Monello",
   "team": "PCKLRAMA",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 6.8,
   "avgExpected": 6.3,
   "aId": "130961d9-c1d1-47b6-9bee-90183531473c",
   "bId": "e5eb8990-4b8d-4a10-bff8-29740ce57276"
  },
  {
   "a": "Steve Roth",
   "b": "Claudia Calle",
   "team": "PCKLRAMA",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.7,
   "avgExpected": 3.2,
   "aId": "183983b9-993f-471e-ac3d-224dcee6d80f",
   "bId": "cf05f9f7-40a6-4861-b9be-020ee81a9c06"
  },
  {
   "a": "Sarah Flynn",
   "b": "Shawn Maloney",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1.8,
   "avgExpected": 1.4,
   "aId": "29b01229-f7ed-4692-bdb4-32926b8a7cc5",
   "bId": "c51970e8-6156-404b-863a-eb694ad67be9"
  },
  {
   "a": "Stephen Arleth",
   "b": "Luis Perez",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 3.3,
   "avgExpected": 2.9,
   "aId": "5a5c19dd-0788-4c96-975f-18c91f580210",
   "bId": "fe7754f9-404d-4b6d-8499-552ee9f237fa"
  },
  {
   "a": "Geordielyn Alviola",
   "b": "Ben Xie",
   "team": "Stelton Sports",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 2.3,
   "avgExpected": 1.8,
   "aId": "0a458710-16fc-4aac-93a1-91ce89d6bacf",
   "bId": "ed9f303e-a29c-4172-a72d-6a9a31bf7124"
  },
  {
   "a": "Gajendra Mehta",
   "b": "Cathy Proctor",
   "team": "Stelton Sports",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 6,
   "avgExpected": 5.4,
   "aId": "9ecb04f7-d32e-4f28-8585-aad932450f89",
   "bId": "cb02b0c7-7df6-481e-aeb2-5f945a9522bc"
  },
  {
   "a": "Jonathan Basa",
   "b": "Cromwell Palomares",
   "team": "Montville Dragons",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -2.3,
   "avgExpected": -2.9,
   "aId": "916dafeb-720f-471b-9609-7f338b793ed3",
   "bId": "bc82cbed-1dfa-43fa-9cc5-1f12b6c4fe76"
  },
  {
   "a": "Mara Levy",
   "b": "Christine Anderson",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1.3,
   "avgExpected": 0.9,
   "aId": "384831b2-73f2-411a-a6ba-987562301f37",
   "bId": "688aa4c5-9179-42aa-a456-92413a4ab4ad"
  },
  {
   "a": "Mark Lederman",
   "b": "Robert Goldenberg",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 4.3,
   "avgExpected": 4,
   "aId": "1181bed8-38bd-4496-8be0-323f36d5d7c4",
   "bId": "52940bf9-2379-45c0-94db-829704ea0ecc"
  },
  {
   "a": "Krystal Johnson",
   "b": "Mike Leach",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.3,
   "avgExpected": 2.1,
   "aId": "a4fb87af-daed-4bc9-9027-2a4b215c060c",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Eric Shipon",
   "b": "Lisa Yuskevich",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.7,
   "avgExpected": -1,
   "aId": "b035d8be-372b-4bec-92be-0b0bde7dce82",
   "bId": "f03105d3-576a-4955-909a-24c18a087d1e"
  },
  {
   "a": "Robert Toledo",
   "b": "Christine Clark",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.3,
   "aId": "a1e0d6a6-b8d4-47b7-bdfc-6cb8670a421d",
   "bId": "e05ce193-53c0-4251-8a44-734c522f7a75"
  },
  {
   "a": "Geordielyn Alviola",
   "b": "Cathy Proctor",
   "team": "Stelton Sports",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 6,
   "avgExpected": 5.7,
   "aId": "0a458710-16fc-4aac-93a1-91ce89d6bacf",
   "bId": "cb02b0c7-7df6-481e-aeb2-5f945a9522bc"
  },
  {
   "a": "Karen Gallione",
   "b": "Michael-John Van Rhyn",
   "team": "Montville Dragons",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -4.7,
   "avgExpected": -5,
   "aId": "401902c9-4e46-4ed7-9995-643dc73f135a",
   "bId": "9d3946e6-1bab-4f1c-911c-81e21eb6caf1"
  },
  {
   "a": "Janine Thompson",
   "b": "Jemma Bucks",
   "team": "Montville Dragons",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -5.3,
   "avgExpected": -5.5,
   "aId": "e9c2ebf6-88d5-485d-be0f-8c71488231ae",
   "bId": "f0acebf7-62fd-455a-9fa4-c5ca589fc1b5"
  },
  {
   "a": "Karen Kelly",
   "b": "Michael Cisar",
   "team": "One Love",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -2,
   "avgExpected": -2.2,
   "aId": "07767191-9167-4314-973d-3798ae6265a9",
   "bId": "7e8fcb9e-d338-4358-9181-f03e57ba5c7c"
  },
  {
   "a": "Dan Yang",
   "b": "Linda Bozzo",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4.3,
   "avgExpected": 4,
   "aId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9",
   "bId": "94c45058-cae5-4085-ad9e-684309568903"
  },
  {
   "a": "Robert Bernstein",
   "b": "Derek Manwaring",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.7,
   "avgExpected": 0.7,
   "aId": "5c119a69-3fc4-40b6-a8e1-dc3504df440a",
   "bId": "ec511d19-2f10-425b-828f-708e5365bfcf"
  },
  {
   "a": "Rosanna Neis",
   "b": "Christian Aberin",
   "team": "Premiere",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -3.3,
   "avgExpected": -3.3,
   "aId": "b4ef8674-2eff-4b19-80c1-82de7f94d8b7",
   "bId": "d4254f79-f461-4723-9a64-2660985b2702"
  },
  {
   "a": "Janet Bellaran",
   "b": "Nate Brochin",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0,
   "avgActual": 3.8,
   "avgExpected": 3.8,
   "aId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7",
   "bId": "90204557-bb5d-4892-abfe-d2530aa1ac3a"
  },
  {
   "a": "Mara Levy",
   "b": "Linda Bozzo",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.3,
   "avgExpected": 1.4,
   "aId": "384831b2-73f2-411a-a6ba-987562301f37",
   "bId": "94c45058-cae5-4085-ad9e-684309568903"
  },
  {
   "a": "Carolyn Coonan",
   "b": "Lisa Yuskevich",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -2.7,
   "avgExpected": -2.5,
   "aId": "a6669cc7-9c23-4088-8e49-e529dc9b46a8",
   "bId": "f03105d3-576a-4955-909a-24c18a087d1e"
  },
  {
   "a": "Karen Gallione",
   "b": "Stella Ott",
   "team": "Montville Dragons",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -2,
   "avgExpected": -1.8,
   "aId": "401902c9-4e46-4ed7-9995-643dc73f135a",
   "bId": "a9c9b8dc-e4b6-49b3-9ec3-de99246526fa"
  },
  {
   "a": "Michael-John Van Rhyn",
   "b": "Cromwell Palomares",
   "team": "Montville Dragons",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.8,
   "aId": "9d3946e6-1bab-4f1c-911c-81e21eb6caf1",
   "bId": "bc82cbed-1dfa-43fa-9cc5-1f12b6c4fe76"
  },
  {
   "a": "Christian Aberin",
   "b": "Joe Carrano",
   "team": "Premiere",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.3,
   "avgExpected": -1.1,
   "aId": "d4254f79-f461-4723-9a64-2660985b2702",
   "bId": "f6fcffef-8b65-4735-a0bd-ae87f7ea2e25"
  },
  {
   "a": "Thomas Lum",
   "b": "Enid Lum",
   "team": "Picklr Newark",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -4.7,
   "avgExpected": -4.5,
   "aId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7",
   "bId": "fa4eb637-9da5-4418-9135-c41cca7e6ced"
  },
  {
   "a": "Sal Garfi",
   "b": "Elizabeth Biehl",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.8,
   "avgExpected": 5,
   "aId": "38441ed7-017a-47a0-859b-ddb00d17d1cb",
   "bId": "a10029d9-c75f-4a33-98cd-6173faa99ddc"
  },
  {
   "a": "Cyndee Catalano",
   "b": "Elizabeth Biehl",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4,
   "avgExpected": 4.1,
   "aId": "7b807cdf-4322-4979-b810-acae5cc05409",
   "bId": "a10029d9-c75f-4a33-98cd-6173faa99ddc"
  },
  {
   "a": "Bob Sochor",
   "b": "Jason Fingerman",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 8,
   "avgExpected": 8.3,
   "aId": "27be2d93-9ffb-48be-a464-e0ab103426e3",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Alam Mohammad",
   "b": "May Syso",
   "team": "PCKLRAMA",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.5,
   "avgExpected": 2.9,
   "aId": "d621bf00-b03f-478d-a0b6-cab0ba96b28b",
   "bId": "e81b7980-75d9-4dab-b9e2-626065c3ee51"
  },
  {
   "a": "Rosanna Neis",
   "b": "Raffaella Pernice",
   "team": "Premiere",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -4,
   "avgExpected": -3.7,
   "aId": "b4ef8674-2eff-4b19-80c1-82de7f94d8b7",
   "bId": "f886bdf8-6b28-4b31-9587-fe6d2e9aea4a"
  },
  {
   "a": "Vincent Lamarco",
   "b": "Mark Pleasanton",
   "team": "Picklr Newark",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -7,
   "avgExpected": -6.6,
   "aId": "0930c5f6-0231-431b-b9bb-609e61b519c1",
   "bId": "f0d9f371-371e-4625-ad0a-aea8da83fb8e"
  },
  {
   "a": "Kristie Capitanelli",
   "b": "Jennifer Jones",
   "team": "Dill Dinkers Lansdale",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.3,
   "avgExpected": 3.9,
   "aId": "4f87890f-1940-405a-82a2-bd2d50b5bf21",
   "bId": "aae8138e-15d4-44b2-b48c-60c87c40a116"
  },
  {
   "a": "Bob Sochor",
   "b": "Cathy Fiebs",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 4.3,
   "avgExpected": 4.8,
   "aId": "27be2d93-9ffb-48be-a464-e0ab103426e3",
   "bId": "b39f886b-aa7a-40ca-81a1-5963941e541f"
  },
  {
   "a": "George Chen",
   "b": "Qiuwei Feng",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4.3,
   "avgExpected": 5.1,
   "aId": "36d781d6-de40-4d55-b17f-97f8c8757bd3",
   "bId": "5afdbd12-d79e-45ec-ae26-63ea91a262f2"
  },
  {
   "a": "Gladys Garzone",
   "b": "Claudia Calle",
   "team": "PCKLRAMA",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4.8,
   "avgExpected": 5.3,
   "aId": "130961d9-c1d1-47b6-9bee-90183531473c",
   "bId": "cf05f9f7-40a6-4861-b9be-020ee81a9c06"
  },
  {
   "a": "Ting Chen",
   "b": "Stephen Levitt",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -5.7,
   "avgExpected": -4.8,
   "aId": "9642a1bd-ed0a-4d65-9c6e-8f0c04721c75",
   "bId": "d8be7fe2-86ab-439d-b245-fe02733b80d3"
  },
  {
   "a": "Nicole Nelson",
   "b": "Cheryl Klein",
   "team": "Picklr Fair Lawn",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 0,
   "avgExpected": 0.8,
   "aId": "2e2b7732-48a3-4102-86f9-555111fa9ae8",
   "bId": "d521a98f-88b6-488e-8903-8c35386df363"
  },
  {
   "a": "Nancy Culley",
   "b": "Enid Lum",
   "team": "Picklr Newark",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -4.7,
   "avgExpected": -3.7,
   "aId": "f58a1856-de9a-46ee-8a63-0445bee6fd3f",
   "bId": "fa4eb637-9da5-4418-9135-c41cca7e6ced"
  },
  {
   "a": "Nicole Nelson",
   "b": "Garry Wright",
   "team": "Picklr Fair Lawn",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.2,
   "avgExpected": 1,
   "aId": "2e2b7732-48a3-4102-86f9-555111fa9ae8",
   "bId": "6c10bca6-6034-42ca-8adc-1532e7e3c629"
  },
  {
   "a": "Robert Bernstein",
   "b": "Garry Wright",
   "team": "Picklr Fair Lawn",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 1,
   "avgExpected": 1.8,
   "aId": "5c119a69-3fc4-40b6-a8e1-dc3504df440a",
   "bId": "6c10bca6-6034-42ca-8adc-1532e7e3c629"
  },
  {
   "a": "Lance Arlaus",
   "b": "Stella Ott",
   "team": "Montville Dragons",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -2.7,
   "avgExpected": -1.9,
   "aId": "3b4a5b66-69e2-44be-96c8-b48d93e9ae6f",
   "bId": "a9c9b8dc-e4b6-49b3-9ec3-de99246526fa"
  },
  {
   "a": "Mike Lasko",
   "b": "Doreen Arleth",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.7,
   "avgExpected": 0.4,
   "aId": "67a7b684-fd3e-4299-b67b-8ba9e8b1c235",
   "bId": "869705bd-7c6f-4515-a1a4-d214c92fabb4"
  },
  {
   "a": "Maricel Pineda",
   "b": "Derek Manwaring",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3.3,
   "avgExpected": -2.2,
   "aId": "810856e7-f746-4641-a633-d870ff787e8d",
   "bId": "ec511d19-2f10-425b-828f-708e5365bfcf"
  },
  {
   "a": "Barb Mulckhuyse",
   "b": "Howard Cetel",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.7,
   "avgExpected": 0.3,
   "aId": "b4b69268-6029-4071-84b1-45535a570f3a",
   "bId": "bff308e5-13f7-4eec-9c98-9095255f062f"
  },
  {
   "a": "Sara Renzulli",
   "b": "Aaron Smith",
   "team": "Picklr Newark",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -3.7,
   "avgExpected": -2.5,
   "aId": "21da9d6f-1118-44a7-984d-0565cb46f43d",
   "bId": "c52d90c3-f405-4312-8c1d-0a828ce19a18"
  },
  {
   "a": "Christina Pietrak",
   "b": "Julie Chiappa",
   "team": "Dill Dinkers Lansdale",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 0.5,
   "avgExpected": 1.6,
   "aId": "753f0571-691f-4de6-b307-50980e237994",
   "bId": "7c329f6b-3ee5-4a0a-8cd9-b3d439da6e47"
  },
  {
   "a": "Aaron Smith",
   "b": "Thomas Lum",
   "team": "Picklr Newark",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.7,
   "aId": "c52d90c3-f405-4312-8c1d-0a828ce19a18",
   "bId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7"
  },
  {
   "a": "Stephen Arleth",
   "b": "Mike Lasko",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": -1.3,
   "avgExpected": 0.1,
   "aId": "5a5c19dd-0788-4c96-975f-18c91f580210",
   "bId": "67a7b684-fd3e-4299-b67b-8ba9e8b1c235"
  },
  {
   "a": "Michael Johnson",
   "b": "Qiuwei Feng",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 1.7,
   "avgExpected": 2.9,
   "aId": "4f98756a-9726-48fe-a241-2579f96eee16",
   "bId": "5afdbd12-d79e-45ec-ae26-63ea91a262f2"
  },
  {
   "a": "Susan Colicchio",
   "b": "Scott Kindzierski",
   "team": "PCKLRAMA",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -1.3,
   "avgExpected": 0.7,
   "aId": "9443df04-e253-4d24-8d52-6c89bba6b4e1",
   "bId": "b3c8341b-b3d8-442b-93dc-1da6a5c4e868"
  },
  {
   "a": "Mark Lederman",
   "b": "Roberto Marcillo",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -1,
   "avgActual": 4,
   "avgExpected": 6.4,
   "aId": "1181bed8-38bd-4496-8be0-323f36d5d7c4",
   "bId": "4516a66f-67b3-4981-a16d-036deb8db9bc"
  },
  {
   "a": "George Chen",
   "b": "Dan He",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 0,
   "avgExpected": 2.1,
   "aId": "36d781d6-de40-4d55-b17f-97f8c8757bd3",
   "bId": "f544c236-d1bb-4bcf-bf15-df57dfb4e7f1"
  },
  {
   "a": "Jonathan Basa",
   "b": "Jemma Bucks",
   "team": "Montville Dragons",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -8,
   "avgExpected": -5.6,
   "aId": "916dafeb-720f-471b-9609-7f338b793ed3",
   "bId": "f0acebf7-62fd-455a-9fa4-c5ca589fc1b5"
  },
  {
   "a": "Gwen Leach",
   "b": "Joy Perry",
   "team": "Picklr Newark",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1,
   "avgActual": -8.8,
   "avgExpected": -7.2,
   "aId": "1ca5f8b5-dd7b-4761-94ed-6eb61c36eb78",
   "bId": "a9f2a010-b832-4aed-b68e-28fecd6a297d"
  },
  {
   "a": "Cyndee Catalano",
   "b": "Tammy Dragon",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": 2,
   "avgExpected": 4.3,
   "aId": "7b807cdf-4322-4979-b810-acae5cc05409",
   "bId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f"
  },
  {
   "a": "Katy Taylor",
   "b": "Ericka Lyn Mayer",
   "team": "One Love",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -5,
   "avgExpected": -2.5,
   "aId": "2827e15f-71d2-4ced-9841-c5f224f98339",
   "bId": "442d80c7-8eaf-413b-b99b-7cdaddb08b7c"
  },
  {
   "a": "Charles Buzad",
   "b": "Rachel Shirley",
   "team": "Dill Dinkers Lansdale",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.1,
   "avgActual": -3.7,
   "avgExpected": -1.1,
   "aId": "5d3b9d31-abbd-49ef-b63b-fa8a30759147",
   "bId": "ff713931-208e-4b8f-9b1d-c7919e6af892"
  },
  {
   "a": "Randi Yezer",
   "b": "Michael Cisar",
   "team": "One Love",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -3.3,
   "avgExpected": -0.4,
   "aId": "477f09e9-1b92-40e0-ae94-e32a0722f1cd",
   "bId": "7e8fcb9e-d338-4358-9181-f03e57ba5c7c"
  },
  {
   "a": "Alam Mohammad",
   "b": "Joe Monello",
   "team": "PCKLRAMA",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.4,
   "avgActual": 0.6,
   "avgExpected": 3.1,
   "aId": "d621bf00-b03f-478d-a0b6-cab0ba96b28b",
   "bId": "e5eb8990-4b8d-4a10-bff8-29740ce57276"
  },
  {
   "a": "Julie Chiappa",
   "b": "Jennifer Jones",
   "team": "Dill Dinkers Lansdale",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -2.7,
   "avgExpected": 1.1,
   "aId": "7c329f6b-3ee5-4a0a-8cd9-b3d439da6e47",
   "bId": "aae8138e-15d4-44b2-b48c-60c87c40a116"
  },
  {
   "a": "Louis Sapirman",
   "b": "Christine Anderson",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -10.7,
   "avgExpected": -6.6,
   "aId": "2a05bac5-f8e0-4e68-928e-bb0ac69f1921",
   "bId": "688aa4c5-9179-42aa-a456-92413a4ab4ad"
  },
  {
   "a": "Gwen Leach",
   "b": "Mark Pleasanton",
   "team": "Picklr Newark",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -9.7,
   "avgExpected": -5.5,
   "aId": "1ca5f8b5-dd7b-4761-94ed-6eb61c36eb78",
   "bId": "f0d9f371-371e-4625-ad0a-aea8da83fb8e"
  },
  {
   "a": "Mara Levy",
   "b": "Michael Barry",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -4,
   "avgExpected": 0.5,
   "aId": "384831b2-73f2-411a-a6ba-987562301f37",
   "bId": "8aa9db46-30ca-4985-93b5-33ad3d7d1963"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Pickleball Kingdom Watchung",
   "away": "Pickleball Palace",
   "time": "2026-08-23T12:00:00",
   "complete": true,
   "homePoints": 521,
   "awayPoints": 663,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shobana Ravishankar",
      "Stephen Stasiulewicz"
     ],
     "a": [
      "Lydia Fiore",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nan Feng",
      "Herald Barber"
     ],
     "a": [
      "Cindy Walters",
      "Ashish Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Margaret Bayse",
      "Stephen Levitt"
     ],
     "a": [
      "Ana Bautista",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ting Chen",
      "Pedro Oliveira"
     ],
     "a": [
      "Kate Clow",
      "Robert Mroz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Margaret Bayse",
      "Shobana Ravishankar"
     ],
     "a": [
      "Ana Bautista",
      "Lydia Fiore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lisa Braumann",
      "Izabel Illipronti"
     ],
     "a": [
      "Kate Clow",
      "Barbara Thall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Gary Grzankowski",
      "Herald Barber"
     ],
     "a": [
      "Roberto Marcillo",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Todd Baron",
      "Stephen Stasiulewicz"
     ],
     "a": [
      "Robert Mroz",
      "Mark Lederman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lisa Braumann",
      "Todd Baron"
     ],
     "a": [
      "Barbara Thall",
      "Robert Mroz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ting Chen",
      "Gary Grzankowski"
     ],
     "a": [
      "Ana Bautista",
      "Mark Lederman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Izabel Illipronti",
      "Stephen Levitt"
     ],
     "a": [
      "Cindy Walters",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Nan Feng",
      "Pedro Oliveira"
     ],
     "a": [
      "Lydia Fiore",
      "Ashish Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ting Chen",
      "Shobana Ravishankar"
     ],
     "a": [
      "Cindy Walters",
      "Kate Clow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Margaret Bayse",
      "Nan Feng"
     ],
     "a": [
      "Lydia Fiore",
      "Barbara Thall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Pedro Oliveira",
      "Stephen Stasiulewicz"
     ],
     "a": [
      "Mark Lederman",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Herald Barber",
      "Todd Baron"
     ],
     "a": [
      "Ashish Malhotra",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ting Chen",
      "Stephen Stasiulewicz"
     ],
     "a": [
      "Ana Bautista",
      "Ashish Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lisa Braumann",
      "Stephen Levitt"
     ],
     "a": [
      "Kate Clow",
      "Robert Mroz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Izabel Illipronti",
      "Gary Grzankowski"
     ],
     "a": [
      "Cindy Walters",
      "Mark Lederman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shobana Ravishankar",
      "Pedro Oliveira"
     ],
     "a": [
      "Lydia Fiore",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lisa Braumann",
      "Nan Feng"
     ],
     "a": [
      "Ana Bautista",
      "Cindy Walters"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ting Chen",
      "Izabel Illipronti"
     ],
     "a": [
      "Kate Clow",
      "Barbara Thall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Herald Barber",
      "Stephen Levitt"
     ],
     "a": [
      "Robert Mroz",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gary Grzankowski",
      "Todd Baron"
     ],
     "a": [
      "Mark Lederman",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nan Feng",
      "Stephen Stasiulewicz"
     ],
     "a": [
      "Barbara Thall",
      "Ashish Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ting Chen",
      "Stephen Levitt"
     ],
     "a": [
      "Ana Bautista",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shobana Ravishankar",
      "Herald Barber"
     ],
     "a": [
      "Cindy Walters",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Margaret Bayse",
      "Pedro Oliveira"
     ],
     "a": [
      "Lydia Fiore",
      "Mark Lederman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Margaret Bayse",
      "Izabel Illipronti"
     ],
     "a": [
      "Kate Clow",
      "Lydia Fiore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lisa Braumann",
      "Shobana Ravishankar"
     ],
     "a": [
      "Cindy Walters",
      "Ana Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Todd Baron",
      "Pedro Oliveira"
     ],
     "a": [
      "Ashish Malhotra",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stephen Stasiulewicz",
      "Gary Grzankowski"
     ],
     "a": [
      "Robert Goldenberg",
      "Mark Lederman"
     ]
    }
   ],
   "subs": [
    "Todd Baron"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Picklr Newtown",
   "away": "Flemington",
   "time": "2026-08-23T12:00:00",
   "complete": true,
   "homePoints": 631,
   "awayPoints": 593,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marguerite Greener",
      "Andrew Mclean"
     ],
     "a": [
      "Jo Marie Holzhammer",
      "Alex Lawrason"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Krystal Johnson",
      "Mike Leach"
     ],
     "a": [
      "Cyndee Catalano",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dan He",
      "George Chen"
     ],
     "a": [
      "Elizabeth Biehl",
      "Stephen Villani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Qiuwei Feng",
      "Michael Johnson"
     ],
     "a": [
      "Kathleen Grennan",
      "John Cave"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Marguerite Greener",
      "Dan He"
     ],
     "a": [
      "Susan Goeckeler",
      "Cyndee Catalano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lisa Yuskevich",
      "Carolyn Coonan"
     ],
     "a": [
      "Elizabeth Biehl",
      "Kathleen Grennan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mike Leach",
      "Eric Shipon"
     ],
     "a": [
      "Stephen Villani",
      "John Cave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "George Chen",
      "Leonard Procaccino"
     ],
     "a": [
      "Tom Matko",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Krystal Johnson",
      "Andrew Mclean"
     ],
     "a": [
      "Susan Goeckeler",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Qiuwei Feng",
      "Michael Johnson"
     ],
     "a": [
      "Jo Marie Holzhammer",
      "Alex Lawrason"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Carolyn Coonan",
      "Leonard Procaccino"
     ],
     "a": [
      "Elizabeth Biehl",
      "John Cave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lisa Yuskevich",
      "Eric Shipon"
     ],
     "a": [
      "Kathleen Grennan",
      "Toby Athron"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marguerite Greener",
      "Dan He"
     ],
     "a": [
      "Susan Goeckeler",
      "Kathleen Grennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Qiuwei Feng",
      "Krystal Johnson"
     ],
     "a": [
      "Jo Marie Holzhammer",
      "Cyndee Catalano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "George Chen",
      "Michael Johnson"
     ],
     "a": [
      "Alex Lawrason",
      "Tom Matko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrew Mclean",
      "Mike Leach"
     ],
     "a": [
      "Stephen Villani",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Krystal Johnson",
      "George Chen"
     ],
     "a": [
      "Susan Goeckeler",
      "Stephen Villani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Lisa Yuskevich",
      "Eric Shipon"
     ],
     "a": [
      "Jo Marie Holzhammer",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Carolyn Coonan",
      "Leonard Procaccino"
     ],
     "a": [
      "Cyndee Catalano",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marguerite Greener",
      "Andrew Mclean"
     ],
     "a": [
      "Elizabeth Biehl",
      "Alex Lawrason"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Marguerite Greener",
      "Krystal Johnson"
     ],
     "a": [
      "Susan Goeckeler",
      "Jo Marie Holzhammer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dan He",
      "Lisa Yuskevich"
     ],
     "a": [
      "Cyndee Catalano",
      "Kathleen Grennan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michael Johnson",
      "Andrew Mclean"
     ],
     "a": [
      "Alex Lawrason",
      "John Cave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mike Leach",
      "Eric Shipon"
     ],
     "a": [
      "Stephen Villani",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carolyn Coonan",
      "Mike Leach"
     ],
     "a": [
      "Susan Goeckeler",
      "John Cave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dan He",
      "Andrew Mclean"
     ],
     "a": [
      "Jo Marie Holzhammer",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Qiuwei Feng",
      "George Chen"
     ],
     "a": [
      "Elizabeth Biehl",
      "Alex Lawrason"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Marguerite Greener",
      "Michael Johnson"
     ],
     "a": [
      "Kathleen Grennan",
      "Stephen Villani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Qiuwei Feng",
      "Krystal Johnson"
     ],
     "a": [
      "Susan Goeckeler",
      "Elizabeth Biehl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carolyn Coonan",
      "Lisa Yuskevich"
     ],
     "a": [
      "Jo Marie Holzhammer",
      "Cyndee Catalano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "George Chen",
      "Michael Johnson"
     ],
     "a": [
      "Alex Lawrason",
      "Stephen Villani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Leonard Procaccino",
      "Eric Shipon"
     ],
     "a": [
      "John Cave",
      "Toby Athron"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "PickleRage Union County",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-08-23T13:00:00",
   "complete": true,
   "homePoints": 32,
   "awayPoints": 0,
   "homeGW": 0,
   "awayGW": 0,
   "games": [],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "PCKLRAMA",
   "away": "Allstar Pickler",
   "time": "2026-08-23T14:00:00",
   "complete": true,
   "homePoints": 677,
   "awayPoints": 525,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Gladys Garzone",
      "Joe Monello"
     ],
     "a": [
      "Savita Nandal",
      "Xilin Zhao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Claudia Calle",
      "Steve Roth"
     ],
     "a": [
      "Rita Hung",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kristen Silvestri",
      "Scott Kindzierski"
     ],
     "a": [
      "Ying Lin",
      "Buyi Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "May Syso",
      "Alam Mohammad"
     ],
     "a": [
      "Yayuan Lien",
      "Virasack Vorabouth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristen Silvestri",
      "May Syso"
     ],
     "a": [
      "Savita Nandal",
      "Rita Hung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Gladys Garzone",
      "Susan Colicchio"
     ],
     "a": [
      "Yayuan Lien",
      "Jinghua Shi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Scott Kindzierski",
      "Alam Mohammad"
     ],
     "a": [
      "Brandon Fulford",
      "Virasack Vorabouth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Elias Eid",
      "Steve Roth"
     ],
     "a": [
      "Xilin Zhao",
      "Peter Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Colicchio",
      "Scott Kindzierski"
     ],
     "a": [
      "Savita Nandal",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Claudia Calle",
      "Steve Roth"
     ],
     "a": [
      "Rita Hung",
      "Xilin Zhao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "May Syso",
      "Elias Eid"
     ],
     "a": [
      "Yayuan Lien",
      "Buyi Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Gladys Garzone",
      "Joe Monello"
     ],
     "a": [
      "Jinghua Shi",
      "Virasack Vorabouth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Susan Colicchio"
     ],
     "a": [
      "Savita Nandal",
      "Ying Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Gladys Garzone",
      "Claudia Calle"
     ],
     "a": [
      "Yayuan Lien",
      "Jinghua Shi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Elias Eid",
      "Steve Roth"
     ],
     "a": [
      "Brandon Fulford",
      "Ronald Wong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alam Mohammad",
      "Joe Monello"
     ],
     "a": [
      "Xilin Zhao",
      "Virasack Vorabouth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Steve Roth"
     ],
     "a": [
      "Yayuan Lien",
      "Peter Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Susan Colicchio",
      "Joe Monello"
     ],
     "a": [
      "Rita Hung",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "May Syso",
      "Alam Mohammad"
     ],
     "a": [
      "Savita Nandal",
      "Ronald Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gladys Garzone",
      "Scott Kindzierski"
     ],
     "a": [
      "Ying Lin",
      "Xilin Zhao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Susan Colicchio",
      "May Syso"
     ],
     "a": [
      "Ying Lin",
      "Yayuan Lien"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Claudia Calle",
      "Gladys Garzone"
     ],
     "a": [
      "Jinghua Shi",
      "Savita Nandal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Elias Eid",
      "Scott Kindzierski"
     ],
     "a": [
      "Xilin Zhao",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alam Mohammad",
      "Joe Monello"
     ],
     "a": [
      "Brandon Fulford",
      "Peter Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Colicchio",
      "Joe Monello"
     ],
     "a": [
      "Yayuan Lien",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Claudia Calle",
      "Scott Kindzierski"
     ],
     "a": [
      "Savita Nandal",
      "Xilin Zhao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristen Silvestri",
      "Steve Roth"
     ],
     "a": [
      "Ying Lin",
      "Peter Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "May Syso",
      "Elias Eid"
     ],
     "a": [
      "Rita Hung",
      "Ronald Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kristen Silvestri",
      "Gladys Garzone"
     ],
     "a": [
      "Savita Nandal",
      "Rita Hung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Colicchio",
      "Claudia Calle"
     ],
     "a": [
      "Yayuan Lien",
      "Ying Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Elias Eid",
      "Scott Kindzierski"
     ],
     "a": [
      "Xilin Zhao",
      "Peter Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alam Mohammad",
      "Steve Roth"
     ],
     "a": [
      "Brandon Fulford",
      "Buyi Zhang"
     ]
    }
   ],
   "subs": [
    "Elias Eid",
    "Ying Lin",
    "Ronald Wong",
    "Xilin Zhao",
    "Yayuan Lien"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Monroe",
   "time": "2026-08-23T14:00:00",
   "complete": true,
   "homePoints": 651,
   "awayPoints": 567,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cindy Darcy",
      "Robert Toledo"
     ],
     "a": [
      "Jocelyn Carney",
      "Fabricio Pazmino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Clark",
      "John Laspina"
     ],
     "a": [
      "Jen Carara",
      "Mauricio Ramirez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Flynn",
      "Luis Perez"
     ],
     "a": [
      "Gioia Pisano",
      "Tyson Hoeflinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Doreen Arleth",
      "Stephen Arleth"
     ],
     "a": [
      "Nancy Atkinson",
      "Michael Neyrus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Christine Clark",
      "Cindy Darcy"
     ],
     "a": [
      "Jocelyn Carney",
      "Jen Carara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Doreen Arleth",
      "Kirsten Hinds"
     ],
     "a": [
      "Terri Pflueger",
      "Sue Caputo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robert Toledo",
      "Luis Perez"
     ],
     "a": [
      "Nirav Solanki",
      "Jeffrey Kowalski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shawn Maloney",
      "John Laspina"
     ],
     "a": [
      "Fabricio Pazmino",
      "Mauricio Ramirez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sarah Flynn",
      "Shawn Maloney"
     ],
     "a": [
      "Nancy Atkinson",
      "Tyson Hoeflinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Clark",
      "Robert Toledo"
     ],
     "a": [
      "Terri Pflueger",
      "Fabricio Pazmino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Cindy Darcy",
      "Stephen Arleth"
     ],
     "a": [
      "Sue Caputo",
      "Michael Neyrus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kirsten Hinds",
      "Luis Perez"
     ],
     "a": [
      "Gioia Pisano",
      "Mauricio Ramirez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Doreen Arleth",
      "Kirsten Hinds"
     ],
     "a": [
      "Jocelyn Carney",
      "Sue Caputo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cindy Darcy",
      "Sarah Flynn"
     ],
     "a": [
      "Jen Carara",
      "Gioia Pisano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "John Laspina",
      "Luis Perez"
     ],
     "a": [
      "Jeffrey Kowalski",
      "Tyson Hoeflinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shawn Maloney",
      "Robert Toledo"
     ],
     "a": [
      "Nirav Solanki",
      "Mauricio Ramirez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Doreen Arleth",
      "Robert Toledo"
     ],
     "a": [
      "Nancy Atkinson",
      "Nirav Solanki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Flynn",
      "John Laspina"
     ],
     "a": [
      "Jen Carara",
      "Jeffrey Kowalski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Clark",
      "Shawn Maloney"
     ],
     "a": [
      "Terri Pflueger",
      "Michael Neyrus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kirsten Hinds",
      "Stephen Arleth"
     ],
     "a": [
      "Sue Caputo",
      "Fabricio Pazmino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sarah Flynn",
      "Cindy Darcy"
     ],
     "a": [
      "Jocelyn Carney",
      "Jen Carara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christine Clark",
      "Kirsten Hinds"
     ],
     "a": [
      "Gioia Pisano",
      "Terri Pflueger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shawn Maloney",
      "John Laspina"
     ],
     "a": [
      "Nirav Solanki",
      "Tyson Hoeflinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Luis Perez",
      "Stephen Arleth"
     ],
     "a": [
      "Michael Neyrus",
      "Mauricio Ramirez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cindy Darcy",
      "Robert Toledo"
     ],
     "a": [
      "Jocelyn Carney",
      "Nirav Solanki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Clark",
      "Luis Perez"
     ],
     "a": [
      "Terri Pflueger",
      "Fabricio Pazmino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Doreen Arleth",
      "Stephen Arleth"
     ],
     "a": [
      "Sue Caputo",
      "Michael Neyrus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Flynn",
      "Shawn Maloney"
     ],
     "a": [
      "Nancy Atkinson",
      "Jeffrey Kowalski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Clark",
      "Doreen Arleth"
     ],
     "a": [
      "Jocelyn Carney",
      "Nancy Atkinson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Cindy Darcy",
      "Kirsten Hinds"
     ],
     "a": [
      "Jen Carara",
      "Gioia Pisano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "John Laspina",
      "Robert Toledo"
     ],
     "a": [
      "Jeffrey Kowalski",
      "Tyson Hoeflinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Luis Perez",
      "Stephen Arleth"
     ],
     "a": [
      "Nirav Solanki",
      "Mauricio Ramirez"
     ]
    }
   ],
   "subs": [
    "Gioia Pisano"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Picklr Fair Lawn",
   "away": "Stelton Sports",
   "time": "2026-08-23T14:00:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 614,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Maria Fanfa",
      "Stu Schwartz"
     ],
     "a": [
      "Jenn Zhang",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Renee Froeberg",
      "Robert Bernstein"
     ],
     "a": [
      "Geordielyn Alviola",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicole Nelson",
      "Garry Wright"
     ],
     "a": [
      "Yolanda Li",
      "Christopher Aiello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Allison Klein",
      "Derek Manwaring"
     ],
     "a": [
      "Cathy Proctor",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Maria Fanfa",
      "Renee Froeberg"
     ],
     "a": [
      "Geordielyn Alviola",
      "Jessie Yan Han"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Cheryl Klein",
      "Nicole Nelson"
     ],
     "a": [
      "Cathy Proctor",
      "Saritha Kondra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robert Bernstein",
      "Garry Wright"
     ],
     "a": [
      "Jun Li",
      "Peter Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joe Chin",
      "Roni Douber"
     ],
     "a": [
      "Christopher Aiello",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cheryl Klein",
      "Joe Chin"
     ],
     "a": [
      "Jenn Zhang",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Nicole Nelson",
      "Stu Schwartz"
     ],
     "a": [
      "Jessie Yan Han",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Allison Klein",
      "Derek Manwaring"
     ],
     "a": [
      "Saritha Kondra",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Maria Fanfa",
      "Roni Douber"
     ],
     "a": [
      "Yolanda Li",
      "Jun Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Allison Klein",
      "Nicole Nelson"
     ],
     "a": [
      "Cathy Proctor",
      "Geordielyn Alviola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cheryl Klein",
      "Renee Froeberg"
     ],
     "a": [
      "Jenn Zhang",
      "Yolanda Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Derek Manwaring",
      "Stu Schwartz"
     ],
     "a": [
      "Christopher Aiello",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joe Chin",
      "Roni Douber"
     ],
     "a": [
      "Jun Li",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Renee Froeberg",
      "Garry Wright"
     ],
     "a": [
      "Jessie Yan Han",
      "Jun Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cheryl Klein",
      "Robert Bernstein"
     ],
     "a": [
      "Cathy Proctor",
      "Christopher Aiello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Maria Fanfa",
      "Joe Chin"
     ],
     "a": [
      "Saritha Kondra",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nicole Nelson",
      "Derek Manwaring"
     ],
     "a": [
      "Geordielyn Alviola",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Allison Klein",
      "Cheryl Klein"
     ],
     "a": [
      "Cathy Proctor",
      "Jessie Yan Han"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maria Fanfa",
      "Renee Froeberg"
     ],
     "a": [
      "Jenn Zhang",
      "Geordielyn Alviola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robert Bernstein",
      "Garry Wright"
     ],
     "a": [
      "Gajendra Mehta",
      "Peter Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Derek Manwaring",
      "Stu Schwartz"
     ],
     "a": [
      "Jun Li",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicole Nelson",
      "Garry Wright"
     ],
     "a": [
      "Jenn Zhang",
      "Jun Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Maria Fanfa",
      "Joe Chin"
     ],
     "a": [
      "Jessie Yan Han",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Allison Klein",
      "Roni Douber"
     ],
     "a": [
      "Yolanda Li",
      "Christopher Aiello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Renee Froeberg",
      "Robert Bernstein"
     ],
     "a": [
      "Saritha Kondra",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Allison Klein",
      "Cheryl Klein"
     ],
     "a": [
      "Cathy Proctor",
      "Yolanda Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nicole Nelson",
      "Renee Froeberg"
     ],
     "a": [
      "Saritha Kondra",
      "Geordielyn Alviola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Roni Douber",
      "Stu Schwartz"
     ],
     "a": [
      "Christopher Aiello",
      "Peter Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robert Bernstein",
      "Derek Manwaring"
     ],
     "a": [
      "Gajendra Mehta",
      "Ben Xie"
     ]
    }
   ],
   "subs": [
    "Allison Klein"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Montville Dragons",
   "away": "Montville Rocks",
   "time": "2026-08-23T14:00:00",
   "complete": true,
   "homePoints": 459,
   "awayPoints": 684,
   "homeGW": 2,
   "awayGW": 30,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Janine Thompson",
      "Cromwell Palomares"
     ],
     "a": [
      "Xiaohong Fang",
      "Hongjie Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Denise Rempson",
      "Jonathan Basa"
     ],
     "a": [
      "Shuming Zhu",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Karen Gallione",
      "Michael-John Van Rhyn"
     ],
     "a": [
      "Joanne Rim",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stella Ott",
      "Lance Arlaus"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Wallace Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Karen Gallione",
      "Stella Ott"
     ],
     "a": [
      "Xiaohong Fang",
      "Vilayvanh Sysounthone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jemma Bucks",
      "Janine Thompson"
     ],
     "a": [
      "Joanne Rim",
      "Bing Leng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Stephen Cordaro",
      "Michael-John Van Rhyn"
     ],
     "a": [
      "Jack Tran",
      "Wallace Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jonathan Basa",
      "Cromwell Palomares"
     ],
     "a": [
      "Jhon Cifuentes",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jemma Bucks",
      "Jonathan Basa"
     ],
     "a": [
      "Joanne Rim",
      "Wallace Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Denise Rempson",
      "Stephen Cordaro"
     ],
     "a": [
      "Shuming Zhu",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Karen Gallione",
      "Lance Arlaus"
     ],
     "a": [
      "Xiaohong Fang",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stella Ott",
      "Cesar Fojas"
     ],
     "a": [
      "Bing Leng",
      "Hongjie Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Denise Rempson",
      "Janine Thompson"
     ],
     "a": [
      "Joanne Rim",
      "Vilayvanh Sysounthone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jemma Bucks",
      "Karen Gallione"
     ],
     "a": [
      "Shuming Zhu",
      "Bing Leng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Cesar Fojas",
      "Cromwell Palomares"
     ],
     "a": [
      "Wallace Lee",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael-John Van Rhyn",
      "Stephen Cordaro"
     ],
     "a": [
      "Hongjie Liu",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Janine Thompson",
      "Jonathan Basa"
     ],
     "a": [
      "Shuming Zhu",
      "Hongjie Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Denise Rempson",
      "Stephen Cordaro"
     ],
     "a": [
      "Xiaohong Fang",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stella Ott",
      "Cesar Fojas"
     ],
     "a": [
      "Bing Leng",
      "Wallace Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jemma Bucks",
      "Lance Arlaus"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Yan Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Karen Gallione",
      "Janine Thompson"
     ],
     "a": [
      "Shuming Zhu",
      "Vilayvanh Sysounthone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Denise Rempson",
      "Jemma Bucks"
     ],
     "a": [
      "Xiaohong Fang",
      "Bing Leng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cesar Fojas",
      "Jonathan Basa"
     ],
     "a": [
      "Jhon Cifuentes",
      "Hongjie Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Stephen Cordaro",
      "Cromwell Palomares"
     ],
     "a": [
      "Yan Wang",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janine Thompson",
      "Cromwell Palomares"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Denise Rempson",
      "Jonathan Basa"
     ],
     "a": [
      "Joanne Rim",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Karen Gallione",
      "Michael-John Van Rhyn"
     ],
     "a": [
      "Xiaohong Fang",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stella Ott",
      "Lance Arlaus"
     ],
     "a": [
      "Shuming Zhu",
      "Wallace Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jemma Bucks",
      "Janine Thompson"
     ],
     "a": [
      "Joanne Rim",
      "Shuming Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Denise Rempson",
      "Stella Ott"
     ],
     "a": [
      "Xiaohong Fang",
      "Bing Leng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael-John Van Rhyn",
      "Cromwell Palomares"
     ],
     "a": [
      "Hongjie Liu",
      "Wallace Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lance Arlaus",
      "Cesar Fojas"
     ],
     "a": [
      "Jhon Cifuentes",
      "Jack Tran"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "One Love",
   "away": "Premiere",
   "time": "2026-08-23T14:00:00",
   "complete": true,
   "homePoints": 625,
   "awayPoints": 629,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Randi Yezer",
      "Michael Cisar"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ericka Lyn Mayer",
      "John Dedeaux"
     ],
     "a": [
      "Rosanna Neis",
      "Joe Carrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Heidi Lipton",
      "Kenneth Pickett"
     ],
     "a": [
      "Stephanie Sozomenu",
      "Carlos Colon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karen Kelly",
      "Hal Greenspan"
     ],
     "a": [
      "Raffaella Pernice",
      "Christian Aberin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Katy Taylor",
      "Ericka Lyn Mayer"
     ],
     "a": [
      "Tara Lombardo",
      "Eileen Clark"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jenn Guerrini",
      "Heidi Lipton"
     ],
     "a": [
      "Rosanna Neis",
      "Raffaella Pernice"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jim Sintic",
      "Hal Greenspan"
     ],
     "a": [
      "Erik Lombardo",
      "Thomas Licciardello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kenneth Pickett",
      "Richie Nicholasi"
     ],
     "a": [
      "Carlos Colon",
      "Idris Nejumi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Katy Taylor",
      "John Dedeaux"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Karen Kelly",
      "Michael Cisar"
     ],
     "a": [
      "Rosanna Neis",
      "Christian Aberin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jenn Guerrini",
      "Jim Sintic"
     ],
     "a": [
      "Eileen Clark",
      "Idris Nejumi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Randi Yezer",
      "Hal Greenspan"
     ],
     "a": [
      "Raffaella Pernice",
      "Joe Carrano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ericka Lyn Mayer",
      "Katy Taylor"
     ],
     "a": [
      "Eileen Clark",
      "Stephanie Sozomenu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jenn Guerrini",
      "Heidi Lipton"
     ],
     "a": [
      "Tara Lombardo",
      "Raffaella Pernice"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "John Dedeaux",
      "Hal Greenspan"
     ],
     "a": [
      "Carlos Colon",
      "Idris Nejumi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Richie Nicholasi",
      "Michael Cisar"
     ],
     "a": [
      "Joe Carrano",
      "Christian Aberin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Randi Yezer",
      "Michael Cisar"
     ],
     "a": [
      "Tara Lombardo",
      "Christian Aberin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Kelly",
      "John Dedeaux"
     ],
     "a": [
      "Rosanna Neis",
      "Carlos Colon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ericka Lyn Mayer",
      "Kenneth Pickett"
     ],
     "a": [
      "Eileen Clark",
      "Thomas Licciardello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jenn Guerrini",
      "Jim Sintic"
     ],
     "a": [
      "Stephanie Sozomenu",
      "Idris Nejumi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Karen Kelly",
      "Randi Yezer"
     ],
     "a": [
      "Tara Lombardo",
      "Rosanna Neis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ericka Lyn Mayer",
      "Jenn Guerrini"
     ],
     "a": [
      "Eileen Clark",
      "Stephanie Sozomenu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jim Sintic",
      "Kenneth Pickett"
     ],
     "a": [
      "Joe Carrano",
      "Thomas Licciardello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richie Nicholasi",
      "John Dedeaux"
     ],
     "a": [
      "Erik Lombardo",
      "Carlos Colon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Randi Yezer",
      "Hal Greenspan"
     ],
     "a": [
      "Stephanie Sozomenu",
      "Christian Aberin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Karen Kelly",
      "Michael Cisar"
     ],
     "a": [
      "Rosanna Neis",
      "Thomas Licciardello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katy Taylor",
      "Richie Nicholasi"
     ],
     "a": [
      "Eileen Clark",
      "Joe Carrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Heidi Lipton",
      "Kenneth Pickett"
     ],
     "a": [
      "Raffaella Pernice",
      "Idris Nejumi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Randi Yezer",
      "Karen Kelly"
     ],
     "a": [
      "Raffaella Pernice",
      "Rosanna Neis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Katy Taylor",
      "Heidi Lipton"
     ],
     "a": [
      "Tara Lombardo",
      "Stephanie Sozomenu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Hal Greenspan",
      "Michael Cisar"
     ],
     "a": [
      "Joe Carrano",
      "Thomas Licciardello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richie Nicholasi",
      "Jim Sintic"
     ],
     "a": [
      "Christian Aberin",
      "Carlos Colon"
     ]
    }
   ],
   "subs": [
    "Jenn Guerrini",
    "Erik Lombardo",
    "Tara Lombardo"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Dill Dinkers Lansdale",
   "away": "Picklr Newark",
   "time": "2026-08-23T14:00:00",
   "complete": true,
   "homePoints": 655,
   "awayPoints": 515,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rachel Shirley",
      "Robert Alexander"
     ],
     "a": [
      "Sara Renzulli",
      "Aaron Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christina Pietrak",
      "Andrew Pohlmann"
     ],
     "a": [
      "Enid Lum",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jennifer Jones",
      "Marvin Gordon"
     ],
     "a": [
      "Gwen Leach",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kristie Capitanelli",
      "Charles Buzad"
     ],
     "a": [
      "Joy Perry",
      "Mark Pleasanton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christina Pietrak",
      "Julie Chiappa"
     ],
     "a": [
      "Gwen Leach",
      "Joy Perry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jennifer Jones",
      "Rayleen Romeo"
     ],
     "a": [
      "Nancy Culley",
      "Gail Humphreys-Mackenzie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrew Pohlmann",
      "Samuel Sickles"
     ],
     "a": [
      "Mark Pleasanton",
      "Aaron Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Charles Buzad",
      "Robert Alexander"
     ],
     "a": [
      "Julian Stamper",
      "Willie Simmons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kristie Capitanelli",
      "John Romeo"
     ],
     "a": [
      "Nancy Culley",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Rachel Shirley",
      "Charles Buzad"
     ],
     "a": [
      "Sara Renzulli",
      "Willie Simmons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Jones",
      "Marvin Gordon"
     ],
     "a": [
      "Enid Lum",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rayleen Romeo",
      "Andrew Pohlmann"
     ],
     "a": [
      "Gail Humphreys-Mackenzie",
      "Julian Stamper"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Julie Chiappa",
      "Christina Pietrak"
     ],
     "a": [
      "Joy Perry",
      "Gwen Leach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Shirley",
      "Rayleen Romeo"
     ],
     "a": [
      "Sara Renzulli",
      "Enid Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robert Alexander",
      "Marvin Gordon"
     ],
     "a": [
      "Aaron Smith",
      "Thomas Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Samuel Sickles",
      "John Romeo"
     ],
     "a": [
      "Mark Pleasanton",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Jennifer Jones",
      "Samuel Sickles"
     ],
     "a": [
      "Nancy Culley",
      "Willie Simmons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kristie Capitanelli",
      "John Romeo"
     ],
     "a": [
      "Joy Perry",
      "Mark Pleasanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rayleen Romeo",
      "Robert Alexander"
     ],
     "a": [
      "Gwen Leach",
      "Aaron Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Julie Chiappa",
      "Andrew Pohlmann"
     ],
     "a": [
      "Gail Humphreys-Mackenzie",
      "Julian Stamper"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jennifer Jones",
      "Kristie Capitanelli"
     ],
     "a": [
      "Nancy Culley",
      "Gail Humphreys-Mackenzie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Shirley",
      "Christina Pietrak"
     ],
     "a": [
      "Sara Renzulli",
      "Enid Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robert Alexander",
      "Charles Buzad"
     ],
     "a": [
      "Thomas Lum",
      "Willie Simmons"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Andrew Pohlmann",
      "Samuel Sickles"
     ],
     "a": [
      "Vincent Lamarco",
      "Julian Stamper"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Shirley",
      "Charles Buzad"
     ],
     "a": [
      "Sara Renzulli",
      "Aaron Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rayleen Romeo",
      "John Romeo"
     ],
     "a": [
      "Joy Perry",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Julie Chiappa",
      "Marvin Gordon"
     ],
     "a": [
      "Enid Lum",
      "Mark Pleasanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Kristie Capitanelli",
      "Robert Alexander"
     ],
     "a": [
      "Gwen Leach",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kristie Capitanelli",
      "Christina Pietrak"
     ],
     "a": [
      "Nancy Culley",
      "Joy Perry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Jones",
      "Julie Chiappa"
     ],
     "a": [
      "Gail Humphreys-Mackenzie",
      "Enid Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robert Alexander",
      "Andrew Pohlmann"
     ],
     "a": [
      "Aaron Smith",
      "Mark Pleasanton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Charles Buzad",
      "Samuel Sickles"
     ],
     "a": [
      "Willie Simmons",
      "Julian Stamper"
     ]
    }
   ],
   "subs": [
    "Willie Simmons"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Picklr Newtown",
   "away": "APC Garden State",
   "time": "2026-08-30T12:00:00",
   "complete": true,
   "homePoints": 676,
   "awayPoints": 553,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Qiuwei Feng",
      "Michael Johnson"
     ],
     "a": [
      "Lisa Loeber",
      "John Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Krystal Johnson",
      "Mike Leach"
     ],
     "a": [
      "Patty Andrzejewski",
      "Dave Hartzell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dan He",
      "George Chen"
     ],
     "a": [
      "Liz Mooney",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marguerite Greener",
      "Andrew Mclean"
     ],
     "a": [
      "Stacy Ip-Mo",
      "Andrew Fang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marguerite Greener",
      "Dan He"
     ],
     "a": [
      "Patty Andrzejewski",
      "Kim Rodano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carolyn Coonan",
      "Sherri Falsetti"
     ],
     "a": [
      "Stacy Ip-Mo",
      "Kimberly Brooks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Johnson",
      "George Chen"
     ],
     "a": [
      "Andrew Fang",
      "John Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Eric Shipon",
      "Gennadiy Sterin"
     ],
     "a": [
      "Richard Ross",
      "Hugh Pinder"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Krystal Johnson",
      "Mike Leach"
     ],
     "a": [
      "Lisa Loeber",
      "Richard Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sherri Falsetti",
      "Eric Shipon"
     ],
     "a": [
      "Kim Rodano",
      "Dave Hartzell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dan He",
      "Gennadiy Sterin"
     ],
     "a": [
      "Kimberly Brooks",
      "Hugh Pinder"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marguerite Greener",
      "Andrew Mclean"
     ],
     "a": [
      "Liz Mooney",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dan He",
      "Carolyn Coonan"
     ],
     "a": [
      "Liz Mooney",
      "Lisa Loeber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Krystal Johnson",
      "Sherri Falsetti"
     ],
     "a": [
      "Patty Andrzejewski",
      "Stacy Ip-Mo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Johnson",
      "George Chen"
     ],
     "a": [
      "John Dechristopher",
      "Andrew Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mike Leach",
      "Andrew Mclean"
     ],
     "a": [
      "Dave Hartzell",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marguerite Greener",
      "Michael Johnson"
     ],
     "a": [
      "Lisa Loeber",
      "Andrew Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Qiuwei Feng",
      "George Chen"
     ],
     "a": [
      "Patty Andrzejewski",
      "Hugh Pinder"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sherri Falsetti",
      "Eric Shipon"
     ],
     "a": [
      "Kim Rodano",
      "Dave Hartzell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carolyn Coonan",
      "Andrew Mclean"
     ],
     "a": [
      "Kimberly Brooks",
      "Richard Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Dan He",
      "Sherri Falsetti"
     ],
     "a": [
      "Kimberly Brooks",
      "Kim Rodano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Qiuwei Feng",
      "Krystal Johnson"
     ],
     "a": [
      "Stacy Ip-Mo",
      "Liz Mooney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mike Leach",
      "Eric Shipon"
     ],
     "a": [
      "Richard Ross",
      "Hugh Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "George Chen",
      "Gennadiy Sterin"
     ],
     "a": [
      "Yuri Paritsky",
      "Dave Hartzell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Qiuwei Feng",
      "Michael Johnson"
     ],
     "a": [
      "Lisa Loeber",
      "Dave Hartzell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Krystal Johnson",
      "George Chen"
     ],
     "a": [
      "Patty Andrzejewski",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Marguerite Greener",
      "Mike Leach"
     ],
     "a": [
      "Liz Mooney",
      "Andrew Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carolyn Coonan",
      "Gennadiy Sterin"
     ],
     "a": [
      "Stacy Ip-Mo",
      "John Dechristopher"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marguerite Greener",
      "Qiuwei Feng"
     ],
     "a": [
      "Lisa Loeber",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Krystal Johnson",
      "Carolyn Coonan"
     ],
     "a": [
      "Kimberly Brooks",
      "Kim Rodano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Shipon",
      "Gennadiy Sterin"
     ],
     "a": [
      "Andrew Fang",
      "Hugh Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michael Johnson",
      "Andrew Mclean"
     ],
     "a": [
      "John Dechristopher",
      "Richard Ross"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Premiere",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-08-30T12:00:00",
   "complete": true,
   "homePoints": 591,
   "awayPoints": 688,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tina Pucciarelli",
      "Sergei Hoffman"
     ],
     "a": [
      "Janet Bellaran",
      "Nate Brochin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Sal Frangipane"
     ],
     "a": [
      "Jody Scarano",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rosanna Neis",
      "Christian Aberin"
     ],
     "a": [
      "Sarah Flynn",
      "Shawn Maloney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lisa Mctague",
      "Joe Carrano"
     ],
     "a": [
      "Doreen Arleth",
      "Mike Lasko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tina Pucciarelli",
      "Eileen Clark"
     ],
     "a": [
      "Jody Scarano",
      "Janet Bellaran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lisa Mctague",
      "Hayley Yandoli"
     ],
     "a": [
      "Doreen Arleth",
      "Sarah Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sal Frangipane",
      "Sergei Hoffman"
     ],
     "a": [
      "Robert Toledo",
      "Nate Brochin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 35,
     "as": 37,
     "h": [
      "Joe Carrano",
      "Christian Aberin"
     ],
     "a": [
      "Luis Perez",
      "Shawn Maloney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Hayley Yandoli",
      "Sal Frangipane"
     ],
     "a": [
      "Brooke Obrien",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eileen Clark",
      "Thomas Licciardello"
     ],
     "a": [
      "Michele Heinle",
      "Luis Perez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rosanna Neis",
      "Joe Carrano"
     ],
     "a": [
      "Sarah Flynn",
      "Mike Lasko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tina Pucciarelli",
      "Christian Aberin"
     ],
     "a": [
      "Doreen Arleth",
      "Stephen Arleth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rosanna Neis",
      "Raffaella Pernice"
     ],
     "a": [
      "Jody Scarano",
      "Michele Heinle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Lisa Mctague"
     ],
     "a": [
      "Brooke Obrien",
      "Janet Bellaran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sal Frangipane",
      "Joe Carrano"
     ],
     "a": [
      "Mike Lasko",
      "Stephen Arleth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sergei Hoffman",
      "Christian Aberin"
     ],
     "a": [
      "Shawn Maloney",
      "Luis Perez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Raffaella Pernice",
      "Sal Frangipane"
     ],
     "a": [
      "Brooke Obrien",
      "Nate Brochin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tina Pucciarelli",
      "Sergei Hoffman"
     ],
     "a": [
      "Sarah Flynn",
      "Shawn Maloney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eileen Clark",
      "Thomas Licciardello"
     ],
     "a": [
      "Michele Heinle",
      "Stephen Arleth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Lisa Mctague",
      "Joe Carrano"
     ],
     "a": [
      "Doreen Arleth",
      "Mike Lasko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Raffaella Pernice",
      "Hayley Yandoli"
     ],
     "a": [
      "Brooke Obrien",
      "Jody Scarano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tina Pucciarelli",
      "Lisa Mctague"
     ],
     "a": [
      "Janet Bellaran",
      "Michele Heinle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Joe Carrano",
      "Thomas Licciardello"
     ],
     "a": [
      "Nate Brochin",
      "Luis Perez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sergei Hoffman",
      "Christian Aberin"
     ],
     "a": [
      "Stephen Arleth",
      "Mike Lasko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Eileen Clark",
      "Sergei Hoffman"
     ],
     "a": [
      "Jody Scarano",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Raffaella Pernice",
      "Sal Frangipane"
     ],
     "a": [
      "Janet Bellaran",
      "Nate Brochin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rosanna Neis",
      "Christian Aberin"
     ],
     "a": [
      "Michele Heinle",
      "Luis Perez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lisa Mctague",
      "Thomas Licciardello"
     ],
     "a": [
      "Brooke Obrien",
      "Shawn Maloney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Raffaella Pernice",
      "Rosanna Neis"
     ],
     "a": [
      "Jody Scarano",
      "Janet Bellaran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eileen Clark",
      "Lisa Mctague"
     ],
     "a": [
      "Doreen Arleth",
      "Sarah Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joe Carrano",
      "Christian Aberin"
     ],
     "a": [
      "Robert Toledo",
      "Nate Brochin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Thomas Licciardello",
      "Sergei Hoffman"
     ],
     "a": [
      "Stephen Arleth",
      "Luis Perez"
     ]
    }
   ],
   "subs": [
    "Hayley Yandoli",
    "Sal Frangipane"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Flemington",
   "away": "Picklr Newark",
   "time": "2026-08-30T13:00:00",
   "complete": true,
   "homePoints": 673,
   "awayPoints": 453,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Goeckeler",
      "John Cave"
     ],
     "a": [
      "Sara Renzulli",
      "Aaron Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tammy Dragon",
      "Tom Matko"
     ],
     "a": [
      "Enid Lum",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kathleen Grennan",
      "Stephen Villani"
     ],
     "a": [
      "Nancy Culley",
      "Timothy Hopkins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Elizabeth Biehl",
      "Sal Garfi"
     ],
     "a": [
      "Sandy Hopkins",
      "Julian Stamper"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cyndee Catalano",
      "Elizabeth Biehl"
     ],
     "a": [
      "Nancy Culley",
      "Joy Perry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tammy Dragon",
      "Kathleen Grennan"
     ],
     "a": [
      "Enid Lum",
      "Gwen Leach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tom Matko",
      "John Cave"
     ],
     "a": [
      "Aaron Smith",
      "Thomas Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jeff Kesner",
      "Stephen Villani"
     ],
     "a": [
      "Mark Pleasanton",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Elizabeth Biehl",
      "Sal Garfi"
     ],
     "a": [
      "Joy Perry",
      "Julian Stamper"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kathleen Grennan",
      "Jeff Kesner"
     ],
     "a": [
      "Sandy Hopkins",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cyndee Catalano",
      "John Cave"
     ],
     "a": [
      "Sara Renzulli",
      "Timothy Hopkins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Susan Goeckeler",
      "Stephen Villani"
     ],
     "a": [
      "Gwen Leach",
      "Mark Pleasanton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Cyndee Catalano",
      "Elizabeth Biehl"
     ],
     "a": [
      "Sandy Hopkins",
      "Sara Renzulli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tammy Dragon",
      "Susan Goeckeler"
     ],
     "a": [
      "Enid Lum",
      "Nancy Culley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tom Matko",
      "Stephen Villani"
     ],
     "a": [
      "Aaron Smith",
      "Thomas Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sal Garfi",
      "Jeff Kesner"
     ],
     "a": [
      "Julian Stamper",
      "Timothy Hopkins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Susan Goeckeler",
      "John Cave"
     ],
     "a": [
      "Joy Perry",
      "Aaron Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Tammy Dragon",
      "Tom Matko"
     ],
     "a": [
      "Enid Lum",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kathleen Grennan",
      "Sal Garfi"
     ],
     "a": [
      "Nancy Culley",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cyndee Catalano",
      "Jeff Kesner"
     ],
     "a": [
      "Gwen Leach",
      "Mark Pleasanton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tammy Dragon",
      "Cyndee Catalano"
     ],
     "a": [
      "Sara Renzulli",
      "Sandy Hopkins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Elizabeth Biehl",
      "Kathleen Grennan"
     ],
     "a": [
      "Joy Perry",
      "Gwen Leach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "John Cave",
      "Sal Garfi"
     ],
     "a": [
      "Julian Stamper",
      "Timothy Hopkins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tom Matko",
      "Jeff Kesner"
     ],
     "a": [
      "Mark Pleasanton",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Goeckeler",
      "Stephen Villani"
     ],
     "a": [
      "Sara Renzulli",
      "Aaron Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cyndee Catalano",
      "Tom Matko"
     ],
     "a": [
      "Enid Lum",
      "Timothy Hopkins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kathleen Grennan",
      "John Cave"
     ],
     "a": [
      "Nancy Culley",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tammy Dragon",
      "Jeff Kesner"
     ],
     "a": [
      "Sandy Hopkins",
      "Julian Stamper"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cyndee Catalano",
      "Tammy Dragon"
     ],
     "a": [
      "Joy Perry",
      "Gwen Leach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Elizabeth Biehl",
      "Susan Goeckeler"
     ],
     "a": [
      "Enid Lum",
      "Nancy Culley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Tom Matko",
      "Jeff Kesner"
     ],
     "a": [
      "Mark Pleasanton",
      "Thomas Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stephen Villani",
      "Sal Garfi"
     ],
     "a": [
      "Aaron Smith",
      "Vincent Lamarco"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Picklr Fair Lawn",
   "away": "Montville Dragons",
   "time": "2026-08-30T13:00:00",
   "complete": true,
   "homePoints": 653,
   "awayPoints": 587,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Renee Froeberg",
      "Robert Bernstein"
     ],
     "a": [
      "Janine Thompson",
      "Cromwell Palomares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Cheryl Klein",
      "Zhaohui Li"
     ],
     "a": [
      "Jemma Bucks",
      "Jonathan Basa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nicole Nelson",
      "Garry Wright"
     ],
     "a": [
      "Karen Gallione",
      "Hal Gandhi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Maricel Pineda",
      "Derek Manwaring"
     ],
     "a": [
      "Stella Ott",
      "Lance Arlaus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nicole Nelson",
      "Cheryl Klein"
     ],
     "a": [
      "Janine Thompson",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Maricel Pineda",
      "Renee Froeberg"
     ],
     "a": [
      "Karen Gallione",
      "Stella Ott"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Derek Manwaring",
      "Joe Chin"
     ],
     "a": [
      "Cromwell Palomares",
      "Jonathan Basa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robert Bernstein",
      "Garry Wright"
     ],
     "a": [
      "Stephen Cordaro",
      "Hal Gandhi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maria Fanfa",
      "Sergio Fasciano"
     ],
     "a": [
      "Jemma Bucks",
      "Cromwell Palomares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nicole Nelson",
      "Zhaohui Li"
     ],
     "a": [
      "Rachel Baluyot",
      "Stephen Cordaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Maricel Pineda",
      "Robert Bernstein"
     ],
     "a": [
      "Karen Gallione",
      "Lance Arlaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Renee Froeberg",
      "Joe Chin"
     ],
     "a": [
      "Stella Ott",
      "Cesar Fojas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maria Fanfa",
      "Maricel Pineda"
     ],
     "a": [
      "Janine Thompson",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nicole Nelson",
      "Cheryl Klein"
     ],
     "a": [
      "Karen Gallione",
      "Jemma Bucks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Joe Chin",
      "Sergio Fasciano"
     ],
     "a": [
      "Cesar Fojas",
      "Lance Arlaus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Garry Wright",
      "Zhaohui Li"
     ],
     "a": [
      "Hal Gandhi",
      "Stephen Cordaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Renee Froeberg",
      "Sergio Fasciano"
     ],
     "a": [
      "Janine Thompson",
      "Jonathan Basa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cheryl Klein",
      "Zhaohui Li"
     ],
     "a": [
      "Rachel Baluyot",
      "Lance Arlaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nicole Nelson",
      "Derek Manwaring"
     ],
     "a": [
      "Stella Ott",
      "Cesar Fojas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Maria Fanfa",
      "Garry Wright"
     ],
     "a": [
      "Jemma Bucks",
      "Cromwell Palomares"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Maria Fanfa",
      "Renee Froeberg"
     ],
     "a": [
      "Karen Gallione",
      "Janine Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cheryl Klein",
      "Maricel Pineda"
     ],
     "a": [
      "Rachel Baluyot",
      "Jemma Bucks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Derek Manwaring",
      "Robert Bernstein"
     ],
     "a": [
      "Cesar Fojas",
      "Hal Gandhi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Joe Chin",
      "Sergio Fasciano"
     ],
     "a": [
      "Jonathan Basa",
      "Stephen Cordaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nicole Nelson",
      "Derek Manwaring"
     ],
     "a": [
      "Janine Thompson",
      "Cromwell Palomares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cheryl Klein",
      "Joe Chin"
     ],
     "a": [
      "Jemma Bucks",
      "Jonathan Basa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Renee Froeberg",
      "Robert Bernstein"
     ],
     "a": [
      "Karen Gallione",
      "Hal Gandhi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Maria Fanfa",
      "Zhaohui Li"
     ],
     "a": [
      "Stella Ott",
      "Lance Arlaus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Maria Fanfa",
      "Maricel Pineda"
     ],
     "a": [
      "Janine Thompson",
      "Jemma Bucks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Renee Froeberg",
      "Nicole Nelson"
     ],
     "a": [
      "Rachel Baluyot",
      "Stella Ott"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Garry Wright",
      "Robert Bernstein"
     ],
     "a": [
      "Jonathan Basa",
      "Cromwell Palomares"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Derek Manwaring",
      "Sergio Fasciano"
     ],
     "a": [
      "Cesar Fojas",
      "Stephen Cordaro"
     ]
    }
   ],
   "subs": [
    "Hal Gandhi"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Home Court",
   "away": "PickleRage Union County",
   "time": "2026-08-30T13:00:00",
   "complete": true,
   "homePoints": 645,
   "awayPoints": 549,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Susan M Fett",
      "Michael Gilbert"
     ],
     "a": [
      "Kelly Davis",
      "Manop Sutipayakul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sharon Streit",
      "Michael Saggese"
     ],
     "a": [
      "Christine Anderson",
      "Louis Sapirman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Sue Agneli",
      "Rich Traynor"
     ],
     "a": [
      "Mara Levy",
      "Dan Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Janine Kietrys",
      "Gustavo Ramos"
     ],
     "a": [
      "Linda Bozzo",
      "Marty Tan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Olga Khalev",
      "Sharon Streit"
     ],
     "a": [
      "Linda Bozzo",
      "Mara Levy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sue Agneli",
      "Melissa Engel"
     ],
     "a": [
      "Annette Sutton",
      "Kelly Davis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michael Gilbert",
      "Rich Traynor"
     ],
     "a": [
      "Louis Sapirman",
      "Manop Sutipayakul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gustavo Ramos",
      "Michael Saggese"
     ],
     "a": [
      "Michael Barry",
      "Dan Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Olga Khalev",
      "Rich Traynor"
     ],
     "a": [
      "Annette Sutton",
      "Marty Tan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susan M Fett",
      "Michael Saggese"
     ],
     "a": [
      "Christine Anderson",
      "Louis Sapirman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sue Agneli",
      "Gustavo Ramos"
     ],
     "a": [
      "Linda Bozzo",
      "Dan Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Janine Kietrys",
      "Keith Bloom"
     ],
     "a": [
      "Mara Levy",
      "Michael Barry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Janine Kietrys",
      "Sharon Streit"
     ],
     "a": [
      "Christine Anderson",
      "Mara Levy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sue Agneli",
      "Susan M Fett"
     ],
     "a": [
      "Annette Sutton",
      "Kelly Davis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Gilbert",
      "Gustavo Ramos"
     ],
     "a": [
      "Michael Barry",
      "Marty Tan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michael Saggese",
      "Keith Bloom"
     ],
     "a": [
      "Manop Sutipayakul",
      "Dan Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan M Fett",
      "Rich Traynor"
     ],
     "a": [
      "Christine Anderson",
      "Manop Sutipayakul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Olga Khalev",
      "Michael Gilbert"
     ],
     "a": [
      "Linda Bozzo",
      "Marty Tan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sue Agneli",
      "Keith Bloom"
     ],
     "a": [
      "Mara Levy",
      "Louis Sapirman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Melissa Engel",
      "Gustavo Ramos"
     ],
     "a": [
      "Kelly Davis",
      "Michael Barry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Olga Khalev",
      "Janine Kietrys"
     ],
     "a": [
      "Linda Bozzo",
      "Annette Sutton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Melissa Engel"
     ],
     "a": [
      "Christine Anderson",
      "Kelly Davis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Saggese",
      "Rich Traynor"
     ],
     "a": [
      "Louis Sapirman",
      "Manop Sutipayakul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Keith Bloom",
      "Michael Gilbert"
     ],
     "a": [
      "Michael Barry",
      "Dan Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Michael Gilbert"
     ],
     "a": [
      "Mara Levy",
      "Manop Sutipayakul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan M Fett",
      "Keith Bloom"
     ],
     "a": [
      "Kelly Davis",
      "Michael Barry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Melissa Engel",
      "Michael Saggese"
     ],
     "a": [
      "Christine Anderson",
      "Dan Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Janine Kietrys",
      "Rich Traynor"
     ],
     "a": [
      "Annette Sutton",
      "Marty Tan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Olga Khalev",
      "Melissa Engel"
     ],
     "a": [
      "Linda Bozzo",
      "Annette Sutton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Susan M Fett",
      "Sharon Streit"
     ],
     "a": [
      "Christine Anderson",
      "Mara Levy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Keith Bloom",
      "Michael Saggese"
     ],
     "a": [
      "Louis Sapirman",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gustavo Ramos",
      "Rich Traynor"
     ],
     "a": [
      "Michael Barry",
      "Marty Tan"
     ]
    }
   ],
   "subs": [
    "Marty Tan",
    "Annette Sutton",
    "Kelly Davis"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-08-30T13:00:00",
   "complete": true,
   "homePoints": 627,
   "awayPoints": 548,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kimberly Sorce",
      "Jay Zeng"
     ],
     "a": [
      "Nan Feng",
      "Herald Barber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dari Mehl",
      "Pankaj Yadava"
     ],
     "a": [
      "Lisa Braumann",
      "Gary Grzankowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dawn Willemsen",
      "Ralph Croat"
     ],
     "a": [
      "Margaret Bayse",
      "Chris Shung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lucy Sha",
      "Uma Kamineni"
     ],
     "a": [
      "Izabel Illipronti",
      "Stephen Levitt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dawn Willemsen",
      "Kimberly Sorce"
     ],
     "a": [
      "Guitta Barghash",
      "Ting Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Karin Schneider",
      "Lucy Sha"
     ],
     "a": [
      "Margaret Bayse",
      "Izabel Illipronti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ralph Croat",
      "Jay Zeng"
     ],
     "a": [
      "Stephen Stasiulewicz",
      "Andre Illipronti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Pankaj Yadava",
      "Uma Kamineni"
     ],
     "a": [
      "Herald Barber",
      "Stephen Levitt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dawn Willemsen",
      "Ralph Croat"
     ],
     "a": [
      "Lisa Braumann",
      "Gary Grzankowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lucy Sha",
      "Jay Zeng"
     ],
     "a": [
      "Nan Feng",
      "Andre Illipronti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Dari Mehl",
      "Uma Kamineni"
     ],
     "a": [
      "Ting Chen",
      "Chris Shung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kimberly Sorce",
      "Pankaj Yadava"
     ],
     "a": [
      "Guitta Barghash",
      "Stephen Stasiulewicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dawn Willemsen",
      "Karin Schneider"
     ],
     "a": [
      "Izabel Illipronti",
      "Nan Feng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dari Mehl",
      "Kimberly Sorce"
     ],
     "a": [
      "Lisa Braumann",
      "Margaret Bayse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ralph Croat",
      "Uma Kamineni"
     ],
     "a": [
      "Chris Shung",
      "Herald Barber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Pankaj Yadava",
      "Jay Zeng"
     ],
     "a": [
      "Stephen Levitt",
      "Gary Grzankowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Dawn Willemsen",
      "Uma Kamineni"
     ],
     "a": [
      "Margaret Bayse",
      "Andre Illipronti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dari Mehl",
      "Ralph Croat"
     ],
     "a": [
      "Izabel Illipronti",
      "Stephen Stasiulewicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karin Schneider",
      "Pankaj Yadava"
     ],
     "a": [
      "Ting Chen",
      "Stephen Levitt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lucy Sha",
      "Jay Zeng"
     ],
     "a": [
      "Guitta Barghash",
      "Herald Barber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kimberly Sorce",
      "Lucy Sha"
     ],
     "a": [
      "Nan Feng",
      "Ting Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Dari Mehl",
      "Karin Schneider"
     ],
     "a": [
      "Lisa Braumann",
      "Guitta Barghash"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ralph Croat",
      "Uma Kamineni"
     ],
     "a": [
      "Andre Illipronti",
      "Gary Grzankowski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pankaj Yadava",
      "Jay Zeng"
     ],
     "a": [
      "Stephen Stasiulewicz",
      "Chris Shung"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Lucy Sha",
      "Pankaj Yadava"
     ],
     "a": [
      "Izabel Illipronti",
      "Gary Grzankowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Dawn Willemsen",
      "Jay Zeng"
     ],
     "a": [
      "Nan Feng",
      "Chris Shung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dari Mehl",
      "Uma Kamineni"
     ],
     "a": [
      "Lisa Braumann",
      "Stephen Levitt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kimberly Sorce",
      "Ralph Croat"
     ],
     "a": [
      "Margaret Bayse",
      "Herald Barber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Dari Mehl",
      "Karin Schneider"
     ],
     "a": [
      "Guitta Barghash",
      "Margaret Bayse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kimberly Sorce",
      "Lucy Sha"
     ],
     "a": [
      "Ting Chen",
      "Izabel Illipronti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pankaj Yadava",
      "Uma Kamineni"
     ],
     "a": [
      "Herald Barber",
      "Stephen Stasiulewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jay Zeng",
      "Ralph Croat"
     ],
     "a": [
      "Stephen Levitt",
      "Andre Illipronti"
     ]
    }
   ],
   "subs": [
    "Pankaj Yadava",
    "Uma Kamineni",
    "Ralph Croat",
    "Dari Mehl",
    "Karin Schneider",
    "Kimberly Sorce",
    "Jay Zeng",
    "Lucy Sha",
    "Andre Illipronti",
    "Dawn Willemsen",
    "Guitta Barghash"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Allstar Pickler",
   "away": "Pickleball Palace",
   "time": "2026-08-30T14:00:00",
   "complete": true,
   "homePoints": 470,
   "awayPoints": 673,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rita Hung",
      "Mark Vanarendonk"
     ],
     "a": [
      "Allison Harmony",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Yayuan Lien",
      "Virasack Vorabouth"
     ],
     "a": [
      "Ana Bautista",
      "Mike Matchett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Denise Aronson",
      "Brandon Fulford"
     ],
     "a": [
      "Amanda Gardiner",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Vera Wong",
      "Jim Hu"
     ],
     "a": [
      "Debbie Tovitz",
      "Mark Lederman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Denise Aronson",
      "Jinghua Shi"
     ],
     "a": [
      "Ana Bautista",
      "Cindy Walters"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Yayuan Lien",
      "Vera Wong"
     ],
     "a": [
      "Allison Harmony",
      "Debbie Tovitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jim Hu",
      "Mark Vanarendonk"
     ],
     "a": [
      "Robert Goldenberg",
      "Mark Lederman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ronald Wong",
      "Virasack Vorabouth"
     ],
     "a": [
      "Roberto Marcillo",
      "Ashish Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Yayuan Lien",
      "Virasack Vorabouth"
     ],
     "a": [
      "Ana Bautista",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Vera Wong",
      "Jim Hu"
     ],
     "a": [
      "Cindy Walters",
      "Mark Lederman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rita Hung",
      "Ronald Wong"
     ],
     "a": [
      "Allison Harmony",
      "Ashish Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Denise Aronson",
      "Mark Vanarendonk"
     ],
     "a": [
      "Amanda Gardiner",
      "Mike Matchett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rita Hung",
      "Vera Wong"
     ],
     "a": [
      "Amanda Gardiner",
      "Debbie Tovitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Yayuan Lien",
      "Denise Aronson"
     ],
     "a": [
      "Ana Bautista",
      "Cindy Walters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jim Hu",
      "Ronald Wong"
     ],
     "a": [
      "Mike Matchett",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Virasack Vorabouth",
      "Mark Vanarendonk"
     ],
     "a": [
      "Mark Lederman",
      "Ashish Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Denise Aronson",
      "Virasack Vorabouth"
     ],
     "a": [
      "Cindy Walters",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rita Hung",
      "Jim Hu"
     ],
     "a": [
      "Allison Harmony",
      "Mike Matchett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Yayuan Lien",
      "Ronald Wong"
     ],
     "a": [
      "Debbie Tovitz",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jinghua Shi",
      "Mark Vanarendonk"
     ],
     "a": [
      "Amanda Gardiner",
      "Ashish Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vera Wong",
      "Jinghua Shi"
     ],
     "a": [
      "Allison Harmony",
      "Amanda Gardiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Yayuan Lien",
      "Denise Aronson"
     ],
     "a": [
      "Ana Bautista",
      "Debbie Tovitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mark Vanarendonk",
      "Virasack Vorabouth"
     ],
     "a": [
      "Mark Lederman",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jim Hu",
      "Ronald Wong"
     ],
     "a": [
      "Robert Goldenberg",
      "Mike Matchett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Denise Aronson",
      "Virasack Vorabouth"
     ],
     "a": [
      "Cindy Walters",
      "Mark Lederman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Vera Wong",
      "Ronald Wong"
     ],
     "a": [
      "Debbie Tovitz",
      "Ashish Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jinghua Shi",
      "Jim Hu"
     ],
     "a": [
      "Allison Harmony",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rita Hung",
      "Mark Vanarendonk"
     ],
     "a": [
      "Amanda Gardiner",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Denise Aronson",
      "Jinghua Shi"
     ],
     "a": [
      "Ana Bautista",
      "Allison Harmony"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rita Hung",
      "Vera Wong"
     ],
     "a": [
      "Amanda Gardiner",
      "Cindy Walters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Virasack Vorabouth",
      "Ronald Wong"
     ],
     "a": [
      "Roberto Marcillo",
      "Robert Goldenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jim Hu",
      "Mark Vanarendonk"
     ],
     "a": [
      "Mike Matchett",
      "Ashish Malhotra"
     ]
    }
   ],
   "subs": [
    "Jim Hu",
    "Ronald Wong",
    "Yayuan Lien",
    "Vera Wong",
    "Denise Aronson"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "ACE Moorestown",
   "away": "Dill Dinkers Lansdale",
   "time": "2026-08-30T14:00:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 613,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Barb Mulckhuyse",
      "Bob Sochor"
     ],
     "a": [
      "Jennifer Jones",
      "Robert Alexander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Lawrence Padersky"
     ],
     "a": [
      "Julie Chiappa",
      "Henry Rodrique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrea Schwab",
      "Jason Fingerman"
     ],
     "a": [
      "Denise Brownlee",
      "Andre Goldstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Cathy Fiebs",
      "Scott Auty"
     ],
     "a": [
      "Rachel Shirley",
      "Neil Vijayendran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tinglan Zhao",
      "Dawn Gordon"
     ],
     "a": [
      "Brenda Weckerly",
      "Joan Glass"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrea Schwab",
      "Kelley Batejan"
     ],
     "a": [
      "Julie Chiappa",
      "Jennifer Jones"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "William Askin",
      "Howard Cetel"
     ],
     "a": [
      "Charles Buzad",
      "Andre Goldstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bob Sochor",
      "Jason Fingerman"
     ],
     "a": [
      "Samuel Sickles",
      "Robert Alexander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Howard Cetel"
     ],
     "a": [
      "Jennifer Jones",
      "Samuel Sickles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cathy Fiebs",
      "Bob Sochor"
     ],
     "a": [
      "Rachel Shirley",
      "Andre Goldstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dawn Gordon",
      "Lawrence Padersky"
     ],
     "a": [
      "Denise Brownlee",
      "Henry Rodrique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tinglan Zhao",
      "Scott Auty"
     ],
     "a": [
      "Joan Glass",
      "Charles Buzad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andrea Schwab",
      "Cathy Fiebs"
     ],
     "a": [
      "Denise Brownlee",
      "Julie Chiappa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kelley Batejan",
      "Barb Mulckhuyse"
     ],
     "a": [
      "Rachel Shirley",
      "Brenda Weckerly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jason Fingerman",
      "Lawrence Padersky"
     ],
     "a": [
      "Robert Alexander",
      "Charles Buzad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Howard Cetel",
      "William Askin"
     ],
     "a": [
      "Samuel Sickles",
      "Neil Vijayendran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Andrea Schwab",
      "Bob Sochor"
     ],
     "a": [
      "Rachel Shirley",
      "Charles Buzad"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "William Askin"
     ],
     "a": [
      "Jennifer Jones",
      "Neil Vijayendran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelley Batejan",
      "Howard Cetel"
     ],
     "a": [
      "Julie Chiappa",
      "Henry Rodrique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ],
     "a": [
      "Brenda Weckerly",
      "Andre Goldstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Barb Mulckhuyse",
      "Andrea Schwab"
     ],
     "a": [
      "Rachel Shirley",
      "Denise Brownlee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tinglan Zhao",
      "Dawn Gordon"
     ],
     "a": [
      "Joan Glass",
      "Brenda Weckerly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Scott Auty",
      "Howard Cetel"
     ],
     "a": [
      "Neil Vijayendran",
      "Robert Alexander"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jason Fingerman",
      "Lawrence Padersky"
     ],
     "a": [
      "Charles Buzad",
      "Andre Goldstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Andrea Schwab",
      "Bob Sochor"
     ],
     "a": [
      "Jennifer Jones",
      "Neil Vijayendran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Barb Mulckhuyse",
      "Howard Cetel"
     ],
     "a": [
      "Rachel Shirley",
      "Henry Rodrique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cathy Fiebs",
      "William Askin"
     ],
     "a": [
      "Joan Glass",
      "Andre Goldstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Scott Auty"
     ],
     "a": [
      "Julie Chiappa",
      "Samuel Sickles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Cathy Fiebs"
     ],
     "a": [
      "Joan Glass",
      "Denise Brownlee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Schwab",
      "Kelley Batejan"
     ],
     "a": [
      "Julie Chiappa",
      "Jennifer Jones"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jason Fingerman",
      "William Askin"
     ],
     "a": [
      "Neil Vijayendran",
      "Robert Alexander"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Bob Sochor",
      "Lawrence Padersky"
     ],
     "a": [
      "Charles Buzad",
      "Samuel Sickles"
     ]
    }
   ],
   "subs": [
    "Joan Glass",
    "Tinglan Zhao"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Montville Rocks",
   "away": "PCKLRAMA",
   "time": "2026-08-30T14:00:00",
   "complete": true,
   "homePoints": 661,
   "awayPoints": 532,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joanne Rim",
      "Wallace Lee"
     ],
     "a": [
      "Susan Colicchio",
      "Alam Mohammad"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shuming Zhu",
      "Jhon Cifuentes"
     ],
     "a": [
      "Kristen Silvestri",
      "Geoff Feingold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Liang Chao",
      "James Liao"
     ],
     "a": [
      "Paula Kolb",
      "Scott Carney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Xiaohong Fang",
      "Hongjie Liu"
     ],
     "a": [
      "Sarah Ramadas",
      "Joe Monello"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Xiaohong Fang",
      "Vilayvanh Sysounthone"
     ],
     "a": [
      "Susan Colicchio",
      "Paula Kolb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shuming Zhu",
      "Joanne Rim"
     ],
     "a": [
      "Kristen Silvestri",
      "May Syso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jhon Cifuentes",
      "Hongjie Liu"
     ],
     "a": [
      "Scott Kindzierski",
      "Geoff Feingold"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yan Wang",
      "Wallace Lee"
     ],
     "a": [
      "Steven Jaffe",
      "Alam Mohammad"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Xiaohong Fang",
      "Jhon Cifuentes"
     ],
     "a": [
      "Kristen Silvestri",
      "Geoff Feingold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joanne Rim",
      "James Liao"
     ],
     "a": [
      "Susan Colicchio",
      "Scott Kindzierski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Vilayvanh Sysounthone",
      "Wallace Lee"
     ],
     "a": [
      "May Syso",
      "Alam Mohammad"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shuming Zhu",
      "Yan Wang"
     ],
     "a": [
      "Sarah Ramadas",
      "Joe Monello"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shuming Zhu",
      "Xiaohong Fang"
     ],
     "a": [
      "Kristen Silvestri",
      "Sarah Ramadas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vilayvanh Sysounthone",
      "Liang Chao"
     ],
     "a": [
      "Paula Kolb",
      "May Syso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Wallace Lee",
      "James Liao"
     ],
     "a": [
      "Joe Monello",
      "Alam Mohammad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hongjie Liu",
      "Yan Wang"
     ],
     "a": [
      "Steven Jaffe",
      "Scott Carney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Vilayvanh Sysounthone",
      "Jhon Cifuentes"
     ],
     "a": [
      "Susan Colicchio",
      "Joe Monello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Xiaohong Fang",
      "Yan Wang"
     ],
     "a": [
      "Paula Kolb",
      "Geoff Feingold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Shuming Zhu",
      "James Liao"
     ],
     "a": [
      "May Syso",
      "Scott Kindzierski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joanne Rim",
      "Hongjie Liu"
     ],
     "a": [
      "Sarah Ramadas",
      "Scott Carney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Xiaohong Fang",
      "Joanne Rim"
     ],
     "a": [
      "Kristen Silvestri",
      "Susan Colicchio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shuming Zhu",
      "Liang Chao"
     ],
     "a": [
      "Paula Kolb",
      "Sarah Ramadas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yan Wang",
      "Wallace Lee"
     ],
     "a": [
      "Joe Monello",
      "Alam Mohammad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jhon Cifuentes",
      "Hongjie Liu"
     ],
     "a": [
      "Steven Jaffe",
      "Scott Kindzierski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Xiaohong Fang",
      "Wallace Lee"
     ],
     "a": [
      "Susan Colicchio",
      "Joe Monello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shuming Zhu",
      "Jhon Cifuentes"
     ],
     "a": [
      "Kristen Silvestri",
      "Scott Kindzierski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Vilayvanh Sysounthone",
      "Hongjie Liu"
     ],
     "a": [
      "Paula Kolb",
      "Scott Carney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joanne Rim",
      "James Liao"
     ],
     "a": [
      "May Syso",
      "Alam Mohammad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Shuming Zhu",
      "Vilayvanh Sysounthone"
     ],
     "a": [
      "Kristen Silvestri",
      "Sarah Ramadas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Xiaohong Fang",
      "Liang Chao"
     ],
     "a": [
      "May Syso",
      "Susan Colicchio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "James Liao",
      "Wallace Lee"
     ],
     "a": [
      "Steven Jaffe",
      "Geoff Feingold"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yan Wang",
      "Jhon Cifuentes"
     ],
     "a": [
      "Joe Monello",
      "Scott Carney"
     ]
    }
   ],
   "subs": [
    "James Liao"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Stelton Sports",
   "away": "One Love",
   "time": "2026-08-30T14:00:00",
   "complete": true,
   "homePoints": 667,
   "awayPoints": 508,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ann Betterton",
      "Gajendra Mehta"
     ],
     "a": [
      "Karen Kelly",
      "Michael Cisar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sushma Rayapudi",
      "Shah Faisal"
     ],
     "a": [
      "Janette Crowe",
      "Michael Stout"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cathy Proctor",
      "Craig Girvan"
     ],
     "a": [
      "Jackie Mclaughlin",
      "Michael Mastando"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Geordielyn Alviola",
      "Ben Xie"
     ],
     "a": [
      "Heidi Lipton",
      "Jim Sintic"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jenn Zhang",
      "Jessie Yan Han"
     ],
     "a": [
      "Jackie Mclaughlin",
      "Janette Crowe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ann Betterton",
      "Geordielyn Alviola"
     ],
     "a": [
      "Karen Kelly",
      "Tammy Horner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gajendra Mehta",
      "Craig Girvan"
     ],
     "a": [
      "Michael Cisar",
      "Michael Mastando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christopher Aiello",
      "Peter Shen"
     ],
     "a": [
      "Kenneth Pickett",
      "Jim Sintic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessie Yan Han",
      "Ben Xie"
     ],
     "a": [
      "Tammy Horner",
      "Michael Cisar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jenn Zhang",
      "Peter Shen"
     ],
     "a": [
      "Janette Crowe",
      "David Tisony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cathy Proctor",
      "Gajendra Mehta"
     ],
     "a": [
      "Heidi Lipton",
      "Michael Mastando"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ann Betterton",
      "Shah Faisal"
     ],
     "a": [
      "Randi Yezer",
      "Kenneth Pickett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cathy Proctor",
      "Geordielyn Alviola"
     ],
     "a": [
      "Karen Kelly",
      "Randi Yezer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sushma Rayapudi",
      "Jenn Zhang"
     ],
     "a": [
      "Tammy Horner",
      "Heidi Lipton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christopher Aiello",
      "Craig Girvan"
     ],
     "a": [
      "Michael Stout",
      "Michael Cisar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ben Xie",
      "Peter Shen"
     ],
     "a": [
      "David Tisony",
      "Jim Sintic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ann Betterton",
      "Gajendra Mehta"
     ],
     "a": [
      "Karen Kelly",
      "Michael Stout"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cathy Proctor",
      "Ben Xie"
     ],
     "a": [
      "Randi Yezer",
      "Michael Mastando"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sushma Rayapudi",
      "Craig Girvan"
     ],
     "a": [
      "Tammy Horner",
      "David Tisony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessie Yan Han",
      "Shah Faisal"
     ],
     "a": [
      "Jackie Mclaughlin",
      "Kenneth Pickett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cathy Proctor",
      "Sushma Rayapudi"
     ],
     "a": [
      "Karen Kelly",
      "Jackie Mclaughlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ann Betterton",
      "Geordielyn Alviola"
     ],
     "a": [
      "Heidi Lipton",
      "Randi Yezer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Gajendra Mehta",
      "Shah Faisal"
     ],
     "a": [
      "Kenneth Pickett",
      "Michael Cisar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Christopher Aiello",
      "Ben Xie"
     ],
     "a": [
      "Michael Stout",
      "Jim Sintic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jenn Zhang",
      "Peter Shen"
     ],
     "a": [
      "Karen Kelly",
      "David Tisony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ann Betterton",
      "Shah Faisal"
     ],
     "a": [
      "Janette Crowe",
      "Michael Cisar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Cathy Proctor",
      "Gajendra Mehta"
     ],
     "a": [
      "Randi Yezer",
      "Jim Sintic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Geordielyn Alviola",
      "Craig Girvan"
     ],
     "a": [
      "Tammy Horner",
      "Michael Mastando"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jessie Yan Han",
      "Sushma Rayapudi"
     ],
     "a": [
      "Heidi Lipton",
      "Jackie Mclaughlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cathy Proctor",
      "Geordielyn Alviola"
     ],
     "a": [
      "Randi Yezer",
      "Janette Crowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Peter Shen",
      "Christopher Aiello"
     ],
     "a": [
      "Michael Stout",
      "David Tisony"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ben Xie",
      "Gajendra Mehta"
     ],
     "a": [
      "Kenneth Pickett",
      "Michael Mastando"
     ]
    }
   ],
   "subs": [
    "Ann Betterton",
    "Jackie Mclaughlin",
    "Janette Crowe"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Pickleball Kingdom Watchung",
   "away": "Home Court",
   "time": "2026-09-13T12:00:00",
   "complete": true,
   "provisional": true,
   "homePoints": 443,
   "awayPoints": 660,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nan Feng",
      "Stephen Stasiulewicz"
     ],
     "a": [
      "Sharon Streit",
      "Steve Peck"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Izabel Illipronti",
      "Pedro Oliveira"
     ],
     "a": [
      "Sandy Hartman",
      "Rich Traynor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Shobana Ravishankar",
      "Gary Grzankowski"
     ],
     "a": [
      "Janine Kietrys",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lisa Braumann",
      "Herald Barber"
     ],
     "a": [
      "Susan M Fett",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ting Chen",
      "Shobana Ravishankar"
     ],
     "a": [
      "Sandy Hartman",
      "Cindi Goldstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nan Feng",
      "Margaret Bayse"
     ],
     "a": [
      "Susan M Fett",
      "Janine Kietrys"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mark Szeman",
      "Stephen Levitt"
     ],
     "a": [
      "David Cartwright",
      "Rich Traynor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gary Grzankowski",
      "Pedro Oliveira"
     ],
     "a": [
      "Keith Bloom",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Margaret Bayse",
      "Stephen Stasiulewicz"
     ],
     "a": [
      "Sandy Hartman",
      "Keith Bloom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ting Chen",
      "Mark Szeman"
     ],
     "a": [
      "Olga Khalev",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Izabel Illipronti",
      "Herald Barber"
     ],
     "a": [
      "Sharon Streit",
      "Michael Gilbert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lisa Braumann",
      "Stephen Levitt"
     ],
     "a": [
      "Cindi Goldstein",
      "Rich Traynor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Izabel Illipronti",
      "Lisa Braumann"
     ],
     "a": [
      "Olga Khalev",
      "Sandy Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Shobana Ravishankar",
      "Nan Feng"
     ],
     "a": [
      "Susan M Fett",
      "Cindi Goldstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Stephen Stasiulewicz",
      "Gary Grzankowski"
     ],
     "a": [
      "David Cartwright",
      "Keith Bloom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Herald Barber",
      "Pedro Oliveira"
     ],
     "a": [
      "Steve Peck",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nan Feng",
      "Gary Grzankowski"
     ],
     "a": [
      "Susan M Fett",
      "Steve Peck"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Margaret Bayse",
      "Pedro Oliveira"
     ],
     "a": [
      "Cindi Goldstein",
      "Michael Gilbert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shobana Ravishankar",
      "Mark Szeman"
     ],
     "a": [
      "Sandy Hartman",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ting Chen",
      "Stephen Levitt"
     ],
     "a": [
      "Sharon Streit",
      "Keith Bloom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Margaret Bayse",
      "Lisa Braumann"
     ],
     "a": [
      "Sandy Hartman",
      "Janine Kietrys"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ting Chen",
      "Izabel Illipronti"
     ],
     "a": [
      "Sharon Streit",
      "Olga Khalev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Stephen Levitt",
      "Stephen Stasiulewicz"
     ],
     "a": [
      "Rich Traynor",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Herald Barber",
      "Mark Szeman"
     ],
     "a": [
      "Michael Gilbert",
      "Steve Peck"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lisa Braumann",
      "Pedro Oliveira"
     ],
     "a": [
      "Cindi Goldstein",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nan Feng",
      "Gary Grzankowski"
     ],
     "a": [
      "Susan M Fett",
      "Michael Gilbert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Izabel Illipronti",
      "Herald Barber"
     ],
     "a": [
      "Janine Kietrys",
      "Rich Traynor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Shobana Ravishankar",
      "Stephen Stasiulewicz"
     ],
     "a": [
      "Olga Khalev",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Margaret Bayse",
      "Shobana Ravishankar"
     ],
     "a": [
      "Janine Kietrys",
      "Olga Khalev"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ting Chen",
      "Nan Feng"
     ],
     "a": [
      "Sharon Streit",
      "Cindi Goldstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pedro Oliveira",
      "Stephen Stasiulewicz"
     ],
     "a": [
      "Robert Huntley",
      "Keith Bloom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Gary Grzankowski",
      "Mark Szeman"
     ],
     "a": [
      "Michael Gilbert",
      "Steve Peck"
     ]
    }
   ],
   "subs": [
    "David Cartwright",
    "Mark Szeman"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Flemington",
   "away": "Montville Dragons",
   "time": "2026-09-13T12:00:00",
   "complete": true,
   "homePoints": 632,
   "awayPoints": 575,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Elizabeth Biehl",
      "Sal Garfi"
     ],
     "a": [
      "Jess Cox",
      "Michael-John Van Rhyn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Cyndee Catalano",
      "Toby Athron"
     ],
     "a": [
      "Stella Ott",
      "Lance Arlaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jo Marie Holzhammer",
      "Jeff Kesner"
     ],
     "a": [
      "Karen Gallione",
      "Stephen Cordaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Ziegler",
      "Ken Carlson"
     ],
     "a": [
      "Denise Rempson",
      "Cesar Fojas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tammy Dragon",
      "Christine Ziegler"
     ],
     "a": [
      "Jess Cox",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Elizabeth Biehl",
      "Jo Marie Holzhammer"
     ],
     "a": [
      "Denise Rempson",
      "Jemma Bucks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeff Kesner",
      "Sal Garfi"
     ],
     "a": [
      "Michael-John Van Rhyn",
      "Cromwell Palomares"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Lawrason",
      "John Cave"
     ],
     "a": [
      "David Fintzy",
      "Stephen Cordaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tammy Dragon",
      "John Cave"
     ],
     "a": [
      "Stella Ott",
      "David Fintzy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cyndee Catalano",
      "Alex Lawrason"
     ],
     "a": [
      "Rachel Baluyot",
      "Michael-John Van Rhyn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Elizabeth Biehl",
      "Toby Athron"
     ],
     "a": [
      "Denise Rempson",
      "Lance Arlaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Ziegler",
      "Ken Carlson"
     ],
     "a": [
      "Jemma Bucks",
      "Cromwell Palomares"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tammy Dragon",
      "Cyndee Catalano"
     ],
     "a": [
      "Karen Gallione",
      "Stella Ott"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jo Marie Holzhammer",
      "Elizabeth Biehl"
     ],
     "a": [
      "Jemma Bucks",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alex Lawrason",
      "Ken Carlson"
     ],
     "a": [
      "Lance Arlaus",
      "Stephen Cordaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "John Cave",
      "Sal Garfi"
     ],
     "a": [
      "Cesar Fojas",
      "David Fintzy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Tammy Dragon",
      "Toby Athron"
     ],
     "a": [
      "Jess Cox",
      "Cromwell Palomares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Christine Ziegler",
      "Sal Garfi"
     ],
     "a": [
      "Stella Ott",
      "Cesar Fojas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jo Marie Holzhammer",
      "Ken Carlson"
     ],
     "a": [
      "Karen Gallione",
      "Michael-John Van Rhyn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cyndee Catalano",
      "Jeff Kesner"
     ],
     "a": [
      "Denise Rempson",
      "Lance Arlaus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Tammy Dragon",
      "Jo Marie Holzhammer"
     ],
     "a": [
      "Karen Gallione",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christine Ziegler",
      "Cyndee Catalano"
     ],
     "a": [
      "Jemma Bucks",
      "Jess Cox"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "John Cave",
      "Jeff Kesner"
     ],
     "a": [
      "Cesar Fojas",
      "Stephen Cordaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Lawrason",
      "Toby Athron"
     ],
     "a": [
      "David Fintzy",
      "Lance Arlaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Elizabeth Biehl",
      "Sal Garfi"
     ],
     "a": [
      "Jemma Bucks",
      "Cromwell Palomares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Christine Ziegler",
      "Toby Athron"
     ],
     "a": [
      "Stella Ott",
      "Lance Arlaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tammy Dragon",
      "Jeff Kesner"
     ],
     "a": [
      "Jess Cox",
      "Michael-John Van Rhyn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jo Marie Holzhammer",
      "Ken Carlson"
     ],
     "a": [
      "Denise Rempson",
      "Cesar Fojas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christine Ziegler",
      "Jo Marie Holzhammer"
     ],
     "a": [
      "Denise Rempson",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elizabeth Biehl",
      "Cyndee Catalano"
     ],
     "a": [
      "Jess Cox",
      "Karen Gallione"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Lawrason",
      "Ken Carlson"
     ],
     "a": [
      "Michael-John Van Rhyn",
      "Cromwell Palomares"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "John Cave",
      "Toby Athron"
     ],
     "a": [
      "David Fintzy",
      "Stephen Cordaro"
     ]
    }
   ],
   "subs": [
    "David Fintzy"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "PickleRage Union County",
   "away": "One Love",
   "time": "2026-09-13T13:00:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 549,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Raquel Murphy",
      "Andy Knight"
     ],
     "a": [
      "Randi Yezer",
      "Rob Mendez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mara Levy",
      "Michael Barry"
     ],
     "a": [
      "Karen Kelly",
      "Michael Cisar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lisa Kulback",
      "Kevin Larkin"
     ],
     "a": [
      "Katy Taylor",
      "Michael Stout"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christine Anderson",
      "Dan Yang"
     ],
     "a": [
      "Ericka Lyn Mayer",
      "David Tisony"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christine Anderson",
      "Lisa Kulback"
     ],
     "a": [
      "Randi Yezer",
      "Karen Kelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mara Levy",
      "Linda Bozzo"
     ],
     "a": [
      "Jenn Guerrini",
      "Heidi Lipton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Louis Sapirman",
      "Kevin Larkin"
     ],
     "a": [
      "Michael Mastando",
      "Michael Cisar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Dan Yang",
      "Michael Barry"
     ],
     "a": [
      "Jim Sintic",
      "Rob Mendez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christine Anderson",
      "Louis Sapirman"
     ],
     "a": [
      "Katy Taylor",
      "Michael Cisar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Raquel Murphy",
      "Andy Knight"
     ],
     "a": [
      "Heidi Lipton",
      "Rob Mendez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Linda Bozzo",
      "Michael Barry"
     ],
     "a": [
      "Ericka Lyn Mayer",
      "Jim Sintic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mara Levy",
      "Dan Yang"
     ],
     "a": [
      "Jenn Guerrini",
      "Michael Mastando"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Mara Levy",
      "Linda Bozzo"
     ],
     "a": [
      "Randi Yezer",
      "Katy Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lisa Kulback",
      "Raquel Murphy"
     ],
     "a": [
      "Ericka Lyn Mayer",
      "Karen Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kevin Larkin",
      "Michael Barry"
     ],
     "a": [
      "Michael Stout",
      "Jim Sintic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dan Yang",
      "Andy Knight"
     ],
     "a": [
      "David Tisony",
      "Rob Mendez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Raquel Murphy",
      "Louis Sapirman"
     ],
     "a": [
      "Randi Yezer",
      "Michael Cisar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Linda Bozzo",
      "Dan Yang"
     ],
     "a": [
      "Jenn Guerrini",
      "David Tisony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Christine Anderson",
      "Kevin Larkin"
     ],
     "a": [
      "Heidi Lipton",
      "Michael Mastando"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lisa Kulback",
      "Michael Barry"
     ],
     "a": [
      "Karen Kelly",
      "Rob Mendez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Raquel Murphy",
      "Lisa Kulback"
     ],
     "a": [
      "Jenn Guerrini",
      "Heidi Lipton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christine Anderson",
      "Mara Levy"
     ],
     "a": [
      "Katy Taylor",
      "Ericka Lyn Mayer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Louis Sapirman",
      "Kevin Larkin"
     ],
     "a": [
      "Michael Stout",
      "Michael Cisar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dan Yang",
      "Andy Knight"
     ],
     "a": [
      "Michael Mastando",
      "Jim Sintic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Raquel Murphy",
      "Louis Sapirman"
     ],
     "a": [
      "Ericka Lyn Mayer",
      "Michael Cisar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Linda Bozzo",
      "Dan Yang"
     ],
     "a": [
      "Karen Kelly",
      "Michael Stout"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Anderson",
      "Andy Knight"
     ],
     "a": [
      "Katy Taylor",
      "David Tisony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mara Levy",
      "Michael Barry"
     ],
     "a": [
      "Jenn Guerrini",
      "Jim Sintic"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Anderson",
      "Raquel Murphy"
     ],
     "a": [
      "Jenn Guerrini",
      "Randi Yezer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Linda Bozzo",
      "Lisa Kulback"
     ],
     "a": [
      "Heidi Lipton",
      "Karen Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Andy Knight",
      "Kevin Larkin"
     ],
     "a": [
      "Michael Stout",
      "David Tisony"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dan Yang",
      "Michael Barry"
     ],
     "a": [
      "Michael Mastando",
      "Rob Mendez"
     ]
    }
   ],
   "subs": [
    "Jenn Guerrini",
    "Rob Mendez"
   ]
  },
  {
   "result": null,
   "week": 4,
   "home": "Allstar Pickler",
   "away": "Montville Rocks",
   "time": "2026-09-13T14:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Zhihong Ge",
      "John Zhong"
     ],
     "a": [
      "Xiaohong Fang",
      "Wallace Lee"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ronnie Yin",
      "Jieping Wang"
     ],
     "a": [
      "Ronnie Kostak",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Savita Nandal",
      "Brandon Fulford"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Valerie Ablaza",
      "Anthony Wands"
     ],
     "a": [
      "Shuming Zhu",
      "Jack Tran"
     ]
    },
    {
     "t": "female",
     "h": [
      "Savita Nandal",
      "Ronnie Yin"
     ],
     "a": [
      "Xiaohong Fang",
      "Vilayvanh Sysounthone"
     ]
    },
    {
     "t": "female",
     "h": [
      "Zhihong Ge",
      "Valerie Ablaza"
     ],
     "a": [
      "Shuming Zhu",
      "Joanne Rim"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Wands",
      "Jieping Wang"
     ],
     "a": [
      "Jack Tran",
      "Jianfeng Wang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Brandon Fulford",
      "Xiaodong Huang"
     ],
     "a": [
      "Jhon Cifuentes",
      "Wallace Lee"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Savita Nandal",
      "Brandon Fulford"
     ],
     "a": [
      "Xiaohong Fang",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Valerie Ablaza",
      "John Zhong"
     ],
     "a": [
      "Shuming Zhu",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ronnie Yin",
      "Jieping Wang"
     ],
     "a": [
      "Joanne Rim",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Zhihong Ge",
      "Anthony Wands"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Wallace Lee"
     ]
    },
    {
     "t": "female",
     "h": [
      "Zhihong Ge",
      "Ying Lin"
     ],
     "a": [
      "Xiaohong Fang",
      "Ronnie Kostak"
     ]
    },
    {
     "t": "female",
     "h": [
      "Savita Nandal",
      "Valerie Ablaza"
     ],
     "a": [
      "Shuming Zhu",
      "Bing Leng"
     ]
    },
    {
     "t": "male",
     "h": [
      "Brandon Fulford",
      "John Zhong"
     ],
     "a": [
      "Wallace Lee",
      "Jianfeng Wang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jieping Wang",
      "Xiaodong Huang"
     ],
     "a": [
      "Jack Tran",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ying Lin",
      "John Zhong"
     ],
     "a": [
      "Shuming Zhu",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Zhihong Ge",
      "Xiaodong Huang"
     ],
     "a": [
      "Joanne Rim",
      "Wallace Lee"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Savita Nandal",
      "Jieping Wang"
     ],
     "a": [
      "Xiaohong Fang",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ronnie Yin",
      "Brandon Fulford"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Jianfeng Wang"
     ]
    },
    {
     "t": "female",
     "h": [
      "Savita Nandal",
      "Valerie Ablaza"
     ],
     "a": [
      "Shuming Zhu",
      "Bing Leng"
     ]
    },
    {
     "t": "female",
     "h": [
      "Ying Lin",
      "Zhihong Ge"
     ],
     "a": [
      "Ronnie Kostak",
      "Xiaohong Fang"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Zhong",
      "Xiaodong Huang"
     ],
     "a": [
      "Jhon Cifuentes",
      "Jianfeng Wang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Brandon Fulford",
      "Jieping Wang"
     ],
     "a": [
      "Jack Tran",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Zhihong Ge",
      "Xiaodong Huang"
     ],
     "a": [
      "Xiaohong Fang",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ronnie Yin",
      "Brandon Fulford"
     ],
     "a": [
      "Joanne Rim",
      "Jianfeng Wang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Savita Nandal",
      "John Zhong"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Valerie Ablaza",
      "Anthony Wands"
     ],
     "a": [
      "Shuming Zhu",
      "Wallace Lee"
     ]
    },
    {
     "t": "female",
     "h": [
      "Valerie Ablaza",
      "Ying Lin"
     ],
     "a": [
      "Ronnie Kostak",
      "Shuming Zhu"
     ]
    },
    {
     "t": "female",
     "h": [
      "Savita Nandal",
      "Ronnie Yin"
     ],
     "a": [
      "Xiaohong Fang",
      "Bing Leng"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Wands",
      "Jieping Wang"
     ],
     "a": [
      "Yan Wang",
      "Wallace Lee"
     ]
    },
    {
     "t": "male",
     "h": [
      "Brandon Fulford",
      "Xiaodong Huang"
     ],
     "a": [
      "Jack Tran",
      "Jhon Cifuentes"
     ]
    }
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickleball Palace",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-13T14:00:00",
   "complete": true,
   "provisional": true,
   "homePoints": 581,
   "awayPoints": 366,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amanda Gardiner",
      "Robert Lee"
     ],
     "a": [
      "Allison Xiao",
      "Neil Kussick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ana Bautista",
      "Robert Mroz"
     ],
     "a": [
      "Wenbin Dang",
      "Kenneth Margolin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kate Clow",
      "Robert Goldenberg"
     ],
     "a": [
      "Lucy Sha",
      "Vlad Radomsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Debbie Tovitz",
      "Mark Lederman"
     ],
     "a": [
      "Jean Xie",
      "Charles Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jane Chang",
      "Ana Bautista"
     ],
     "a": [
      "Lucy Sha",
      "Allison Xiao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Debbie Tovitz",
      "Kate Clow"
     ],
     "a": [
      "Jean Xie",
      "Wenbin Dang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robert Goldenberg",
      "Mark Lederman"
     ],
     "a": [
      "Kenneth Margolin",
      "Vlad Radomsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Matt Stone",
      "Robert Mroz"
     ],
     "a": [
      "Neil Kussick",
      "Charles Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Clow",
      "Matt Stone"
     ],
     "a": [
      "Wenbin Dang",
      "Neil Kussick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ana Bautista",
      "Robert Goldenberg"
     ],
     "a": [
      "Jean Xie",
      "Kenneth Margolin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jane Chang",
      "Robert Lee"
     ],
     "a": [
      "Lucy Sha",
      "Vlad Radomsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Amanda Gardiner",
      "Mark Lederman"
     ],
     "a": [
      "Allison Xiao",
      "Charles Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ana Bautista",
      "Debbie Tovitz"
     ],
     "a": [
      "Lucy Sha",
      "Allison Xiao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jane Chang",
      "Amanda Gardiner"
     ],
     "a": [
      "Jean Xie",
      "Wenbin Dang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robert Goldenberg",
      "Robert Lee"
     ],
     "a": [
      "Kenneth Margolin",
      "Vlad Radomsky"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Mark Lederman",
      "Robert Mroz"
     ],
     "a": [
      "Neil Kussick",
      "Charles Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jane Chang",
      "Matt Stone"
     ],
     "a": [
      "Allison Xiao",
      "Neil Kussick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Debbie Tovitz",
      "Robert Goldenberg"
     ],
     "a": [
      "Lucy Sha",
      "Kenneth Margolin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Amanda Gardiner",
      "Robert Mroz"
     ],
     "a": [
      "Jean Xie",
      "Vlad Radomsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Clow",
      "Robert Lee"
     ],
     "a": [
      "Wenbin Dang",
      "Charles Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Ana Bautista",
      "Amanda Gardiner"
     ],
     "a": [
      "Lucy Sha",
      "Wenbin Dang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Clow",
      "Debbie Tovitz"
     ],
     "a": [
      "Jean Xie",
      "Allison Xiao"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Mark Lederman",
      "Robert Goldenberg"
     ],
     "a": [
      "Kenneth Margolin",
      "Neil Kussick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Matt Stone",
      "Robert Lee"
     ],
     "a": [
      "Vlad Radomsky",
      "Charles Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jane Chang",
      "Matt Stone"
     ],
     "a": [
      "Lucy Sha",
      "Kenneth Margolin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Debbie Tovitz",
      "Robert Lee"
     ],
     "a": [
      "Allison Xiao",
      "Vlad Radomsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Amanda Gardiner",
      "Robert Mroz"
     ],
     "a": [
      "Wenbin Dang",
      "Neil Kussick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Ana Bautista",
      "Mark Lederman"
     ],
     "a": [
      "Jean Xie",
      "Charles Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jane Chang",
      "Amanda Gardiner"
     ],
     "a": [
      "Lucy Sha",
      "Wenbin Dang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Clow",
      "Ana Bautista"
     ],
     "a": [
      "Allison Xiao",
      "Jean Xie"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Matt Stone",
      "Robert Mroz"
     ],
     "a": [
      "Vlad Radomsky",
      "Neil Kussick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Robert Lee",
      "Mark Lederman"
     ],
     "a": [
      "Kenneth Margolin",
      "Charles Li"
     ]
    }
   ],
   "subs": [
    "Allison Xiao",
    "Neil Kussick",
    "Wenbin Dang",
    "Kenneth Margolin",
    "Lucy Sha",
    "Vlad Radomsky",
    "Jean Xie",
    "Charles Li"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "PCKLRAMA",
   "away": "Picklr Fair Lawn",
   "time": "2026-09-13T14:00:00",
   "complete": true,
   "homePoints": 649,
   "awayPoints": 587,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gladys Garzone",
      "Joe Monello"
     ],
     "a": [
      "Nicole Nelson",
      "Garry Wright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Colicchio",
      "Scott Mckay"
     ],
     "a": [
      "Maria Fanfa",
      "Roni Douber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "May Syso",
      "Scott Kindzierski"
     ],
     "a": [
      "Cheryl Klein",
      "Zhaohui Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Ramadas",
      "Steve Roth"
     ],
     "a": [
      "Renee Froeberg",
      "Robert Bernstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Gladys Garzone",
      "Claudia Calle"
     ],
     "a": [
      "Maricel Pineda",
      "Renee Froeberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Susan Colicchio",
      "Sarah Ramadas"
     ],
     "a": [
      "Jennie Diamond",
      "Nicole Nelson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alam Mohammad",
      "Steve Roth"
     ],
     "a": [
      "Garry Wright",
      "Robert Bernstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Scott Mckay",
      "Joe Monello"
     ],
     "a": [
      "Derek Manwaring",
      "Stu Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gladys Garzone",
      "Alam Mohammad"
     ],
     "a": [
      "Cheryl Klein",
      "Robert Bernstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Colicchio",
      "Joe Monello"
     ],
     "a": [
      "Maricel Pineda",
      "Derek Manwaring"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Claudia Calle",
      "Scott Mckay"
     ],
     "a": [
      "Jennie Diamond",
      "Roni Douber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "May Syso",
      "Scott Kindzierski"
     ],
     "a": [
      "Maria Fanfa",
      "Zhaohui Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarah Ramadas",
      "May Syso"
     ],
     "a": [
      "Maria Fanfa",
      "Renee Froeberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gladys Garzone",
      "Claudia Calle"
     ],
     "a": [
      "Cheryl Klein",
      "Nicole Nelson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alam Mohammad",
      "Scott Kindzierski"
     ],
     "a": [
      "Roni Douber",
      "Stu Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Steve Roth",
      "Joe Monello"
     ],
     "a": [
      "Garry Wright",
      "Zhaohui Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Colicchio",
      "Scott Mckay"
     ],
     "a": [
      "Renee Froeberg",
      "Garry Wright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Claudia Calle",
      "Steve Roth"
     ],
     "a": [
      "Maria Fanfa",
      "Roni Douber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sarah Ramadas",
      "Joe Monello"
     ],
     "a": [
      "Jennie Diamond",
      "Stu Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "May Syso",
      "Alam Mohammad"
     ],
     "a": [
      "Maricel Pineda",
      "Derek Manwaring"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gladys Garzone",
      "Susan Colicchio"
     ],
     "a": [
      "Cheryl Klein",
      "Nicole Nelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "May Syso",
      "Claudia Calle"
     ],
     "a": [
      "Jennie Diamond",
      "Maricel Pineda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Scott Mckay",
      "Joe Monello"
     ],
     "a": [
      "Robert Bernstein",
      "Derek Manwaring"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Scott Kindzierski",
      "Alam Mohammad"
     ],
     "a": [
      "Stu Schwartz",
      "Zhaohui Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Gladys Garzone",
      "Joe Monello"
     ],
     "a": [
      "Renee Froeberg",
      "Robert Bernstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Susan Colicchio",
      "Scott Kindzierski"
     ],
     "a": [
      "Jennie Diamond",
      "Roni Douber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "May Syso",
      "Alam Mohammad"
     ],
     "a": [
      "Cheryl Klein",
      "Zhaohui Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Ramadas",
      "Steve Roth"
     ],
     "a": [
      "Nicole Nelson",
      "Garry Wright"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gladys Garzone",
      "Susan Colicchio"
     ],
     "a": [
      "Renee Froeberg",
      "Maria Fanfa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarah Ramadas",
      "Claudia Calle"
     ],
     "a": [
      "Maricel Pineda",
      "Cheryl Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joe Monello",
      "Alam Mohammad"
     ],
     "a": [
      "Stu Schwartz",
      "Derek Manwaring"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Scott Kindzierski",
      "Steve Roth"
     ],
     "a": [
      "Garry Wright",
      "Robert Bernstein"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Stelton Sports",
   "time": "2026-09-13T14:00:00",
   "complete": true,
   "provisional": true,
   "homePoints": 682,
   "awayPoints": 615,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Janet Bellaran",
      "Nate Brochin"
     ],
     "a": [
      "Jennifer Qian",
      "Guihua Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kirsten Hinds",
      "Shawn Maloney"
     ],
     "a": [
      "Sushma Rayapudi",
      "Karan Bhagat"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jody Scarano",
      "Robert Toledo"
     ],
     "a": [
      "Yolanda Li",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Clark",
      "Mike Lasko"
     ],
     "a": [
      "Geordielyn Alviola",
      "Peter Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kirsten Hinds",
      "Doreen Arleth"
     ],
     "a": [
      "Jennifer Qian",
      "Geordielyn Alviola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jody Scarano",
      "Janet Bellaran"
     ],
     "a": [
      "Sushma Rayapudi",
      "Saritha Kondra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nate Brochin",
      "Robert Toledo"
     ],
     "a": [
      "Craig Girvan",
      "Shah Faisal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Shawn Maloney",
      "John Laspina"
     ],
     "a": [
      "Ben Xie",
      "Guihua Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Doreen Arleth",
      "Stephen Arleth"
     ],
     "a": [
      "Saritha Kondra",
      "Karan Bhagat"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Janet Bellaran",
      "John Laspina"
     ],
     "a": [
      "Yolanda Li",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kirsten Hinds",
      "Shawn Maloney"
     ],
     "a": [
      "Jennifer Qian",
      "Guihua Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Clark",
      "Robert Toledo"
     ],
     "a": [
      "Sushma Rayapudi",
      "Shah Faisal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kirsten Hinds",
      "Doreen Arleth"
     ],
     "a": [
      "Yolanda Li",
      "Sushma Rayapudi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Christine Clark",
      "Jody Scarano"
     ],
     "a": [
      "Geordielyn Alviola",
      "Saritha Kondra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nate Brochin",
      "Shawn Maloney"
     ],
     "a": [
      "Craig Girvan",
      "Karan Bhagat"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stephen Arleth",
      "Mike Lasko"
     ],
     "a": [
      "Peter Shen",
      "Guihua Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Christine Clark",
      "Robert Toledo"
     ],
     "a": [
      "Yolanda Li",
      "Craig Girvan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Janet Bellaran",
      "John Laspina"
     ],
     "a": [
      "Jennifer Qian",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jody Scarano",
      "Stephen Arleth"
     ],
     "a": [
      "Geordielyn Alviola",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Doreen Arleth",
      "Mike Lasko"
     ],
     "a": [
      "Saritha Kondra",
      "Karan Bhagat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Janet Bellaran",
      "Jody Scarano"
     ],
     "a": [
      "Jennifer Qian",
      "Geordielyn Alviola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Doreen Arleth",
      "Christine Clark"
     ],
     "a": [
      "Sushma Rayapudi",
      "Yolanda Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Robert Toledo",
      "Shawn Maloney"
     ],
     "a": [
      "Craig Girvan",
      "Shah Faisal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Nate Brochin",
      "Stephen Arleth"
     ],
     "a": [
      "Ben Xie",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janet Bellaran",
      "Nate Brochin"
     ],
     "a": [
      "Sushma Rayapudi",
      "Karan Bhagat"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jody Scarano",
      "Robert Toledo"
     ],
     "a": [
      "Saritha Kondra",
      "Shah Faisal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Doreen Arleth",
      "Stephen Arleth"
     ],
     "a": [
      "Yolanda Li",
      "Guihua Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kirsten Hinds",
      "John Laspina"
     ],
     "a": [
      "Geordielyn Alviola",
      "Craig Girvan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jody Scarano",
      "Christine Clark"
     ],
     "a": [
      "Saritha Kondra",
      "Geordielyn Alviola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Janet Bellaran",
      "Kirsten Hinds"
     ],
     "a": [
      "Sushma Rayapudi",
      "Jennifer Qian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Robert Toledo",
      "Nate Brochin"
     ],
     "a": [
      "Shah Faisal",
      "Karan Bhagat"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shawn Maloney",
      "John Laspina"
     ],
     "a": [
      "Ben Xie",
      "Peter Shen"
     ]
    }
   ],
   "subs": [
    "Jennifer Qian",
    "Guihua Zhang"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "ACE Moorestown",
   "away": "Picklr Newark",
   "time": "2026-09-13T14:00:00",
   "complete": true,
   "homePoints": 659,
   "awayPoints": 517,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cathy Fiebs",
      "Bob Sochor"
     ],
     "a": [
      "Sara Renzulli",
      "Timothy Hopkins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Enid Lum",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Howard Cetel"
     ],
     "a": [
      "Gwen Leach",
      "Cristian Castro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Linda Goss",
      "Lawrence Padersky"
     ],
     "a": [
      "Sandy Hopkins",
      "Mark Pleasanton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Barb Mulckhuyse",
      "Dawn Gordon"
     ],
     "a": [
      "Joy Perry",
      "Gwen Leach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cathy Fiebs",
      "Kelley Batejan"
     ],
     "a": [
      "Nancy Culley",
      "Sandy Hopkins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pete Dunn",
      "Jason Fingerman"
     ],
     "a": [
      "Cristian Castro",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Bob Sochor",
      "Ira Krassan"
     ],
     "a": [
      "Mark Pleasanton",
      "Julian Stamper"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cathy Fiebs",
      "Bob Sochor"
     ],
     "a": [
      "Sara Renzulli",
      "Timothy Hopkins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Linda Goss",
      "Lawrence Padersky"
     ],
     "a": [
      "Joy Perry",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Enid Lum",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Barb Mulckhuyse",
      "Howard Cetel"
     ],
     "a": [
      "Nancy Culley",
      "Julian Stamper"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Dawn Gordon"
     ],
     "a": [
      "Sara Renzulli",
      "Sandy Hopkins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Linda Goss",
      "Kelley Batejan"
     ],
     "a": [
      "Enid Lum",
      "Gwen Leach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Bob Sochor",
      "Ira Krassan"
     ],
     "a": [
      "Cristian Castro",
      "Mark Pleasanton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jason Fingerman",
      "Pete Dunn"
     ],
     "a": [
      "Thomas Lum",
      "Timothy Hopkins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Barb Mulckhuyse",
      "Lawrence Padersky"
     ],
     "a": [
      "Joy Perry",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Linda Goss",
      "Howard Cetel"
     ],
     "a": [
      "Nancy Culley",
      "Julian Stamper"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Pete Dunn"
     ],
     "a": [
      "Gwen Leach",
      "Cristian Castro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cathy Fiebs",
      "Ira Krassan"
     ],
     "a": [
      "Sandy Hopkins",
      "Mark Pleasanton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Linda Goss",
      "Kelley Batejan"
     ],
     "a": [
      "Joy Perry",
      "Sara Renzulli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cathy Fiebs",
      "Dawn Gordon"
     ],
     "a": [
      "Nancy Culley",
      "Enid Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bob Sochor",
      "Jason Fingerman"
     ],
     "a": [
      "Thomas Lum",
      "Julian Stamper"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ira Krassan",
      "Howard Cetel"
     ],
     "a": [
      "Timothy Hopkins",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelley Batejan",
      "Howard Cetel"
     ],
     "a": [
      "Sara Renzulli",
      "Cristian Castro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Dawn Gordon",
      "Pete Dunn"
     ],
     "a": [
      "Gwen Leach",
      "Mark Pleasanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ],
     "a": [
      "Enid Lum",
      "Timothy Hopkins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Barb Mulckhuyse",
      "Bob Sochor"
     ],
     "a": [
      "Sandy Hopkins",
      "Thomas Lum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Cathy Fiebs",
      "Kelley Batejan"
     ],
     "a": [
      "Joy Perry",
      "Gwen Leach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Linda Goss"
     ],
     "a": [
      "Nancy Culley",
      "Sandy Hopkins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Lawrence Padersky",
      "Howard Cetel"
     ],
     "a": [
      "Cristian Castro",
      "Vincent Lamarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jason Fingerman",
      "Bob Sochor"
     ],
     "a": [
      "Mark Pleasanton",
      "Julian Stamper"
     ]
    }
   ],
   "subs": [
    "Cristian Castro"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Dill Dinkers Lansdale",
   "away": "Picklr Newtown",
   "time": "2026-09-13T14:00:00",
   "complete": true,
   "homePoints": 587,
   "awayPoints": 603,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kristie Capitanelli",
      "Bart Allgeier"
     ],
     "a": [
      "Jill Mundenar",
      "Eric Shipon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Julie Chiappa",
      "Robert Alexander"
     ],
     "a": [
      "Dan He",
      "George Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Christina Pietrak",
      "Andre Goldstein"
     ],
     "a": [
      "Qiuwei Feng",
      "Michael Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joan Glass",
      "Neil Vijayendran"
     ],
     "a": [
      "Krystal Johnson",
      "Larry Minsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jennifer Jones",
      "Kristie Capitanelli"
     ],
     "a": [
      "Krystal Johnson",
      "Carolyn Coonan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joan Glass",
      "Rayleen Romeo"
     ],
     "a": [
      "Dan He",
      "Lisa Yuskevich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Robert Alexander",
      "Charles Buzad"
     ],
     "a": [
      "Michael Johnson",
      "George Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Marvin Gordon",
      "Bart Allgeier"
     ],
     "a": [
      "Larry Minsky",
      "Leonard Procaccino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christina Pietrak",
      "Charles Buzad"
     ],
     "a": [
      "Qiuwei Feng",
      "George Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joan Glass",
      "Andre Goldstein"
     ],
     "a": [
      "Krystal Johnson",
      "Michael Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rayleen Romeo",
      "Bart Allgeier"
     ],
     "a": [
      "Jill Mundenar",
      "Eric Shipon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jennifer Jones",
      "Neil Vijayendran"
     ],
     "a": [
      "Lisa Yuskevich",
      "Larry Minsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Julie Chiappa",
      "Christina Pietrak"
     ],
     "a": [
      "Krystal Johnson",
      "Qiuwei Feng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kristie Capitanelli",
      "Jennifer Jones"
     ],
     "a": [
      "Carolyn Coonan",
      "Lisa Yuskevich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Charles Buzad",
      "Neil Vijayendran"
     ],
     "a": [
      "Larry Minsky",
      "Michael Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Robert Alexander",
      "Marvin Gordon"
     ],
     "a": [
      "George Chen",
      "Leonard Procaccino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jennifer Jones",
      "Robert Alexander"
     ],
     "a": [
      "Qiuwei Feng",
      "Michael Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Julie Chiappa",
      "Neil Vijayendran"
     ],
     "a": [
      "Dan He",
      "George Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kristie Capitanelli",
      "Charles Buzad"
     ],
     "a": [
      "Carolyn Coonan",
      "Eric Shipon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joan Glass",
      "Andre Goldstein"
     ],
     "a": [
      "Jill Mundenar",
      "Larry Minsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Julie Chiappa",
      "Christina Pietrak"
     ],
     "a": [
      "Qiuwei Feng",
      "Dan He"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joan Glass",
      "Rayleen Romeo"
     ],
     "a": [
      "Krystal Johnson",
      "Jill Mundenar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bart Allgeier",
      "Andre Goldstein"
     ],
     "a": [
      "Michael Johnson",
      "George Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marvin Gordon",
      "Neil Vijayendran"
     ],
     "a": [
      "Eric Shipon",
      "Leonard Procaccino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kristie Capitanelli",
      "Charles Buzad"
     ],
     "a": [
      "Dan He",
      "Leonard Procaccino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christina Pietrak",
      "Bart Allgeier"
     ],
     "a": [
      "Krystal Johnson",
      "George Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Julie Chiappa",
      "Robert Alexander"
     ],
     "a": [
      "Lisa Yuskevich",
      "Eric Shipon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Jennifer Jones",
      "Neil Vijayendran"
     ],
     "a": [
      "Carolyn Coonan",
      "Larry Minsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Jones",
      "Rayleen Romeo"
     ],
     "a": [
      "Lisa Yuskevich",
      "Jill Mundenar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joan Glass",
      "Kristie Capitanelli"
     ],
     "a": [
      "Qiuwei Feng",
      "Carolyn Coonan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Marvin Gordon",
      "Andre Goldstein"
     ],
     "a": [
      "Michael Johnson",
      "Leonard Procaccino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Charles Buzad",
      "Bart Allgeier"
     ],
     "a": [
      "Eric Shipon",
      "Larry Minsky"
     ]
    }
   ],
   "subs": [
    "Joan Glass",
    "Bart Allgeier",
    "Larry Minsky"
   ]
  },
  {
   "result": null,
   "week": 4,
   "home": "Monroe",
   "away": "Premiere",
   "time": "2026-10-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Premiere",
   "away": "One Love",
   "time": "2026-09-20T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "PickleRage Union County",
   "time": "2026-09-20T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Picklr Newark",
   "away": "Flemington",
   "time": "2026-09-20T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "APC Garden State",
   "away": "Picklr Newtown",
   "time": "2026-09-20T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Dill Dinkers Lansdale",
   "away": "ACE Moorestown",
   "time": "2026-09-20T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Monroe",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-20T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Montville Rocks",
   "away": "Montville Dragons",
   "time": "2026-09-20T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Allstar Pickler",
   "away": "PCKLRAMA",
   "time": "2026-09-20T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-20T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Stelton Sports",
   "away": "Dill Dinkers Lansdale",
   "time": "2026-09-26T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere",
   "away": "ACE Moorestown",
   "time": "2026-09-26T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Watchung",
   "away": "Picklr Fair Lawn",
   "time": "2026-09-26T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Allstar Pickler",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Home Court",
   "away": "Flemington",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "APC Garden State",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "One Love",
   "away": "Picklr Newtown",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Palace",
   "away": "Montville Rocks",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Monroe",
   "away": "Picklr Newark",
   "time": "2026-09-26T17:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "PickleRage Union County",
   "away": "PCKLRAMA",
   "time": "2026-09-26T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Watchung",
   "away": "Monroe",
   "time": "2026-09-27T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Home Court",
   "away": "Allstar Pickler",
   "time": "2026-09-27T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-27T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Palace",
   "away": "PCKLRAMA",
   "time": "2026-09-27T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Stelton Sports",
   "away": "Montville Dragons",
   "time": "2026-09-27T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "ACE Moorestown",
   "away": "APC Garden State",
   "time": "2026-09-27T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Palace",
   "away": "PickleRage Union County",
   "time": "2026-10-04T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Flemington",
   "away": "Dill Dinkers Lansdale",
   "time": "2026-10-04T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Picklr Newtown",
   "away": "ACE Moorestown",
   "time": "2026-10-04T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Premiere",
   "away": "Stelton Sports",
   "time": "2026-10-04T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Home Court",
   "time": "2026-10-04T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "APC Garden State",
   "away": "Picklr Newark",
   "time": "2026-10-04T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Montville Rocks",
   "away": "Picklr Fair Lawn",
   "time": "2026-10-04T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Monroe",
   "away": "One Love",
   "time": "2026-10-04T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Allstar Pickler",
   "away": "Montville Dragons",
   "time": "2026-10-04T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Picklr Newark",
   "away": "Picklr Newtown",
   "time": "2026-10-11T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Premiere",
   "away": "Montville Rocks",
   "time": "2026-10-11T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Home Court",
   "away": "Pickleball Palace",
   "time": "2026-10-11T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "PickleRage Union County",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-10-11T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "ACE Moorestown",
   "away": "Flemington",
   "time": "2026-10-11T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Stelton Sports",
   "away": "Monroe",
   "time": "2026-10-11T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "PCKLRAMA",
   "away": "Montville Dragons",
   "time": "2026-10-11T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "One Love",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-10-11T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Dill Dinkers Lansdale",
   "away": "APC Garden State",
   "time": "2026-10-11T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Picklr Fair Lawn",
   "away": "Allstar Pickler",
   "time": "2026-10-11T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Montville Dragons",
   "away": "Home Court",
   "time": "2026-10-18T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "APC Garden State",
   "away": "Flemington",
   "time": "2026-10-18T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Picklr Fair Lawn",
   "time": "2026-10-18T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "PCKLRAMA",
   "away": "Premiere",
   "time": "2026-10-18T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Monroe",
   "away": "PickleRage Union County",
   "time": "2026-10-18T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "One Love",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-18T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Montville Rocks",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-10-18T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Montville Dragons",
   "away": "Pickleball Palace",
   "time": "2026-10-24T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Newtown",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Newark",
   "away": "One Love",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Dill Dinkers Lansdale",
   "away": "Monroe",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "ACE Moorestown",
   "away": "Stelton Sports",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Allstar Pickler",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Fair Lawn",
   "away": "PickleRage Union County",
   "time": "2026-10-24T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "PCKLRAMA",
   "away": "Home Court",
   "time": "2026-10-24T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Montville Rocks",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-24T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "APC Garden State",
   "away": "Premiere",
   "time": "2026-10-24T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Watchung",
   "away": "PickleRage Union County",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Newtown",
   "away": "Dill Dinkers Lansdale",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington",
   "away": "APC Garden State",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Newark",
   "away": "ACE Moorestown",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Montville Dragons",
   "away": "PCKLRAMA",
   "time": "2026-10-25T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "One Love",
   "time": "2026-10-25T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Palace",
   "away": "Home Court",
   "time": "2026-10-25T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Monroe",
   "away": "Stelton Sports",
   "time": "2026-10-25T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Allstar Pickler",
   "away": "Picklr Fair Lawn",
   "time": "2026-10-25T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Picklr Newark",
   "away": "APC Garden State",
   "time": "2026-11-01T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Premiere",
   "away": "Monroe",
   "time": "2026-11-01T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Home Court",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-11-01T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Palace",
   "time": "2026-11-01T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Picklr Fair Lawn",
   "away": "PCKLRAMA",
   "time": "2026-11-01T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Dill Dinkers Lansdale",
   "away": "Flemington",
   "time": "2026-11-01T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Stelton Sports",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-11-01T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "ACE Moorestown",
   "away": "Picklr Newtown",
   "time": "2026-11-01T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Montville Rocks",
   "away": "Allstar Pickler",
   "time": "2026-11-01T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Flemington",
   "away": "ACE Moorestown",
   "time": "2026-11-08T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Watchung",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-08T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Picklr Newtown",
   "away": "Picklr Newark",
   "time": "2026-11-08T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "APC Garden State",
   "away": "Dill Dinkers Lansdale",
   "time": "2026-11-08T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "PickleRage Union County",
   "away": "Home Court",
   "time": "2026-11-08T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "One Love",
   "away": "Stelton Sports",
   "time": "2026-11-08T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Premiere",
   "time": "2026-11-08T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Montville Dragons",
   "away": "Picklr Fair Lawn",
   "time": "2026-11-08T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "PCKLRAMA",
   "away": "Montville Rocks",
   "time": "2026-11-08T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Picklr Newark",
   "away": "Dill Dinkers Lansdale",
   "time": "2026-11-15T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Flemington",
   "away": "Picklr Newtown",
   "time": "2026-11-15T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Home Court",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-15T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "APC Garden State",
   "away": "ACE Moorestown",
   "time": "2026-11-15T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "PickleRage Union County",
   "away": "Pickleball Palace",
   "time": "2026-11-15T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Stelton Sports",
   "away": "Premiere",
   "time": "2026-11-15T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Picklr Fair Lawn",
   "away": "Montville Rocks",
   "time": "2026-11-15T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Montville Dragons",
   "away": "Allstar Pickler",
   "time": "2026-11-15T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "One Love",
   "away": "Monroe",
   "time": "2026-11-15T14:00:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Kathleen Leong": "0722c430-ccb3-4155-8270-9147ff0fc831",
  "Judy Brougham": "076baef0-3766-4902-a737-578d6262a38a",
  "Thomas Musso": "08f0cbb6-992f-4643-85bd-bf004ddb0734",
  "Andrea Smith": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
  "Marcos Medroso": "152f95d8-c8ac-457d-a469-d5270c47cc47",
  "Mutya Medroso": "164f58e8-9cc1-4246-97c1-dacef41e07ab",
  "Pete Certo": "3572118b-4e01-4e64-96a4-a7cc80869425",
  "James Lo": "41ea6231-c154-403e-a0e5-7e6b6d4cbbd2",
  "Isabella Chernin": "48fa1082-3f31-4311-b71e-5da89fdb52d0",
  "Jim Soos": "4d7cc986-290c-4041-b722-e12b08536900",
  "Maggie O'Kane": "4ff0fd64-934d-4c1d-a1be-c939e89da83c",
  "Zhu Liu": "5bfd80e0-fc4e-474c-9d01-50552c569bfe",
  "Denise Werner": "5e28fa79-7607-4115-94c9-7ffbccbf4f9b",
  "Lisa Blaber": "6202ab1c-d9ee-46e0-8020-c19f73658e3c",
  "Christine Algozo": "67afa47c-0543-4eb0-a949-fd28b870d20c",
  "John Zhong": "6bfd212d-c7b4-4eff-ae3c-5e9424080282",
  "Jennifer Liss": "6da2022e-df04-471b-b640-65324174a368",
  "Mari Kehoe": "82c17d41-9e6e-467c-9de4-2a5dd88b5c73",
  "Anthony Wands": "8390eb1e-788b-473e-bb3c-aaa1594c76b2",
  "Beth Pardilla": "8c91a1ca-2f64-4dc4-a33c-44e8c6f08eee",
  "Shawn Nisse": "948031fd-d3bf-4cdf-8b58-ebd9b0a07246",
  "Andrew Koshefsky": "b41df00c-281f-46dc-bf9f-129f29524744",
  "Dennis Higman": "b8fabebb-fd0f-49a8-929a-defbac098e43",
  "Anita Maloney": "bcf83697-834f-4631-bfff-66f79a4bf841",
  "Steve Marcotrigiano": "bd901770-69ee-4f41-8cf6-cc82f9fc6043",
  "Jieping Wang": "c9088878-9755-4e32-abed-4a4e5a42f9a8",
  "Zhihong Ge": "d1f3735c-669b-4a40-b4ca-b40ea1da4cb7",
  "Sheree Ross": "e3a5083d-9c55-4482-be06-647b8e86c504",
  "Jane Wang": "e4623ed7-3392-4f18-a65e-ed2922aed69d",
  "Xiaodong Huang": "e47288e9-8726-47f2-9264-556daa0d5db7",
  "Yaoye Li": "eaa86091-5879-48bf-8bd1-b0689f887818",
  "Gail Welkes": "ef42e106-1059-4976-98c3-daccda942f56",
  "Jack Feinstein": "f0ffbdf3-45d6-4f9a-8173-5f5054eadcfd",
  "Tao Zhu": "fce9f902-9a8a-4ee0-8faa-eee3226b7b91",
  "Jennifer Applebee": "fee5a8cb-84fc-4d3f-abbe-99d91c2dc9a3"
 },
 "meta": {
  "matchesPlayed": 27,
  "provisionalMatches": 3,
  "weeks": "1-4",
  "totalPlayers": 360,
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
   }
  ],
  "divisionSlug": "c43b8608",
  "hasPlayoffs": false,
  "typicalDay": "Sundays",
  "detailFile": "compiled/detail-c43b8608.js",
  "clubName": "",
  "divisionName": "3.5 (50+)",
  "leagueType": "travel",
  "seasonSlug": "2026-fall",
  "seasonLabel": "Fall 2026",
  "seasonStatus": "current",
  "podCount": 1,
  "podNames": [
   "Northeast / Northwest / Southeast / Southwest"
  ],
  "podSource": "api",
  "reportedPods": [
   "Northeast",
   "Northwest",
   "Southeast",
   "Southwest"
  ],
  "podMismatch": {
   "crossPodMatchups": 36,
   "totalMatchups": 126,
   "reported": {
    "Northeast": [
     "Home Court",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Watchung",
     "Pickleball Palace",
     "PickleRage Union County"
    ],
    "Southeast": [
     "Monroe",
     "One Love",
     "Pickleball Kingdom Tinton Falls",
     "Premiere",
     "Stelton Sports"
    ],
    "Southwest": [
     "ACE Moorestown",
     "APC Garden State",
     "Dill Dinkers Lansdale",
     "Flemington",
     "Picklr Newark",
     "Picklr Newtown"
    ],
    "Northwest": [
     "Allstar Pickler",
     "Montville Dragons",
     "Montville Rocks",
     "PCKLRAMA",
     "Picklr Fair Lawn"
    ]
   },
   "schedule": {
    "Pod 1": [
     "ACE Moorestown",
     "Allstar Pickler",
     "APC Garden State",
     "Dill Dinkers Lansdale",
     "Flemington",
     "Home Court",
     "Monroe",
     "Montville Dragons",
     "Montville Rocks",
     "One Love",
     "PCKLRAMA",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Tinton Falls",
     "Pickleball Kingdom Watchung",
     "Pickleball Palace",
     "PickleRage Union County",
     "Picklr Fair Lawn",
     "Picklr Newark",
     "Picklr Newtown",
     "Premiere",
     "Stelton Sports"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-09-14T02:31:01.244Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["c43b8608"] = DATA;
})();
