(function () {
  const DATA = {
 "players": [
  {
   "name": "Julia Hollman",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 12,
   "losses": 0,
   "pointsWon": 252,
   "totalPointsAgainst": 163,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 89,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 5,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 2.7,
   "strengthOfOpponents": 1,
   "playerId": "ab244dd7-ca2a-4e68-befd-b60c8fbad96f"
  },
  {
   "name": "Filomena Rega",
   "gender": "Female",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 92,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 76,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 2.8,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -2.7,
   "playerId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "name": "Cheryl Brodsky",
   "gender": "Female",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 9,
   "losses": 0,
   "pointsWon": 189,
   "totalPointsAgainst": 129,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 60,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 1.9,
   "ratingGames": 9,
   "confidence": 58,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -1.2,
   "playerId": "aca67666-3f71-498b-9ef7-c24729d89030"
  },
  {
   "name": "Johanna Kreilick",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 57,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 27,
   "ppg": 21,
   "leagueRank": 20,
   "rating": 2.6,
   "ratingGames": 4,
   "confidence": 45,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.8,
   "playerId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
  },
  {
   "name": "Sonu Munshi",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 85,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "ba9daa05-9d48-4c05-bd86-cf7314cf243e",
   "winPct": 100,
   "diff": 20,
   "ppg": 21,
   "leagueRank": 14,
   "rating": 2.1,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Janice Aliberti",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 12,
   "losses": 1,
   "pointsWon": 271,
   "totalPointsAgainst": 221,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 92.3,
   "diff": 50,
   "ppg": 20.8,
   "leagueRank": 6,
   "rating": 2.2,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.3,
   "playerId": "078bc1a3-2897-4dc0-ae17-26b349108047"
  },
  {
   "name": "Brittany Messing",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 246,
   "totalPointsAgainst": 163,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 91.7,
   "diff": 83,
   "ppg": 20.5,
   "leagueRank": 4,
   "rating": 2.9,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.1,
   "playerId": "233811c2-7a6f-48f1-beb9-35c581eaf9d5"
  },
  {
   "name": "Susan Goeckeler",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 243,
   "totalPointsAgainst": 179,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "winPct": 91.7,
   "diff": 64,
   "ppg": 20.3,
   "leagueRank": 5,
   "rating": 3.3,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Sara Hylan",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 10,
   "losses": 1,
   "pointsWon": 226,
   "totalPointsAgainst": 165,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 90.9,
   "diff": 61,
   "ppg": 20.5,
   "leagueRank": 7,
   "rating": 1.5,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.4,
   "playerId": "153fa815-ce9c-4c36-8fce-c525887f05b1"
  },
  {
   "name": "Christine Ziegler",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 160,
   "totalPointsAgainst": 137,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 23,
   "ppg": 20,
   "leagueRank": 15,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.1,
   "playerId": "63946930-2dca-489e-8158-028722c045f5"
  },
  {
   "name": "Shanasia Bagnol",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "d183236f-85a1-41a3-a26a-2f9bc04c3b07",
   "winPct": 85.7,
   "diff": 23,
   "ppg": 20.7,
   "leagueRank": 17,
   "rating": 2.8,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Tammy Dragon",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 265,
   "totalPointsAgainst": 203,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 84.6,
   "diff": 62,
   "ppg": 20.4,
   "leagueRank": 8,
   "rating": 3.2,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.8,
   "playerId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f"
  },
  {
   "name": "Jeannine Calhoun",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 246,
   "totalPointsAgainst": 192,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 54,
   "ppg": 20.5,
   "leagueRank": 9,
   "rating": 2.6,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.6,
   "playerId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "name": "Marian Kingston",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 108,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 16,
   "ppg": 20.7,
   "leagueRank": 12,
   "rating": 2.4,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.2,
   "playerId": "0e5a80ef-a9db-4089-841d-f3083efff2a6"
  },
  {
   "name": "Gina Faccone",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 9,
   "losses": 2,
   "pointsWon": 213,
   "totalPointsAgainst": 161,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 81.8,
   "diff": 52,
   "ppg": 19.4,
   "leagueRank": 16,
   "rating": 1.3,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.7,
   "playerId": "9278b092-c3e6-4c05-a09a-998cbde410be"
  },
  {
   "name": "Sulyn Kulick",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 12,
   "losses": 3,
   "pointsWon": 306,
   "totalPointsAgainst": 216,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 80,
   "diff": 90,
   "ppg": 20.4,
   "leagueRank": 10,
   "rating": 2,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.2,
   "playerId": "d5bb6605-5ea8-42e6-8c85-03402664956d"
  },
  {
   "name": "Debi Mcdonald",
   "gender": "Female",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 203,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 62,
   "ppg": 20.3,
   "leagueRank": 11,
   "rating": 2,
   "ratingGames": 10,
   "confidence": 59,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1,
   "playerId": "9d83f1a4-547c-43e9-85b3-cb5fa8391bff"
  },
  {
   "name": "Rachel Baluyot",
   "gender": "Female",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 79,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 24,
   "ppg": 20.6,
   "leagueRank": 41,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1,
   "playerId": "5e265a90-558b-4564-acd8-f358bab162a9"
  },
  {
   "name": "Toni Demaio",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 200,
   "totalPointsAgainst": 179,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 21,
   "ppg": 20,
   "leagueRank": 18,
   "rating": 1.7,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "db4adc99-5a82-4911-90f5-3624fda60ee3"
  },
  {
   "name": "Debbie Pall",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
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
   "leagueRank": 38,
   "rating": 0.9,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.4,
   "playerId": "4fa43958-6eb0-4949-a48a-6f719f6b973f"
  },
  {
   "name": "Deborah Muschio",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 92,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 11,
   "ppg": 20.6,
   "leagueRank": 44,
   "rating": 1.5,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7,
   "playerId": "cc2a9e08-b163-4553-856f-c20895cb9930"
  },
  {
   "name": "Vera Wong",
   "gender": "Female",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 95,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 8,
   "ppg": 20.6,
   "leagueRank": 52,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "09ff18df-a4f9-4af7-808b-d8ceca5d1c57"
  },
  {
   "name": "Virginie Boutin",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 14,
   "losses": 4,
   "pointsWon": 365,
   "totalPointsAgainst": 266,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 77.8,
   "diff": 99,
   "ppg": 20.3,
   "leagueRank": 13,
   "rating": 2.6,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1,
   "playerId": "a5bd8b40-0fdc-4a92-b452-d0fe555d2abf"
  },
  {
   "name": "Marianne Rosato",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 239,
   "totalPointsAgainst": 202,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 37,
   "ppg": 19.9,
   "leagueRank": 21,
   "rating": 1.6,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.2,
   "playerId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3"
  },
  {
   "name": "Amy Wondrack",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 230,
   "totalPointsAgainst": 199,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 31,
   "ppg": 19.2,
   "leagueRank": 22,
   "rating": 2.3,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.8,
   "playerId": "fa858fcb-0eed-4ab9-94ea-efec4132e791"
  },
  {
   "name": "Ly Kim",
   "gender": "Female",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 11,
   "losses": 4,
   "pointsWon": 300,
   "totalPointsAgainst": 256,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 73.3,
   "diff": 44,
   "ppg": 20,
   "leagueRank": 24,
   "rating": 1.2,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "749aa09d-25ff-4bd4-b7f1-e1253413a3e6"
  },
  {
   "name": "Meghan Klein",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 433,
   "totalPointsAgainst": 354,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 72.7,
   "diff": 79,
   "ppg": 19.7,
   "leagueRank": 23,
   "rating": 2.6,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909"
  },
  {
   "name": "Vilayvanh Sysounthone",
   "gender": "Female",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 13,
   "losses": 5,
   "pointsWon": 359,
   "totalPointsAgainst": 282,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 72.2,
   "diff": 77,
   "ppg": 19.9,
   "leagueRank": 19,
   "rating": 3.8,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "adcdbc67-29b2-4411-9d74-919d1c7abf0b"
  },
  {
   "name": "Sushma Rayapudi",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 269,
   "totalPointsAgainst": 224,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 45,
   "ppg": 19.2,
   "leagueRank": 26,
   "rating": 2.4,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0,
   "playerId": "ea658d89-a540-405d-9819-9c98a0484f60"
  },
  {
   "name": "Esha Gajjar",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 12,
   "losses": 5,
   "pointsWon": 334,
   "totalPointsAgainst": 267,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 70.6,
   "diff": 67,
   "ppg": 19.6,
   "leagueRank": 25,
   "rating": 2.2,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.5,
   "playerId": "947cf956-08c0-44d2-9bae-2458fd24c9d0"
  },
  {
   "name": "Kathy Baker",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 228,
   "totalPointsAgainst": 157,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 71,
   "ppg": 19,
   "leagueRank": 29,
   "rating": 2.1,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.5,
   "playerId": "e84d93a0-c527-4a44-a896-ccc20d0ac474"
  },
  {
   "name": "Maureen Bruno",
   "gender": "Female",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 16,
   "losses": 8,
   "pointsWon": 461,
   "totalPointsAgainst": 391,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 70,
   "ppg": 19.2,
   "leagueRank": 33,
   "rating": 1.2,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.8,
   "playerId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "name": "Paula Cushing",
   "gender": "Female",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 16,
   "losses": 8,
   "pointsWon": 462,
   "totalPointsAgainst": 394,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 68,
   "ppg": 19.3,
   "leagueRank": 34,
   "rating": 1.3,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "name": "Angie Ratkowitz",
   "gender": "Female",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 301,
   "totalPointsAgainst": 240,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 61,
   "ppg": 20.1,
   "leagueRank": 28,
   "rating": 1.1,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.4,
   "playerId": "2912d9de-09e7-4b21-b93e-ae84f2f8fe93"
  },
  {
   "name": "Chiti Joshi",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 357,
   "totalPointsAgainst": 304,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 53,
   "ppg": 19.8,
   "leagueRank": 32,
   "rating": 0,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1,
   "playerId": "86d3ef72-f614-40a4-994d-836a87d21e9e"
  },
  {
   "name": "Pam Mcdannell",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 237,
   "totalPointsAgainst": 189,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 48,
   "ppg": 19.8,
   "leagueRank": 31,
   "rating": 1,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -1.6,
   "playerId": "da7ce23d-f915-469e-9ec1-d820d55b3b22"
  },
  {
   "name": "Jessica Wormeck",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 16,
   "losses": 8,
   "pointsWon": 463,
   "totalPointsAgainst": 416,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 47,
   "ppg": 19.3,
   "leagueRank": 37,
   "rating": 1,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "name": "Jerzie-Ann Coppola",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 81,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 41,
   "ppg": 20.3,
   "leagueRank": 27,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -3.2,
   "playerId": "d324c1b4-fb13-47d4-b380-f8427448308a"
  },
  {
   "name": "Ani Stone",
   "gender": "Female",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 114,
   "totalPointsAgainst": 91,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 23,
   "ppg": 19,
   "leagueRank": 43,
   "rating": 2.7,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.8,
   "playerId": "13b0bf6b-9978-4ec3-bfa2-2ea173d47e56"
  },
  {
   "name": "Jill Collins",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 100,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "c6f2f563-b1ea-41c3-bb5a-745e45f78cc6",
   "winPct": 66.7,
   "diff": 16,
   "ppg": 19.3,
   "leagueRank": 42,
   "rating": 2.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Annette Marsh",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 106,
   "totalPointsAgainst": 116,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": -10,
   "ppg": 17.7,
   "leagueRank": 67,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.6,
   "playerId": "5db7fb50-d1a1-4c3f-8d61-34ca1947300c"
  },
  {
   "name": "Joanne Rim",
   "gender": "Female",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 12,
   "losses": 7,
   "pointsWon": 371,
   "totalPointsAgainst": 320,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 63.2,
   "diff": 51,
   "ppg": 19.5,
   "leagueRank": 35,
   "rating": 1.7,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.6,
   "playerId": "a6f156e3-7dfa-42ec-8c69-a73c25e55833"
  },
  {
   "name": "Kelly Bowers",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 454,
   "totalPointsAgainst": 411,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 62.5,
   "diff": 43,
   "ppg": 18.9,
   "leagueRank": 47,
   "rating": 1,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "25c2cf33-ede0-4610-85d6-e08cddc05484"
  },
  {
   "name": "Linda Seemann",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 311,
   "totalPointsAgainst": 268,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 43,
   "ppg": 19.4,
   "leagueRank": 40,
   "rating": 0.5,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -1.3,
   "playerId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c"
  },
  {
   "name": "Monika Torbus",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 160,
   "totalPointsAgainst": 132,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 28,
   "ppg": 20,
   "leagueRank": 30,
   "rating": 1.8,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "name": "Suzanne Bauer",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 157,
   "totalPointsAgainst": 140,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "82c36821-3add-4e98-90d1-486d4626372a",
   "winPct": 62.5,
   "diff": 17,
   "ppg": 19.6,
   "leagueRank": 51,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.4
  },
  {
   "name": "Rani Borusu",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 246,
   "totalPointsAgainst": 204,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 61.5,
   "diff": 42,
   "ppg": 18.9,
   "leagueRank": 36,
   "rating": 2.6,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "6a8bbc75-9016-4f35-95f5-0e681d1e25e4"
  },
  {
   "name": "Lynda Levan",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 256,
   "totalPointsAgainst": 235,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": 21,
   "ppg": 19.7,
   "leagueRank": 46,
   "rating": 0.8,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.6,
   "playerId": "ca92ce54-a58c-4bf2-a49b-125be4b376ba"
  },
  {
   "name": "Jess Cox",
   "gender": "Female",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 11,
   "losses": 7,
   "pointsWon": 344,
   "totalPointsAgainst": 311,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 61.1,
   "diff": 33,
   "ppg": 19.1,
   "leagueRank": 48,
   "rating": 1.3,
   "ratingGames": 18,
   "confidence": 74,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.6,
   "playerId": "e8a46252-99c1-405e-857c-d52d9550717a"
  },
  {
   "name": "Janine Thompson",
   "gender": "Female",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 290,
   "totalPointsAgainst": 264,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 60,
   "diff": 26,
   "ppg": 19.3,
   "leagueRank": 49,
   "rating": 1.4,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.8,
   "playerId": "e9c2ebf6-88d5-485d-be0f-8c71488231ae"
  },
  {
   "name": "Maureen Dazzo",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 288,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 60,
   "diff": 15,
   "ppg": 19.2,
   "leagueRank": 55,
   "rating": 0,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "4b63ffb6-e7b0-4c73-a2d7-529284e5ecf0"
  },
  {
   "name": "Karyn Jarmer",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 198,
   "totalPointsAgainst": 188,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 10,
   "ppg": 19.8,
   "leagueRank": 45,
   "rating": -0.5,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "301def1b-f1d0-410c-aba8-13c15d2e091e"
  },
  {
   "name": "Julie Biondi",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 98,
   "totalPointsAgainst": 90,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 8,
   "ppg": 19.6,
   "leagueRank": 78,
   "rating": 1.1,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "35120cea-4ea8-48aa-aac2-e896e704a043"
  },
  {
   "name": "Amanda Gardiner",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 94,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "5fe0b62e-e4be-4dc3-9f9c-46123a17f754",
   "winPct": 60,
   "diff": 7,
   "ppg": 20.2,
   "leagueRank": 79,
   "rating": 1.5,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Susana Palumbo",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 99,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 2,
   "ppg": 20.2,
   "leagueRank": 85,
   "rating": -0.5,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "fa88f51d-14cc-4f01-ace6-505565019abb"
  },
  {
   "name": "San Yang",
   "gender": "Female",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 87,
   "totalPointsAgainst": 86,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 1,
   "ppg": 17.4,
   "leagueRank": 96,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 1,
   "playerId": "ea172a5a-d930-4f15-af1d-d792c4bd37a8"
  },
  {
   "name": "Tina Cros",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 94,
   "totalPointsAgainst": 96,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -2,
   "ppg": 18.8,
   "leagueRank": 93,
   "rating": 1.2,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.5,
   "playerId": "56a497f1-828c-4bec-ad2f-1ed1add39788"
  },
  {
   "name": "Rachel Levkov",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 230,
   "totalPointsAgainst": 171,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": 59,
   "ppg": 19.2,
   "leagueRank": 39,
   "rating": 1.1,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.1,
   "playerId": "067afbd0-d803-4eb0-b467-3af2930f18af"
  },
  {
   "name": "Marie Walsh Mccarty",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 218,
   "totalPointsAgainst": 190,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": 28,
   "ppg": 18.2,
   "leagueRank": 63,
   "rating": -1.4,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.6,
   "playerId": "f7f80e1e-cebe-432b-9862-1120daaba26e"
  },
  {
   "name": "Marina Volpe",
   "gender": "Female",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 14,
   "losses": 10,
   "pointsWon": 447,
   "totalPointsAgainst": 424,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 23,
   "ppg": 18.6,
   "leagueRank": 65,
   "rating": -0.5,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "cb063892-906f-4769-8815-2a87da5bf426"
  },
  {
   "name": "Holly Ferguson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 141,
   "totalPointsAgainst": 121,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 20,
   "ppg": 20.1,
   "leagueRank": 60,
   "rating": 0.3,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.3,
   "playerId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "name": "Lay Wassana",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 258,
   "totalPointsAgainst": 242,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 16,
   "ppg": 18.4,
   "leagueRank": 61,
   "rating": 1,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "875dfc40-0613-428f-8bb7-0e9f29e7ee78"
  },
  {
   "name": "Theresa Corderi",
   "gender": "Female",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 268,
   "totalPointsAgainst": 253,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 15,
   "ppg": 19.1,
   "leagueRank": 59,
   "rating": 0.6,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.5,
   "playerId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821"
  },
  {
   "name": "Karen Waldon",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 264,
   "totalPointsAgainst": 256,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 57.1,
   "diff": 8,
   "ppg": 18.9,
   "leagueRank": 58,
   "rating": 1.1,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "c9f10502-3413-4189-87c9-d05ec7accae3"
  },
  {
   "name": "Jo Marie Holzhammer",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 300,
   "totalPointsAgainst": 266,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 56.3,
   "diff": 34,
   "ppg": 18.8,
   "leagueRank": 50,
   "rating": 2.8,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.9,
   "playerId": "f4af59de-c7a2-4aa4-a3db-1e3856181ffe"
  },
  {
   "name": "Jackie Coneeny",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 207,
   "totalPointsAgainst": 177,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 54.5,
   "diff": 30,
   "ppg": 18.8,
   "leagueRank": 57,
   "rating": 1.1,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6,
   "playerId": "cee0559f-0285-4e86-9254-128f836efee8"
  },
  {
   "name": "Corinne Palma",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 212,
   "totalPointsAgainst": 199,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 54.5,
   "diff": 13,
   "ppg": 19.3,
   "leagueRank": 54,
   "rating": 1.2,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.9,
   "playerId": "84dfc5ee-8326-4420-8d93-6a7ae1b81e15"
  },
  {
   "name": "Virginia Kenny",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 215,
   "totalPointsAgainst": 206,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 54.5,
   "diff": 9,
   "ppg": 19.5,
   "leagueRank": 53,
   "rating": 1.1,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.8,
   "playerId": "92deb15a-86c4-4f82-8e0e-d95f7bb6cb68"
  },
  {
   "name": "Kathleen Lynch",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 196,
   "totalPointsAgainst": 195,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 54.5,
   "diff": 1,
   "ppg": 17.8,
   "leagueRank": 70,
   "rating": 0.6,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1,
   "playerId": "892b68ae-7d54-456c-82f6-f2514e107d16"
  },
  {
   "name": "Olga Turova",
   "gender": "Female",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 13,
   "losses": 11,
   "pointsWon": 444,
   "totalPointsAgainst": 421,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 54.2,
   "diff": 23,
   "ppg": 18.5,
   "leagueRank": 71,
   "rating": -1.1,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.1,
   "playerId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f"
  },
  {
   "name": "Nancy Cook",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 277,
   "totalPointsAgainst": 280,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 53.3,
   "diff": -3,
   "ppg": 18.5,
   "leagueRank": 76,
   "rating": -1,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "name": "Heather Waters",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 9,
   "losses": 8,
   "pointsWon": 333,
   "totalPointsAgainst": 291,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 52.9,
   "diff": 42,
   "ppg": 19.6,
   "leagueRank": 56,
   "rating": 0.2,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1.2,
   "playerId": "406e8166-48fc-410b-99b2-5cbc3534fee3"
  },
  {
   "name": "Kathleen Nitti",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 222,
   "totalPointsAgainst": 176,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 46,
   "ppg": 18.5,
   "leagueRank": 64,
   "rating": 0.3,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1.1,
   "playerId": "e6d3fe0a-88ab-4a56-8461-fc162ab5d308"
  },
  {
   "name": "Hope Lo",
   "gender": "Female",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 9,
   "losses": 9,
   "pointsWon": 334,
   "totalPointsAgainst": 308,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 26,
   "ppg": 18.6,
   "leagueRank": 69,
   "rating": 0.7,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.7,
   "playerId": "5f062913-9951-481b-8e1d-fee0093e68f2"
  },
  {
   "name": "Caroline Kinlin",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 222,
   "totalPointsAgainst": 201,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 21,
   "ppg": 18.5,
   "leagueRank": 75,
   "rating": -1.1,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.3,
   "playerId": "d5933ee7-ffb8-4b4a-92cd-1a28579372d6"
  },
  {
   "name": "Rachel Mcgowan",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 236,
   "totalPointsAgainst": 217,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 19,
   "ppg": 19.7,
   "leagueRank": 62,
   "rating": 1.4,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "f1291bb6-abec-48c1-9730-68eaeead8426"
  },
  {
   "name": "Kumi Dalton",
   "gender": "Female",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 194,
   "totalPointsAgainst": 176,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 18,
   "ppg": 19.4,
   "leagueRank": 66,
   "rating": 0.2,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.2,
   "playerId": "0b60e384-c0c5-4859-883c-1183e79437e3"
  },
  {
   "name": "Kayla Gipson",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 281,
   "totalPointsAgainst": 266,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": 15,
   "ppg": 17.6,
   "leagueRank": 83,
   "rating": -1,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1,
   "playerId": "cac68244-9c27-49bf-9354-1e9282427426"
  },
  {
   "name": "Jasmine Ho",
   "gender": "Female",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 153,
   "totalPointsAgainst": 154,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": -1,
   "ppg": 19.1,
   "leagueRank": 72,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "681fe702-3295-4dba-98a2-15e8aedc2873"
  },
  {
   "name": "Olga Kim",
   "gender": "Female",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 140,
   "totalPointsAgainst": 146,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -6,
   "ppg": 17.5,
   "leagueRank": 82,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "4f6ef7ac-2fb1-4903-9ebe-29391c3bab81"
  },
  {
   "name": "Kim Allaga",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 102,
   "totalPointsAgainst": 109,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "4986f918-309d-4d39-abde-336bc27ae79d",
   "winPct": 50,
   "diff": -7,
   "ppg": 17,
   "leagueRank": 97,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Beth Pardilla",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 102,
   "totalPointsAgainst": 111,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "8c91a1ca-2f64-4dc4-a33c-44e8c6f08eee",
   "winPct": 50,
   "diff": -9,
   "ppg": 17,
   "leagueRank": 98,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Linda Johns",
   "gender": "Female",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 412,
   "totalPointsAgainst": 426,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -14,
   "ppg": 17.2,
   "leagueRank": 88,
   "rating": -1.8,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.9,
   "playerId": "36cebb3b-4b08-456f-91f6-6fcdf4262e73"
  },
  {
   "name": "Peggy Matzen",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 11,
   "losses": 11,
   "pointsWon": 390,
   "totalPointsAgainst": 412,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -22,
   "ppg": 17.7,
   "leagueRank": 87,
   "rating": -2.1,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "name": "Lori Wild",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 341,
   "totalPointsAgainst": 338,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 47.4,
   "diff": 3,
   "ppg": 17.9,
   "leagueRank": 84,
   "rating": -2,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.9,
   "playerId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "name": "Suzi French",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 8,
   "losses": 9,
   "pointsWon": 325,
   "totalPointsAgainst": 301,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 47.1,
   "diff": 24,
   "ppg": 19.1,
   "leagueRank": 74,
   "rating": -1.3,
   "ratingGames": 17,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.5,
   "playerId": "0f84aab6-2ae2-4a0b-ba2f-cd31c57fa7d7"
  },
  {
   "name": "Jacqueline Ho",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 8,
   "losses": 9,
   "pointsWon": 317,
   "totalPointsAgainst": 304,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 47.1,
   "diff": 13,
   "ppg": 18.6,
   "leagueRank": 80,
   "rating": -0.7,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b"
  },
  {
   "name": "Jacqueline Hillgrube",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 294,
   "totalPointsAgainst": 259,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 7,
   "winPct": 46.7,
   "diff": 35,
   "ppg": 19.6,
   "leagueRank": 68,
   "rating": -0.2,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.4,
   "playerId": "d74868c1-242c-4230-8117-fbbd3c41e250"
  },
  {
   "name": "Holli Lish",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 287,
   "totalPointsAgainst": 254,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 46.7,
   "diff": 33,
   "ppg": 19.1,
   "leagueRank": 73,
   "rating": 0,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.9,
   "playerId": "0d736ba1-d552-490a-a21c-8aa58bec268e"
  },
  {
   "name": "Nikki Nigro",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 244,
   "totalPointsAgainst": 241,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 46.2,
   "diff": 3,
   "ppg": 18.8,
   "leagueRank": 77,
   "rating": 0.2,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "01c2e4d1-3738-4ee6-8878-4a2559ec006a"
  },
  {
   "name": "Donna Facconerusin",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 200,
   "totalPointsAgainst": 194,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 45.5,
   "diff": 6,
   "ppg": 18.2,
   "leagueRank": 86,
   "rating": -1.7,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.4,
   "playerId": "e81f3561-3e91-48aa-8430-f177ad30248b"
  },
  {
   "name": "Marina Berger",
   "gender": "Female",
   "team": "PKLD",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 293,
   "totalPointsAgainst": 316,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 3,
   "playerId": "18052e12-bbc5-4535-b93b-0e11242c27d7",
   "winPct": 43.8,
   "diff": -23,
   "ppg": 18.3,
   "leagueRank": 89,
   "rating": 0.4,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Melissa Mcconnell",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 195,
   "totalPointsAgainst": 196,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -1,
   "ppg": 19.5,
   "leagueRank": 81,
   "rating": 0.2,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "16e36ab6-5591-4a2f-97cf-23be0e69c5ef"
  },
  {
   "name": "Kathleen Rex",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 86,
   "totalPointsAgainst": 94,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -8,
   "ppg": 17.2,
   "leagueRank": 108,
   "rating": -0.1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": -0.3,
   "playerId": "fce6db61-c25e-4d8c-a774-6d32b85c92d8"
  },
  {
   "name": "Donna Finn",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 79,
   "totalPointsAgainst": 88,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -9,
   "ppg": 15.8,
   "leagueRank": 111,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.9,
   "playerId": "beb3bf0b-c34b-4687-a7d4-a66dca81e5b6"
  },
  {
   "name": "Wendi Wolanske",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 185,
   "totalPointsAgainst": 195,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -10,
   "ppg": 18.5,
   "leagueRank": 90,
   "rating": -0.6,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "e4d09d13-0fd5-4686-ac53-f4eb160b2045"
  },
  {
   "name": "Elizabeth Biehl",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 241,
   "totalPointsAgainst": 246,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 38.5,
   "diff": -5,
   "ppg": 18.5,
   "leagueRank": 91,
   "rating": 0.6,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.1,
   "playerId": "a10029d9-c75f-4a33-98cd-6173faa99ddc"
  },
  {
   "name": "Stacey Cohen",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 208,
   "totalPointsAgainst": 256,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 38.5,
   "diff": -48,
   "ppg": 16,
   "leagueRank": 101,
   "rating": 0.5,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -3.4,
   "strengthOfOpponents": 0.5,
   "playerId": "da4d615a-2d9f-4939-be52-1760fb37eb60"
  },
  {
   "name": "Jenna Haas",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 286,
   "totalPointsAgainst": 296,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -10,
   "ppg": 17.9,
   "leagueRank": 92,
   "rating": 0.7,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "b5c2a59a-34f6-4b86-ac00-0a2d46082870"
  },
  {
   "name": "Trena Hahn",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 267,
   "totalPointsAgainst": 294,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -27,
   "ppg": 16.7,
   "leagueRank": 99,
   "rating": -1.3,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "c40f8a3d-21b9-45d0-bbdc-1b1ca6f5a15a"
  },
  {
   "name": "Christine Steigerwalt",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 279,
   "totalPointsAgainst": 308,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 37.5,
   "diff": -29,
   "ppg": 17.4,
   "leagueRank": 95,
   "rating": 0.2,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "33f1ae41-08db-4067-b5f5-f9324faf93f0"
  },
  {
   "name": "Diane Bracco",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 203,
   "totalPointsAgainst": 205,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 36.4,
   "diff": -2,
   "ppg": 18.5,
   "leagueRank": 94,
   "rating": -0.1,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "name": "Mary Marger",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 190,
   "totalPointsAgainst": 217,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 36.4,
   "diff": -27,
   "ppg": 17.3,
   "leagueRank": 100,
   "rating": -0.2,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0,
   "playerId": "4f9985c1-7c99-4816-9ddf-c45dc6dd9d7c"
  },
  {
   "name": "Ghada Abraham",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 175,
   "totalPointsAgainst": 216,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 36.4,
   "diff": -41,
   "ppg": 15.9,
   "leagueRank": 102,
   "rating": -0.6,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.5,
   "playerId": "2ff1b895-1513-4eba-bfb9-3fc61a2d106a"
  },
  {
   "name": "Jean Dalstad",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 245,
   "totalPointsAgainst": 319,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 31.3,
   "diff": -74,
   "ppg": 15.3,
   "leagueRank": 107,
   "rating": -2.2,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "eb91adfb-2dda-4f7d-b4d5-8c2dfc075087"
  },
  {
   "name": "Tanyalak Sawangpak",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 207,
   "totalPointsAgainst": 245,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 30.8,
   "diff": -38,
   "ppg": 15.9,
   "leagueRank": 104,
   "rating": -2.1,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "97f8761c-a825-4f89-9d92-0c8dea9d0065"
  },
  {
   "name": "Jenny Lin",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 113,
   "totalPointsAgainst": 132,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "d45c0c05-5f76-4025-a4e6-8442591e88ab",
   "winPct": 28.6,
   "diff": -19,
   "ppg": 16.1,
   "leagueRank": 115,
   "rating": -2.6,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Darlene Fusco",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 183,
   "totalPointsAgainst": 214,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -31,
   "ppg": 16.6,
   "leagueRank": 103,
   "rating": -1.6,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.3,
   "playerId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4"
  },
  {
   "name": "Susan Hughes",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 168,
   "totalPointsAgainst": 202,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 27.3,
   "diff": -34,
   "ppg": 15.3,
   "leagueRank": 106,
   "rating": -0.9,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0,
   "playerId": "e204f8ea-5c0b-4182-8af0-f372a67c2132"
  },
  {
   "name": "Roe Palermo",
   "gender": "Female",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 119,
   "totalPointsAgainst": 160,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "d86280ad-5733-417d-af40-42a66c14b874",
   "winPct": 25,
   "diff": -41,
   "ppg": 14.9,
   "leagueRank": 109,
   "rating": -1.3,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -2.9,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Suzanne Leon",
   "gender": "Female",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 114,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "d895a1b4-ebbc-4f93-bca7-4e8b01b40635",
   "winPct": 25,
   "diff": -50,
   "ppg": 14.3,
   "leagueRank": 112,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -3,
   "strengthOfOpponents": 1
  },
  {
   "name": "Charlie Trapasso",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 266,
   "totalPointsAgainst": 321,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -55,
   "ppg": 16.6,
   "leagueRank": 105,
   "rating": -1.5,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "2a233243-51cc-4a54-aaab-1297a41ce67a"
  },
  {
   "name": "Karen Veninger",
   "gender": "Female",
   "team": "Flemington Blue",
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
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -16,
   "ppg": 17.4,
   "leagueRank": 119,
   "rating": -0.9,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.1,
   "playerId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "name": "Diana Macri",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 60,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -43,
   "ppg": 12,
   "leagueRank": 131,
   "rating": -1.3,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": -4.2,
   "strengthOfOpponents": 1,
   "playerId": "288693fd-92c5-429d-8f1f-96206a0eb640"
  },
  {
   "name": "Maureen Murphy",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 3,
   "losses": 13,
   "pointsWon": 247,
   "totalPointsAgainst": 316,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 13,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 18.8,
   "diff": -69,
   "ppg": 15.4,
   "leagueRank": 113,
   "rating": -2,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "294d9682-5231-4d0b-ab16-cf9f8bfb99bc"
  },
  {
   "name": "Grace Brennan",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 184,
   "totalPointsAgainst": 224,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 18.2,
   "diff": -40,
   "ppg": 16.7,
   "leagueRank": 110,
   "rating": -2,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.9,
   "playerId": "15778391-96b7-4888-9d08-d63b96e104ca"
  },
  {
   "name": "Paula De Nisc",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 81,
   "totalPointsAgainst": 121,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -40,
   "ppg": 13.5,
   "leagueRank": 122,
   "rating": -2.4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -3.5,
   "strengthOfOpponents": -0.4,
   "playerId": "069b6990-9fae-4294-bf0a-2e428a9f763e"
  },
  {
   "name": "Lynne Silber",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 181,
   "totalPointsAgainst": 236,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "58252bb7-5aa1-4dbd-85ba-e7ccbc56d64c",
   "winPct": 16.7,
   "diff": -55,
   "ppg": 15.1,
   "leagueRank": 116,
   "rating": -2.1,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Linda Iacono",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 101,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 14.3,
   "diff": -44,
   "ppg": 14.4,
   "leagueRank": 120,
   "rating": -1.3,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -3,
   "strengthOfOpponents": 0.6,
   "playerId": "de5f989a-61bd-45ff-8be9-1168a4ec65e7"
  },
  {
   "name": "Lenore David",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 89,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 14.3,
   "diff": -56,
   "ppg": 12.7,
   "leagueRank": 125,
   "rating": -2.7,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -3.6,
   "strengthOfOpponents": 0.1,
   "playerId": "c5c674c6-e1c9-4f4b-96bf-873e84931042"
  },
  {
   "name": "Eileen Clark",
   "gender": "Female",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 199,
   "totalPointsAgainst": 284,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "2abe95e2-0e73-49b6-aca8-689041f98b94",
   "winPct": 14.3,
   "diff": -85,
   "ppg": 14.2,
   "leagueRank": 114,
   "rating": -0.4,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -3,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Denise Stevens",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 2,
   "losses": 14,
   "pointsWon": 235,
   "totalPointsAgainst": 328,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -93,
   "ppg": 14.7,
   "leagueRank": 117,
   "rating": -2.6,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.4,
   "playerId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "name": "Sandy Hess",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 146,
   "totalPointsAgainst": 208,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 10,
   "diff": -62,
   "ppg": 14.6,
   "leagueRank": 118,
   "rating": -2.5,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.4,
   "playerId": "bec84964-d6ad-4c96-8abb-2f204bd1e64b"
  },
  {
   "name": "Lynn Hauth",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 118,
   "totalPointsAgainst": 204,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 10,
   "diff": -86,
   "ppg": 11.8,
   "leagueRank": 124,
   "rating": -3.7,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.2,
   "playerId": "fc6e0ba7-6a7d-4303-89a7-0d56a6905e11"
  },
  {
   "name": "Nancy Ciappina",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 148,
   "totalPointsAgainst": 292,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 13,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 7.1,
   "diff": -144,
   "ppg": 10.6,
   "leagueRank": 126,
   "rating": -3.9,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -4.3,
   "strengthOfOpponents": 0.5,
   "playerId": "02318afc-9bde-4df3-a7b3-7f1d1da3186c"
  },
  {
   "name": "Eileen Moore",
   "gender": "Female",
   "team": "Flemington Blue",
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
   "leagueRank": 152,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "13baa9f0-6b36-49e8-b085-c8933cb044b2"
  },
  {
   "name": "Jeanmarie Farkouh",
   "gender": "Female",
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
   "leagueRank": 144,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "24c2ba9d-4af9-41c8-9a2c-ad9631349481"
  },
  {
   "name": "Mandy Collins",
   "gender": "Female",
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
   "leagueRank": 140,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2a59237c-117d-426c-b266-1b968c1a56c0"
  },
  {
   "name": "Theresa Harris",
   "gender": "Female",
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
   "leagueRank": 145,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "38944e1a-d33f-4b2f-8d9c-41a0fdd273cd"
  },
  {
   "name": "Darragh Odonnell",
   "gender": "Female",
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
   "leagueRank": 154,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3e72d2ad-b218-4f3e-b362-4286543ac449"
  },
  {
   "name": "Sheila Curran",
   "gender": "Female",
   "team": "Flemington Green",
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
   "leagueRank": 142,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "name": "Kimberley Levins",
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
   "leagueRank": 148,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c132bfd5-ae12-478d-86bc-e483f85cb26a"
  },
  {
   "name": "Randee Schneeberg-Pomerantz",
   "gender": "Female",
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
   "leagueRank": 157,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e8b48f4f-6d2d-4db7-a4c1-69ff3de72688"
  },
  {
   "name": "Jamie Levin",
   "gender": "Female",
   "team": "Flemington Green",
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
   "leagueRank": 147,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ff2e2bfb-12b9-4b51-abbd-8b868ce0f78e"
  },
  {
   "name": "Kara Chubrik",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 73,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -32,
   "ppg": 14.6,
   "leagueRank": 137,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.9,
   "playerId": "6848f02a-1acc-47f8-8743-3525311031a9"
  },
  {
   "name": "Robin Aiello",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 93,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "45790302-b906-4a8b-8a2d-08fbfaf6cbad",
   "winPct": 0,
   "diff": -33,
   "ppg": 15.5,
   "leagueRank": 129,
   "rating": -3.3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Sherry Sili",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 79,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "e3874889-50a3-472f-aada-20f41ce1bc3f",
   "winPct": 0,
   "diff": -47,
   "ppg": 13.2,
   "leagueRank": 136,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Elizabeth Damico",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 94,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -53,
   "ppg": 13.4,
   "leagueRank": 132,
   "rating": -2.3,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -4.5,
   "strengthOfOpponents": -0.3,
   "playerId": "0b2f3e61-0d02-418c-8f96-b5238748091e"
  },
  {
   "name": "Irene Guile",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 94,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "ee2b1370-05ac-455a-8be6-d2adf00a4f98",
   "winPct": 0,
   "diff": -53,
   "ppg": 13.4,
   "leagueRank": 138,
   "rating": -4.4,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Stacey Nusser",
   "gender": "Female",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 80,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "24f324f0-f821-45ef-8278-4b65de08b7b5",
   "winPct": 0,
   "diff": -67,
   "ppg": 11.4,
   "leagueRank": 139,
   "rating": -3.3,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -3.6,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Nami Huang",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 0,
   "losses": 11,
   "pointsWon": 155,
   "totalPointsAgainst": 231,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 11,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -76,
   "ppg": 14.1,
   "leagueRank": 123,
   "rating": -3.2,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "481c21f0-8481-47e8-9eba-9ab21c167cf4"
  },
  {
   "name": "Christine Pisapia",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 151,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 13,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -122,
   "ppg": 11.6,
   "leagueRank": 127,
   "rating": -3.8,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -4.1,
   "strengthOfOpponents": 0.2,
   "playerId": "3f0fc558-80e9-4e47-8ba7-95968d3c336e"
  },
  {
   "name": "Sally Sitro",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 146,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 13,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -127,
   "ppg": 11.2,
   "leagueRank": 128,
   "rating": -3.7,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -3.9,
   "strengthOfOpponents": 0.5,
   "playerId": "977d5afb-cd69-4327-9e27-4887259d384b"
  },
  {
   "name": "Dawn Dalessio",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 137,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 13,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -136,
   "ppg": 10.5,
   "leagueRank": 130,
   "rating": -4.4,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -3.4,
   "strengthOfOpponents": 0.6,
   "playerId": "aecabaca-f05b-489f-87d6-afacfd32295c"
  },
  {
   "name": "Karen Pisano",
   "gender": "Female",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 0,
   "losses": 21,
   "pointsWon": 221,
   "totalPointsAgainst": 441,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 21,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -220,
   "ppg": 10.5,
   "leagueRank": 133,
   "rating": -5.5,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": -3.4,
   "strengthOfOpponents": 0.2,
   "playerId": "3665068b-4c6d-49b2-9cd4-e3148c984ec7"
  },
  {
   "name": "Sabrina Trunzo Dinkle",
   "gender": "Female",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 21,
   "wins": 0,
   "losses": 21,
   "pointsWon": 220,
   "totalPointsAgainst": 441,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 21,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -221,
   "ppg": 10.5,
   "leagueRank": 135,
   "rating": -6.2,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": 0.3,
   "playerId": "e61fbd7e-0b43-42a1-b2ae-03f4279ca2a1"
  },
  {
   "name": "Denise Bonagura",
   "gender": "Female",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 0,
   "losses": 21,
   "pointsWon": 217,
   "totalPointsAgainst": 441,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 21,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -224,
   "ppg": 10.3,
   "leagueRank": 134,
   "rating": -5.5,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": -3.3,
   "strengthOfOpponents": 0.4,
   "playerId": "a188ab11-2879-4292-95dd-6bdd7858b7b9"
  }
 ],
 "teams": [
  {
   "name": "Flemington Green",
   "w": 2,
   "l": 0,
   "pf": 1271,
   "pa": 1111,
   "gw": 44,
   "gl": 20,
   "diff": 160,
   "gameDiff": 24,
   "power": 1.7,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "West",
   "podName": "East / West",
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
     44,
     20
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Tinton Falls",
   "w": 2,
   "l": 0,
   "pf": 1255,
   "pa": 1185,
   "gw": 39,
   "gl": 25,
   "diff": 70,
   "gameDiff": 14,
   "power": 0.9,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / West",
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
     39,
     25
    ]
   }
  },
  {
   "name": "Montville",
   "w": 2,
   "l": 1,
   "pf": 1914,
   "pa": 1636,
   "gw": 64,
   "gl": 32,
   "diff": 278,
   "gameDiff": 32,
   "power": 1.5,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "West",
   "podName": "East / West",
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
     64,
     32
    ]
   }
  },
  {
   "name": "Flemington Blue",
   "w": 2,
   "l": 1,
   "pf": 1866,
   "pa": 1716,
   "gw": 59,
   "gl": 37,
   "diff": 150,
   "gameDiff": 22,
   "power": 0.6,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "West",
   "podName": "East / West",
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
     59,
     37
    ]
   }
  },
  {
   "name": "PKLD",
   "w": 2,
   "l": 1,
   "pf": 1839,
   "pa": 1702,
   "gw": 56,
   "gl": 40,
   "diff": 137,
   "gameDiff": 16,
   "power": 0,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / West",
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
     56,
     40
    ]
   }
  },
  {
   "name": "Life Time Red Bank",
   "w": 1,
   "l": 1,
   "pf": 1247,
   "pa": 990,
   "gw": 42,
   "gl": 22,
   "diff": 257,
   "gameDiff": 20,
   "power": 0.7,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / West",
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
     42,
     22
    ]
   }
  },
  {
   "name": "Picklr Newtown",
   "w": 1,
   "l": 2,
   "pf": 1909,
   "pa": 1646,
   "gw": 56,
   "gl": 40,
   "diff": 263,
   "gameDiff": 16,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / West",
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
     56,
     40
    ]
   }
  },
  {
   "name": "Pickleball Lehigh Valley",
   "w": 1,
   "l": 2,
   "pf": 1542,
   "pa": 1903,
   "gw": 25,
   "gl": 71,
   "diff": -361,
   "gameDiff": -46,
   "power": -1.4,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "West",
   "podName": "East / West",
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
     25,
     71
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 0,
   "l": 2,
   "pf": 1082,
   "pa": 1190,
   "gw": 24,
   "gl": 40,
   "diff": -108,
   "gameDiff": -16,
   "power": -0.5,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "West",
   "podName": "East / West",
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
     24,
     40
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 0,
   "l": 3,
   "pf": 1172,
   "pa": 2018,
   "gw": 7,
   "gl": 89,
   "diff": -846,
   "gameDiff": -82,
   "power": -3.4,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / West",
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
     7,
     89
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Nancy Cook",
   "b": "Peggy Matzen",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 4,
   "avgExpected": -1.4,
   "aId": "c3649296-108a-4a74-ad2a-e045d2fdee4c",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Kelly Bowers",
   "b": "Jo Marie Holzhammer",
   "team": "Flemington Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 5.7,
   "avgExpected": 1.9,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "f4af59de-c7a2-4aa4-a3db-1e3856181ffe"
  },
  {
   "a": "Karen Waldon",
   "b": "Peggy Matzen",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 1.7,
   "avgExpected": -1.4,
   "aId": "c9f10502-3413-4189-87c9-d05ec7accae3",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Esha Gajjar",
   "b": "Rachel Mcgowan",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 4.3,
   "avgExpected": 1.6,
   "aId": "947cf956-08c0-44d2-9bae-2458fd24c9d0",
   "bId": "f1291bb6-abec-48c1-9730-68eaeead8426"
  },
  {
   "a": "Hope Lo",
   "b": "Vilayvanh Sysounthone",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 4.5,
   "avgExpected": 2,
   "aId": "5f062913-9951-481b-8e1d-fee0093e68f2",
   "bId": "adcdbc67-29b2-4411-9d74-919d1c7abf0b"
  },
  {
   "a": "Debi Mcdonald",
   "b": "Cheryl Brodsky",
   "team": "Montville",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 9,
   "avgExpected": 6.7,
   "aId": "9d83f1a4-547c-43e9-85b3-cb5fa8391bff",
   "bId": "aca67666-3f71-498b-9ef7-c24729d89030"
  },
  {
   "a": "Jacqueline Ho",
   "b": "Esha Gajjar",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 5.3,
   "avgExpected": 3.2,
   "aId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b",
   "bId": "947cf956-08c0-44d2-9bae-2458fd24c9d0"
  },
  {
   "a": "Trena Hahn",
   "b": "Susan Hughes",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 4.3,
   "avgExpected": 2.3,
   "aId": "c40f8a3d-21b9-45d0-bbdc-1b1ca6f5a15a",
   "bId": "e204f8ea-5c0b-4182-8af0-f372a67c2132"
  },
  {
   "a": "Charlie Trapasso",
   "b": "Denise Stevens",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -2.3,
   "avgExpected": -4.1,
   "aId": "2a233243-51cc-4a54-aaab-1297a41ce67a",
   "bId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "a": "Jean Dalstad",
   "b": "Denise Stevens",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -3.3,
   "avgExpected": -5.1,
   "aId": "eb91adfb-2dda-4f7d-b4d5-8c2dfc075087",
   "bId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "a": "Holli Lish",
   "b": "Heather Waters",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2.8,
   "avgExpected": 1.2,
   "aId": "0d736ba1-d552-490a-a21c-8aa58bec268e",
   "bId": "406e8166-48fc-410b-99b2-5cbc3534fee3"
  },
  {
   "a": "Joanne Rim",
   "b": "Vilayvanh Sysounthone",
   "team": "Montville",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.6,
   "avgExpected": 3.3,
   "aId": "a6f156e3-7dfa-42ec-8c69-a73c25e55833",
   "bId": "adcdbc67-29b2-4411-9d74-919d1c7abf0b"
  },
  {
   "a": "Jessica Wormeck",
   "b": "Jo Marie Holzhammer",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.3,
   "avgExpected": 2.7,
   "aId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9",
   "bId": "f4af59de-c7a2-4aa4-a3db-1e3856181ffe"
  },
  {
   "a": "Susan Goeckeler",
   "b": "Julia Hollman",
   "team": "Flemington Green",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 8,
   "avgExpected": 6.5,
   "aId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "bId": "ab244dd7-ca2a-4e68-befd-b60c8fbad96f"
  },
  {
   "a": "Grace Brennan",
   "b": "Diane Bracco",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -3,
   "avgExpected": -4.5,
   "aId": "15778391-96b7-4888-9d08-d63b96e104ca",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Marina Berger",
   "b": "Olga Turova",
   "team": "PKLD",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -1,
   "avgExpected": -2.4,
   "aId": "18052e12-bbc5-4535-b93b-0e11242c27d7",
   "bId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f"
  },
  {
   "a": "Brittany Messing",
   "b": "Gina Faccone",
   "team": "Life Time Red Bank",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 7.7,
   "avgExpected": 6.1,
   "aId": "233811c2-7a6f-48f1-beb9-35c581eaf9d5",
   "bId": "9278b092-c3e6-4c05-a09a-998cbde410be"
  },
  {
   "a": "Marina Volpe",
   "b": "Paula Cushing",
   "team": "PKLD",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.5,
   "avgExpected": 1.5,
   "aId": "cb063892-906f-4769-8815-2a87da5bf426",
   "bId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "a": "Theresa Corderi",
   "b": "Ly Kim",
   "team": "Montville",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.2,
   "avgExpected": 1.2,
   "aId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821",
   "bId": "749aa09d-25ff-4bd4-b7f1-e1253413a3e6"
  },
  {
   "a": "Rani Borusu",
   "b": "Sushma Rayapudi",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 5.3,
   "avgExpected": 4.3,
   "aId": "6a8bbc75-9016-4f35-95f5-0e681d1e25e4",
   "bId": "ea658d89-a540-405d-9819-9c98a0484f60"
  },
  {
   "a": "Darlene Fusco",
   "b": "Christine Steigerwalt",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.5,
   "avgExpected": -0.4,
   "aId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4",
   "bId": "33f1ae41-08db-4067-b5f5-f9324faf93f0"
  },
  {
   "a": "Corinne Palma",
   "b": "Virginia Kenny",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 2.8,
   "avgExpected": 1.9,
   "aId": "84dfc5ee-8326-4420-8d93-6a7ae1b81e15",
   "bId": "92deb15a-86c4-4f82-8e0e-d95f7bb6cb68"
  },
  {
   "a": "Lori Wild",
   "b": "Pam Mcdannell",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 5,
   "avgExpected": 3.8,
   "aId": "b1066a81-7537-4512-939d-5acbf11ef9aa",
   "bId": "da7ce23d-f915-469e-9ec1-d820d55b3b22"
  },
  {
   "a": "Jeannine Calhoun",
   "b": "Julia Hollman",
   "team": "Flemington Green",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 7.3,
   "avgExpected": 6.2,
   "aId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc",
   "bId": "ab244dd7-ca2a-4e68-befd-b60c8fbad96f"
  },
  {
   "a": "Joanne Rim",
   "b": "Jess Cox",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 3.3,
   "avgExpected": 2.4,
   "aId": "a6f156e3-7dfa-42ec-8c69-a73c25e55833",
   "bId": "e8a46252-99c1-405e-857c-d52d9550717a"
  },
  {
   "a": "Chiti Joshi",
   "b": "Virginie Boutin",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 8,
   "avgExpected": 7.3,
   "aId": "86d3ef72-f614-40a4-994d-836a87d21e9e",
   "bId": "a5bd8b40-0fdc-4a92-b452-d0fe555d2abf"
  },
  {
   "a": "Kathleen Nitti",
   "b": "Kathy Baker",
   "team": "Life Time Red Bank",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 3,
   "avgExpected": 2.1,
   "aId": "e6d3fe0a-88ab-4a56-8461-fc162ab5d308",
   "bId": "e84d93a0-c527-4a44-a896-ccc20d0ac474"
  },
  {
   "a": "Maureen Murphy",
   "b": "Susan Hughes",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -3.7,
   "avgExpected": -4.3,
   "aId": "294d9682-5231-4d0b-ab16-cf9f8bfb99bc",
   "bId": "e204f8ea-5c0b-4182-8af0-f372a67c2132"
  },
  {
   "a": "Virginie Boutin",
   "b": "Sulyn Kulick",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 5,
   "avgExpected": 4.5,
   "aId": "a5bd8b40-0fdc-4a92-b452-d0fe555d2abf",
   "bId": "d5bb6605-5ea8-42e6-8c85-03402664956d"
  },
  {
   "a": "Marina Berger",
   "b": "Maureen Bruno",
   "team": "PKLD",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -0.3,
   "avgExpected": -1.1,
   "aId": "18052e12-bbc5-4535-b93b-0e11242c27d7",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "a": "Holli Lish",
   "b": "Chiti Joshi",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.3,
   "avgExpected": 1.7,
   "aId": "0d736ba1-d552-490a-a21c-8aa58bec268e",
   "bId": "86d3ef72-f614-40a4-994d-836a87d21e9e"
  },
  {
   "a": "Angie Ratkowitz",
   "b": "Vilayvanh Sysounthone",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 6,
   "avgExpected": 5.6,
   "aId": "2912d9de-09e7-4b21-b93e-ae84f2f8fe93",
   "bId": "adcdbc67-29b2-4411-9d74-919d1c7abf0b"
  },
  {
   "a": "Olga Turova",
   "b": "Linda Johns",
   "team": "PKLD",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0,
   "avgExpected": -0.4,
   "aId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f",
   "bId": "36cebb3b-4b08-456f-91f6-6fcdf4262e73"
  },
  {
   "a": "Melissa Mcconnell",
   "b": "Virginia Kenny",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.6,
   "aId": "16e36ab6-5591-4a2f-97cf-23be0e69c5ef",
   "bId": "92deb15a-86c4-4f82-8e0e-d95f7bb6cb68"
  },
  {
   "a": "Suzi French",
   "b": "Jacqueline Hillgrube",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 1.6,
   "avgExpected": 1.2,
   "aId": "0f84aab6-2ae2-4a0b-ba2f-cd31c57fa7d7",
   "bId": "d74868c1-242c-4230-8117-fbbd3c41e250"
  },
  {
   "a": "Meghan Klein",
   "b": "Jessica Wormeck",
   "team": "Flemington Blue",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.4,
   "avgExpected": 3.2,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "a": "Meghan Klein",
   "b": "Nancy Cook",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1,
   "avgExpected": 0.8,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "Mary Marger",
   "b": "Jean Dalstad",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -2,
   "avgExpected": -2.1,
   "aId": "4f9985c1-7c99-4816-9ddf-c45dc6dd9d7c",
   "bId": "eb91adfb-2dda-4f7d-b4d5-8c2dfc075087"
  },
  {
   "a": "Maureen Murphy",
   "b": "Jenna Haas",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.7,
   "avgExpected": 0.4,
   "aId": "294d9682-5231-4d0b-ab16-cf9f8bfb99bc",
   "bId": "b5c2a59a-34f6-4b86-ac00-0a2d46082870"
  },
  {
   "a": "Linda Johns",
   "b": "Maureen Bruno",
   "team": "PKLD",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.3,
   "avgExpected": 3.3,
   "aId": "36cebb3b-4b08-456f-91f6-6fcdf4262e73",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "a": "Chiti Joshi",
   "b": "Pam Mcdannell",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 4,
   "avgExpected": 4,
   "aId": "86d3ef72-f614-40a4-994d-836a87d21e9e",
   "bId": "da7ce23d-f915-469e-9ec1-d820d55b3b22"
  },
  {
   "a": "Jacqueline Ho",
   "b": "Pam Mcdannell",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.7,
   "avgExpected": 2.8,
   "aId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b",
   "bId": "da7ce23d-f915-469e-9ec1-d820d55b3b22"
  },
  {
   "a": "Jenna Haas",
   "b": "Jean Dalstad",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -5,
   "avgExpected": -4.7,
   "aId": "b5c2a59a-34f6-4b86-ac00-0a2d46082870",
   "bId": "eb91adfb-2dda-4f7d-b4d5-8c2dfc075087"
  },
  {
   "a": "Marina Volpe",
   "b": "Maureen Bruno",
   "team": "PKLD",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.4,
   "avgExpected": 1.6,
   "aId": "cb063892-906f-4769-8815-2a87da5bf426",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "a": "Kathleen Lynch",
   "b": "Amy Wondrack",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.3,
   "avgExpected": 1.4,
   "aId": "892b68ae-7d54-456c-82f6-f2514e107d16",
   "bId": "fa858fcb-0eed-4ab9-94ea-efec4132e791"
  },
  {
   "a": "Ly Kim",
   "b": "Cheryl Brodsky",
   "team": "Montville",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 5.5,
   "avgExpected": 5.7,
   "aId": "749aa09d-25ff-4bd4-b7f1-e1253413a3e6",
   "bId": "aca67666-3f71-498b-9ef7-c24729d89030"
  },
  {
   "a": "Marina Berger",
   "b": "Paula Cushing",
   "team": "PKLD",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.7,
   "aId": "18052e12-bbc5-4535-b93b-0e11242c27d7",
   "bId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "a": "Meghan Klein",
   "b": "Kelly Bowers",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 4,
   "avgExpected": 4.4,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "25c2cf33-ede0-4610-85d6-e08cddc05484"
  },
  {
   "a": "Kelly Bowers",
   "b": "Maureen Dazzo",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.3,
   "avgExpected": 1.9,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "4b63ffb6-e7b0-4c73-a2d7-529284e5ecf0"
  },
  {
   "a": "Lay Wassana",
   "b": "Sushma Rayapudi",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1,
   "avgExpected": 1.5,
   "aId": "875dfc40-0613-428f-8bb7-0e9f29e7ee78",
   "bId": "ea658d89-a540-405d-9819-9c98a0484f60"
  },
  {
   "a": "Linda Seemann",
   "b": "Kayla Gipson",
   "team": "PKLD",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 1,
   "avgExpected": 1.4,
   "aId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c",
   "bId": "cac68244-9c27-49bf-9354-1e9282427426"
  },
  {
   "a": "Suzi French",
   "b": "Heather Waters",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.2,
   "avgExpected": 2.6,
   "aId": "0f84aab6-2ae2-4a0b-ba2f-cd31c57fa7d7",
   "bId": "406e8166-48fc-410b-99b2-5cbc3534fee3"
  },
  {
   "a": "Angie Ratkowitz",
   "b": "Debi Mcdonald",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 5.5,
   "avgExpected": 5.9,
   "aId": "2912d9de-09e7-4b21-b93e-ae84f2f8fe93",
   "bId": "9d83f1a4-547c-43e9-85b3-cb5fa8391bff"
  },
  {
   "a": "Charlie Trapasso",
   "b": "Christine Steigerwalt",
   "team": "Pickleball Lehigh Valley",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -3.4,
   "avgExpected": -2.9,
   "aId": "2a233243-51cc-4a54-aaab-1297a41ce67a",
   "bId": "33f1ae41-08db-4067-b5f5-f9324faf93f0"
  },
  {
   "a": "Melissa Mcconnell",
   "b": "Karyn Jarmer",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.7,
   "avgExpected": 1.3,
   "aId": "16e36ab6-5591-4a2f-97cf-23be0e69c5ef",
   "bId": "301def1b-f1d0-410c-aba8-13c15d2e091e"
  },
  {
   "a": "Linda Johns",
   "b": "Marina Volpe",
   "team": "PKLD",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -3.2,
   "avgExpected": -2.5,
   "aId": "36cebb3b-4b08-456f-91f6-6fcdf4262e73",
   "bId": "cb063892-906f-4769-8815-2a87da5bf426"
  },
  {
   "a": "Esha Gajjar",
   "b": "Lori Wild",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 2.2,
   "avgExpected": 3,
   "aId": "947cf956-08c0-44d2-9bae-2458fd24c9d0",
   "bId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "a": "Hope Lo",
   "b": "Joanne Rim",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -0.5,
   "avgExpected": 0.3,
   "aId": "5f062913-9951-481b-8e1d-fee0093e68f2",
   "bId": "a6f156e3-7dfa-42ec-8c69-a73c25e55833"
  },
  {
   "a": "Vilayvanh Sysounthone",
   "b": "Janine Thompson",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1,
   "avgExpected": 2.3,
   "aId": "adcdbc67-29b2-4411-9d74-919d1c7abf0b",
   "bId": "e9c2ebf6-88d5-485d-be0f-8c71488231ae"
  },
  {
   "a": "Jessica Wormeck",
   "b": "Karen Waldon",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -2.3,
   "avgExpected": -1.2,
   "aId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9",
   "bId": "c9f10502-3413-4189-87c9-d05ec7accae3"
  },
  {
   "a": "Jacqueline Ho",
   "b": "Lori Wild",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -5.2,
   "avgExpected": -4.2,
   "aId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b",
   "bId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "a": "Charlie Trapasso",
   "b": "Trena Hahn",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.5,
   "aId": "2a233243-51cc-4a54-aaab-1297a41ce67a",
   "bId": "c40f8a3d-21b9-45d0-bbdc-1b1ca6f5a15a"
  },
  {
   "a": "Karen Pisano",
   "b": "Denise Bonagura",
   "team": "Premiere",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -13,
   "avgExpected": -11.9,
   "aId": "3665068b-4c6d-49b2-9cd4-e3148c984ec7",
   "bId": "a188ab11-2879-4292-95dd-6bdd7858b7b9"
  },
  {
   "a": "Corinne Palma",
   "b": "Kathleen Lynch",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2.7,
   "avgExpected": -1.3,
   "aId": "84dfc5ee-8326-4420-8d93-6a7ae1b81e15",
   "bId": "892b68ae-7d54-456c-82f6-f2514e107d16"
  },
  {
   "a": "Linda Johns",
   "b": "Kayla Gipson",
   "team": "PKLD",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -1.7,
   "avgExpected": -0.4,
   "aId": "36cebb3b-4b08-456f-91f6-6fcdf4262e73",
   "bId": "cac68244-9c27-49bf-9354-1e9282427426"
  },
  {
   "a": "Olga Turova",
   "b": "Linda Seemann",
   "team": "PKLD",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -1,
   "avgExpected": 0.6,
   "aId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f",
   "bId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c"
  },
  {
   "a": "Maureen Bruno",
   "b": "Paula Cushing",
   "team": "PKLD",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 2.2,
   "avgExpected": 3.6,
   "aId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7",
   "bId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "a": "Heather Waters",
   "b": "Jacqueline Hillgrube",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -2,
   "avgExpected": -0.1,
   "aId": "406e8166-48fc-410b-99b2-5cbc3534fee3",
   "bId": "d74868c1-242c-4230-8117-fbbd3c41e250"
  },
  {
   "a": "Hope Lo",
   "b": "Jess Cox",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -2,
   "avgExpected": 0.1,
   "aId": "5f062913-9951-481b-8e1d-fee0093e68f2",
   "bId": "e8a46252-99c1-405e-857c-d52d9550717a"
  },
  {
   "a": "Olga Turova",
   "b": "Paula Cushing",
   "team": "PKLD",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 4.7,
   "avgExpected": 6.7,
   "aId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f",
   "bId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "a": "Chiti Joshi",
   "b": "Rachel Mcgowan",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -2.3,
   "avgExpected": -0.2,
   "aId": "86d3ef72-f614-40a4-994d-836a87d21e9e",
   "bId": "f1291bb6-abec-48c1-9730-68eaeead8426"
  },
  {
   "a": "Maureen Murphy",
   "b": "Denise Stevens",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -7.5,
   "avgExpected": -5.7,
   "aId": "294d9682-5231-4d0b-ab16-cf9f8bfb99bc",
   "bId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "a": "Jenna Haas",
   "b": "Trena Hahn",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -4.3,
   "avgExpected": -2.3,
   "aId": "b5c2a59a-34f6-4b86-ac00-0a2d46082870",
   "bId": "c40f8a3d-21b9-45d0-bbdc-1b1ca6f5a15a"
  },
  {
   "a": "Caroline Kinlin",
   "b": "Donna Facconerusin",
   "team": "Life Time Red Bank",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -1.3,
   "avgExpected": 0.8,
   "aId": "d5933ee7-ffb8-4b4a-92cd-1a28579372d6",
   "bId": "e81f3561-3e91-48aa-8430-f177ad30248b"
  },
  {
   "a": "Jackie Coneeny",
   "b": "Caroline Kinlin",
   "team": "Life Time Red Bank",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -1.5,
   "avgExpected": 0.5,
   "aId": "cee0559f-0285-4e86-9254-128f836efee8",
   "bId": "d5933ee7-ffb8-4b4a-92cd-1a28579372d6"
  },
  {
   "a": "Linda Seemann",
   "b": "Marina Volpe",
   "team": "PKLD",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 2.3,
   "avgExpected": 5,
   "aId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c",
   "bId": "cb063892-906f-4769-8815-2a87da5bf426"
  },
  {
   "a": "Nancy Ciappina",
   "b": "Karen Pisano",
   "team": "Premiere",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -13.3,
   "avgExpected": -10.8,
   "aId": "02318afc-9bde-4df3-a7b3-7f1d1da3186c",
   "bId": "3665068b-4c6d-49b2-9cd4-e3148c984ec7"
  },
  {
   "a": "Kelly Bowers",
   "b": "Jessica Wormeck",
   "team": "Flemington Blue",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1.7,
   "avgExpected": 0.7,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "a": "Christine Pisapia",
   "b": "Denise Bonagura",
   "team": "Premiere",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -11,
   "avgExpected": -7.8,
   "aId": "3f0fc558-80e9-4e47-8ba7-95968d3c336e",
   "bId": "a188ab11-2879-4292-95dd-6bdd7858b7b9"
  },
  {
   "a": "Ghada Abraham",
   "b": "Nami Huang",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -8,
   "avgExpected": -4.7,
   "aId": "2ff1b895-1513-4eba-bfb9-3fc61a2d106a",
   "bId": "481c21f0-8481-47e8-9eba-9ab21c167cf4"
  },
  {
   "a": "Gina Faccone",
   "b": "Kathy Baker",
   "team": "Life Time Red Bank",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.4,
   "avgActual": 0.3,
   "avgExpected": 3.6,
   "aId": "9278b092-c3e6-4c05-a09a-998cbde410be",
   "bId": "e84d93a0-c527-4a44-a896-ccc20d0ac474"
  },
  {
   "a": "Lay Wassana",
   "b": "Tanyalak Sawangpak",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -7,
   "avgExpected": -3.2,
   "aId": "875dfc40-0613-428f-8bb7-0e9f29e7ee78",
   "bId": "97f8761c-a825-4f89-9d92-0c8dea9d0065"
  },
  {
   "a": "Meghan Klein",
   "b": "Peggy Matzen",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.9,
   "avgActual": -6,
   "avgExpected": 0.8,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Montville",
   "away": "Flemington Blue",
   "time": "2026-08-27T10:30:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 559,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Vera Wong",
      "Janine Thompson"
     ],
     "a": [
      "Kelly Bowers",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jess Cox",
      "Joanne Rim"
     ],
     "a": [
      "Jo Marie Holzhammer",
      "Karen Veninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ani Stone",
      "Sonu Munshi"
     ],
     "a": [
      "Jessica Wormeck",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Vilayvanh Sysounthone",
      "Hope Lo"
     ],
     "a": [
      "Karen Waldon",
      "Maureen Dazzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ani Stone",
      "Jess Cox"
     ],
     "a": [
      "Nancy Cook",
      "Jo Marie Holzhammer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vilayvanh Sysounthone",
      "Joanne Rim"
     ],
     "a": [
      "Jessica Wormeck",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "San Yang",
      "Sonu Munshi"
     ],
     "a": [
      "Karen Waldon",
      "Maureen Dazzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ly Kim",
      "Angie Ratkowitz"
     ],
     "a": [
      "Meghan Klein",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jess Cox",
      "Sonu Munshi"
     ],
     "a": [
      "Maureen Dazzo",
      "Jo Marie Holzhammer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Vilayvanh Sysounthone",
      "Hope Lo"
     ],
     "a": [
      "Kelly Bowers",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Vera Wong",
      "Theresa Corderi"
     ],
     "a": [
      "Nancy Cook",
      "Karen Waldon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ly Kim",
      "Angie Ratkowitz"
     ],
     "a": [
      "Peggy Matzen",
      "Karen Veninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Ani Stone",
      "San Yang"
     ],
     "a": [
      "Karen Waldon",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Hope Lo",
      "Sonu Munshi"
     ],
     "a": [
      "Karen Veninger",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jess Cox",
      "Janine Thompson"
     ],
     "a": [
      "Peggy Matzen",
      "Jo Marie Holzhammer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Theresa Corderi",
      "Ly Kim"
     ],
     "a": [
      "Jessica Wormeck",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joanne Rim",
      "Sonu Munshi"
     ],
     "a": [
      "Nancy Cook",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Vera Wong",
      "San Yang"
     ],
     "a": [
      "Karen Veninger",
      "Maureen Dazzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jess Cox",
      "Hope Lo"
     ],
     "a": [
      "Jessica Wormeck",
      "Jo Marie Holzhammer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vilayvanh Sysounthone",
      "Angie Ratkowitz"
     ],
     "a": [
      "Peggy Matzen",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ly Kim",
      "Janine Thompson"
     ],
     "a": [
      "Jessica Wormeck",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jess Cox",
      "Ani Stone"
     ],
     "a": [
      "Maureen Dazzo",
      "Jo Marie Holzhammer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Hope Lo",
      "Vera Wong"
     ],
     "a": [
      "Peggy Matzen",
      "Karen Waldon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Theresa Corderi",
      "Joanne Rim"
     ],
     "a": [
      "Kelly Bowers",
      "Karen Veninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janine Thompson",
      "Vilayvanh Sysounthone"
     ],
     "a": [
      "Karen Waldon",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Theresa Corderi",
      "Ly Kim"
     ],
     "a": [
      "Peggy Matzen",
      "Maureen Dazzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ani Stone",
      "San Yang"
     ],
     "a": [
      "Kelly Bowers",
      "Jo Marie Holzhammer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joanne Rim",
      "Angie Ratkowitz"
     ],
     "a": [
      "Nancy Cook",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Hope Lo",
      "Ani Stone"
     ],
     "a": [
      "Kelly Bowers",
      "Maureen Dazzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Janine Thompson",
      "San Yang"
     ],
     "a": [
      "Jo Marie Holzhammer",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vera Wong",
      "Angie Ratkowitz"
     ],
     "a": [
      "Nancy Cook",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Vilayvanh Sysounthone",
      "Joanne Rim"
     ],
     "a": [
      "Jessica Wormeck",
      "Karen Waldon"
     ]
    }
   ],
   "subs": [
    "Sonu Munshi"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-08-27T11:00:00",
   "complete": true,
   "homePoints": 573,
   "awayPoints": 560,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rani Borusu",
      "Sushma Rayapudi"
     ],
     "a": [
      "Maureen Murphy",
      "Susan Hughes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lynne Silber",
      "Robin Aiello"
     ],
     "a": [
      "Christine Steigerwalt",
      "Charlie Trapasso"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jenny Lin",
      "Lay Wassana"
     ],
     "a": [
      "Darlene Fusco",
      "Denise Stevens"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nikki Nigro",
      "Tanyalak Sawangpak"
     ],
     "a": [
      "Jean Dalstad",
      "Mary Marger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Robin Aiello",
      "Tanyalak Sawangpak"
     ],
     "a": [
      "Jenna Haas",
      "Christine Steigerwalt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rani Borusu",
      "Sushma Rayapudi"
     ],
     "a": [
      "Lynn Hauth",
      "Kathleen Rex"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Irene Guile",
      "Jenny Lin"
     ],
     "a": [
      "Trena Hahn",
      "Susan Hughes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lay Wassana",
      "Nikki Nigro"
     ],
     "a": [
      "Darlene Fusco",
      "Charlie Trapasso"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Nikki Nigro",
      "Sushma Rayapudi"
     ],
     "a": [
      "Denise Stevens",
      "Kathleen Rex"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tanyalak Sawangpak",
      "Lay Wassana"
     ],
     "a": [
      "Charlie Trapasso",
      "Trena Hahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lynne Silber",
      "Rani Borusu"
     ],
     "a": [
      "Mary Marger",
      "Lynn Hauth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Irene Guile",
      "Robin Aiello"
     ],
     "a": [
      "Maureen Murphy",
      "Jenna Haas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tanyalak Sawangpak",
      "Sushma Rayapudi"
     ],
     "a": [
      "Lynn Hauth",
      "Jean Dalstad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jenny Lin",
      "Robin Aiello"
     ],
     "a": [
      "Darlene Fusco",
      "Christine Steigerwalt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lay Wassana",
      "Rani Borusu"
     ],
     "a": [
      "Denise Stevens",
      "Susan Hughes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lynne Silber",
      "Irene Guile"
     ],
     "a": [
      "Mary Marger",
      "Kathleen Rex"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robin Aiello",
      "Lay Wassana"
     ],
     "a": [
      "Jean Dalstad",
      "Mary Marger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Jenny Lin"
     ],
     "a": [
      "Trena Hahn",
      "Christine Steigerwalt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sushma Rayapudi",
      "Lynne Silber"
     ],
     "a": [
      "Maureen Murphy",
      "Jenna Haas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Irene Guile",
      "Tanyalak Sawangpak"
     ],
     "a": [
      "Charlie Trapasso",
      "Denise Stevens"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lay Wassana",
      "Robin Aiello"
     ],
     "a": [
      "Maureen Murphy",
      "Charlie Trapasso"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nikki Nigro",
      "Rani Borusu"
     ],
     "a": [
      "Kathleen Rex",
      "Lynn Hauth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lynne Silber",
      "Irene Guile"
     ],
     "a": [
      "Trena Hahn",
      "Darlene Fusco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jenny Lin",
      "Tanyalak Sawangpak"
     ],
     "a": [
      "Jean Dalstad",
      "Denise Stevens"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lynne Silber",
      "Sushma Rayapudi"
     ],
     "a": [
      "Mary Marger",
      "Lynn Hauth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lay Wassana",
      "Rani Borusu"
     ],
     "a": [
      "Jean Dalstad",
      "Jenna Haas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tanyalak Sawangpak",
      "Nikki Nigro"
     ],
     "a": [
      "Christine Steigerwalt",
      "Darlene Fusco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Jenny Lin",
      "Irene Guile"
     ],
     "a": [
      "Trena Hahn",
      "Susan Hughes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lynne Silber",
      "Nikki Nigro"
     ],
     "a": [
      "Maureen Murphy",
      "Susan Hughes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rani Borusu",
      "Jenny Lin"
     ],
     "a": [
      "Denise Stevens",
      "Darlene Fusco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lay Wassana",
      "Sushma Rayapudi"
     ],
     "a": [
      "Christine Steigerwalt",
      "Charlie Trapasso"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tanyalak Sawangpak",
      "Irene Guile"
     ],
     "a": [
      "Kathleen Rex",
      "Jenna Haas"
     ]
    }
   ],
   "subs": [
    "Jenny Lin",
    "Lynne Silber",
    "Robin Aiello",
    "Irene Guile"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Premiere",
   "away": "PKLD",
   "time": "2026-08-27T12:00:00",
   "complete": true,
   "homePoints": 421,
   "awayPoints": 682,
   "homeGW": 1,
   "awayGW": 31,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Linda Iacono",
      "Eileen Clark"
     ],
     "a": [
      "Paula Cushing",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sally Sitro",
      "Elizabeth Damico"
     ],
     "a": [
      "Kayla Gipson",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Lenore David"
     ],
     "a": [
      "Linda Seemann",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Denise Bonagura",
      "Christine Pisapia"
     ],
     "a": [
      "Olga Turova",
      "Linda Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Lenore David"
     ],
     "a": [
      "Linda Johns",
      "Kayla Gipson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sally Sitro",
      "Christine Pisapia"
     ],
     "a": [
      "Paula Cushing",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sabrina Trunzo Dinkle",
      "Linda Iacono"
     ],
     "a": [
      "Linda Seemann",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Denise Bonagura",
      "Eileen Clark"
     ],
     "a": [
      "Filomena Rega",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sally Sitro",
      "Lenore David"
     ],
     "a": [
      "Linda Seemann",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Denise Bonagura",
      "Christine Pisapia"
     ],
     "a": [
      "Linda Johns",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Linda Iacono",
      "Eileen Clark"
     ],
     "a": [
      "Filomena Rega",
      "Kayla Gipson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sabrina Trunzo Dinkle",
      "Elizabeth Damico"
     ],
     "a": [
      "Olga Turova",
      "Paula Cushing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Denise Bonagura",
      "Elizabeth Damico"
     ],
     "a": [
      "Kayla Gipson",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Sally Sitro",
      "Lenore David"
     ],
     "a": [
      "Marina Volpe",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Sabrina Trunzo Dinkle",
      "Linda Iacono"
     ],
     "a": [
      "Paula Cushing",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Eileen Clark"
     ],
     "a": [
      "Linda Johns",
      "Linda Seemann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sabrina Trunzo Dinkle",
      "Karen Pisano"
     ],
     "a": [
      "Kayla Gipson",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sally Sitro",
      "Elizabeth Damico"
     ],
     "a": [
      "Marina Volpe",
      "Linda Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christine Pisapia",
      "Eileen Clark"
     ],
     "a": [
      "Paula Cushing",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Linda Iacono",
      "Lenore David"
     ],
     "a": [
      "Olga Turova",
      "Linda Seemann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elizabeth Damico",
      "Linda Iacono"
     ],
     "a": [
      "Kayla Gipson",
      "Linda Seemann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sally Sitro",
      "Christine Pisapia"
     ],
     "a": [
      "Paula Cushing",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Sabrina Trunzo Dinkle",
      "Eileen Clark"
     ],
     "a": [
      "Marina Volpe",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Denise Bonagura"
     ],
     "a": [
      "Linda Johns",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Denise Bonagura",
      "Eileen Clark"
     ],
     "a": [
      "Maureen Bruno",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Linda Iacono",
      "Lenore David"
     ],
     "a": [
      "Linda Seemann",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Elizabeth Damico"
     ],
     "a": [
      "Linda Johns",
      "Kayla Gipson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Pisapia",
      "Sabrina Trunzo Dinkle"
     ],
     "a": [
      "Paula Cushing",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sabrina Trunzo Dinkle",
      "Eileen Clark"
     ],
     "a": [
      "Paula Cushing",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Denise Bonagura",
      "Elizabeth Damico"
     ],
     "a": [
      "Olga Turova",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Sally Sitro"
     ],
     "a": [
      "Maureen Bruno",
      "Linda Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lenore David",
      "Christine Pisapia"
     ],
     "a": [
      "Linda Seemann",
      "Kayla Gipson"
     ]
    }
   ],
   "subs": [
    "Eileen Clark"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Picklr Newtown",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-08-27T12:00:00",
   "complete": true,
   "homePoints": 608,
   "awayPoints": 641,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Esha Gajjar",
      "Rachel Mcgowan"
     ],
     "a": [
      "Amy Wondrack",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lori Wild",
      "Jacqueline Ho"
     ],
     "a": [
      "Corinne Palma",
      "Virginia Kenny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pam Mcdannell",
      "Chiti Joshi"
     ],
     "a": [
      "Melissa Mcconnell",
      "Karyn Jarmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Suzi French",
      "Heather Waters"
     ],
     "a": [
      "Susana Palumbo",
      "Debbie Pall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Esha Gajjar",
      "Rachel Mcgowan"
     ],
     "a": [
      "Corinne Palma",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lori Wild",
      "Jacqueline Ho"
     ],
     "a": [
      "Virginia Kenny",
      "Melissa Mcconnell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Virginie Boutin",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Tina Cros",
      "Karyn Jarmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chiti Joshi",
      "Pam Mcdannell"
     ],
     "a": [
      "Deborah Muschio",
      "Toni Demaio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Virginie Boutin",
      "Sulyn Kulick"
     ],
     "a": [
      "Amy Wondrack",
      "Tina Cros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jacqueline Ho",
      "Pam Mcdannell"
     ],
     "a": [
      "Wendi Wolanske",
      "Susana Palumbo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Suzi French",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Debbie Pall",
      "Karyn Jarmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Holli Lish",
      "Rachel Mcgowan"
     ],
     "a": [
      "Deborah Muschio",
      "Toni Demaio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chiti Joshi",
      "Lori Wild"
     ],
     "a": [
      "Amy Wondrack",
      "Debbie Pall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Virginie Boutin",
      "Esha Gajjar"
     ],
     "a": [
      "Corinne Palma",
      "Deborah Muschio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sulyn Kulick",
      "Holli Lish"
     ],
     "a": [
      "Tina Cros",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Pam Mcdannell",
      "Heather Waters"
     ],
     "a": [
      "Toni Demaio",
      "Melissa Mcconnell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Virginie Boutin",
      "Sulyn Kulick"
     ],
     "a": [
      "Amy Wondrack",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Esha Gajjar",
      "Jacqueline Ho"
     ],
     "a": [
      "Melissa Mcconnell",
      "Virginia Kenny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lori Wild",
      "Chiti Joshi"
     ],
     "a": [
      "Wendi Wolanske",
      "Karyn Jarmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suzi French",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Toni Demaio",
      "Susana Palumbo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Esha Gajjar",
      "Virginie Boutin"
     ],
     "a": [
      "Corinne Palma",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Mcgowan",
      "Chiti Joshi"
     ],
     "a": [
      "Wendi Wolanske",
      "Virginia Kenny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lori Wild",
      "Suzi French"
     ],
     "a": [
      "Toni Demaio",
      "Karyn Jarmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Heather Waters",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Deborah Muschio",
      "Susana Palumbo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacqueline Ho",
      "Pam Mcdannell"
     ],
     "a": [
      "Amy Wondrack",
      "Debbie Pall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Esha Gajjar",
      "Lori Wild"
     ],
     "a": [
      "Corinne Palma",
      "Virginia Kenny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suzi French",
      "Heather Waters"
     ],
     "a": [
      "Wendi Wolanske",
      "Susana Palumbo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Virginie Boutin",
      "Rachel Mcgowan"
     ],
     "a": [
      "Tina Cros",
      "Melissa Mcconnell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lori Wild",
      "Pam Mcdannell"
     ],
     "a": [
      "Amy Wondrack",
      "Corinne Palma"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rachel Mcgowan",
      "Chiti Joshi"
     ],
     "a": [
      "Kathleen Lynch",
      "Virginia Kenny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jacqueline Ho",
      "Esha Gajjar"
     ],
     "a": [
      "Wendi Wolanske",
      "Tina Cros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Holli Lish",
      "Heather Waters"
     ],
     "a": [
      "Deborah Muschio",
      "Debbie Pall"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Flemington Green",
   "time": "2026-09-03T11:00:00",
   "complete": true,
   "homePoints": 509,
   "awayPoints": 630,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rani Borusu",
      "Sushma Rayapudi"
     ],
     "a": [
      "Tammy Dragon",
      "Julia Hollman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Eileen Clark",
      "Kara Chubrik"
     ],
     "a": [
      "Elizabeth Biehl",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Kim Allaga"
     ],
     "a": [
      "Janice Aliberti",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tanyalak Sawangpak",
      "Lay Wassana"
     ],
     "a": [
      "Diane Bracco",
      "Jeannine Calhoun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kara Chubrik",
      "Lynne Silber"
     ],
     "a": [
      "Jeannine Calhoun",
      "Julia Hollman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Lay Wassana",
      "Tanyalak Sawangpak"
     ],
     "a": [
      "Tammy Dragon",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Beth Pardilla",
      "Kim Allaga"
     ],
     "a": [
      "Elizabeth Biehl",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sherry Sili",
      "Eileen Clark"
     ],
     "a": [
      "Lynda Levan",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sushma Rayapudi",
      "Lay Wassana"
     ],
     "a": [
      "Elizabeth Biehl",
      "Jeannine Calhoun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nikki Nigro",
      "Eileen Clark"
     ],
     "a": [
      "Janice Aliberti",
      "Lynda Levan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rani Borusu",
      "Beth Pardilla"
     ],
     "a": [
      "Susan Goeckeler",
      "Julia Hollman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kim Allaga",
      "Sherry Sili"
     ],
     "a": [
      "Diane Bracco",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sherry Sili",
      "Lynne Silber"
     ],
     "a": [
      "Janice Aliberti",
      "Diane Bracco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sushma Rayapudi",
      "Lay Wassana"
     ],
     "a": [
      "Elizabeth Biehl",
      "Tammy Dragon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rani Borusu",
      "Tanyalak Sawangpak"
     ],
     "a": [
      "Jeannine Calhoun",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kara Chubrik",
      "Nikki Nigro"
     ],
     "a": [
      "Grace Brennan",
      "Lynda Levan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Beth Pardilla",
      "Kim Allaga"
     ],
     "a": [
      "Tammy Dragon",
      "Lynda Levan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lynne Silber",
      "Nikki Nigro"
     ],
     "a": [
      "Janice Aliberti",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sherry Sili",
      "Eileen Clark"
     ],
     "a": [
      "Julia Hollman",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tanyalak Sawangpak",
      "Sushma Rayapudi"
     ],
     "a": [
      "Diane Bracco",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sushma Rayapudi",
      "Beth Pardilla"
     ],
     "a": [
      "Janice Aliberti",
      "Elizabeth Biehl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rani Borusu",
      "Kim Allaga"
     ],
     "a": [
      "Diane Bracco",
      "Tammy Dragon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lay Wassana",
      "Kara Chubrik"
     ],
     "a": [
      "Jeannine Calhoun",
      "Lynda Levan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Eileen Clark",
      "Lynne Silber"
     ],
     "a": [
      "Susan Goeckeler",
      "Julia Hollman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rani Borusu",
      "Sushma Rayapudi"
     ],
     "a": [
      "Grace Brennan",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Beth Pardilla",
      "Nikki Nigro"
     ],
     "a": [
      "Elizabeth Biehl",
      "Lynda Levan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sherry Sili",
      "Tanyalak Sawangpak"
     ],
     "a": [
      "Tammy Dragon",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kara Chubrik",
      "Lynne Silber"
     ],
     "a": [
      "Janice Aliberti",
      "Jeannine Calhoun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sherry Sili",
      "Sushma Rayapudi"
     ],
     "a": [
      "Janice Aliberti",
      "Tammy Dragon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Rani Borusu"
     ],
     "a": [
      "Julia Hollman",
      "Lynda Levan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lay Wassana",
      "Kim Allaga"
     ],
     "a": [
      "Elizabeth Biehl",
      "Diane Bracco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eileen Clark",
      "Beth Pardilla"
     ],
     "a": [
      "Grace Brennan",
      "Marianne Rosato"
     ]
    }
   ],
   "subs": [
    "Susan Goeckeler",
    "Kim Allaga",
    "Beth Pardilla",
    "Eileen Clark",
    "Lynne Silber",
    "Sherry Sili"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Pickleball Lehigh Valley",
   "away": "Montville",
   "time": "2026-09-03T11:00:00",
   "complete": true,
   "homePoints": 436,
   "awayPoints": 669,
   "homeGW": 2,
   "awayGW": 30,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Charlie Trapasso"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Joanne Rim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Maureen Murphy",
      "Denise Stevens"
     ],
     "a": [
      "Jess Cox",
      "Hope Lo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jean Dalstad",
      "Mary Marger"
     ],
     "a": [
      "Theresa Corderi",
      "Ly Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ghada Abraham",
      "Lynn Hauth"
     ],
     "a": [
      "Janine Thompson",
      "Angie Ratkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Maureen Murphy",
      "Christine Steigerwalt"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Sandy Hess"
     ],
     "a": [
      "Jess Cox",
      "Joanne Rim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jenna Haas",
      "Trena Hahn"
     ],
     "a": [
      "Theresa Corderi",
      "Angie Ratkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nami Huang",
      "Ghada Abraham"
     ],
     "a": [
      "Cheryl Brodsky",
      "Debi Mcdonald"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Maureen Murphy",
      "Jenna Haas"
     ],
     "a": [
      "Joanne Rim",
      "Hope Lo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Charlie Trapasso",
      "Sandy Hess"
     ],
     "a": [
      "Jess Cox",
      "Janine Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Trena Hahn",
      "Mary Marger"
     ],
     "a": [
      "Kumi Dalton",
      "Ly Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lynn Hauth",
      "Nami Huang"
     ],
     "a": [
      "Angie Ratkowitz",
      "Debi Mcdonald"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Jenna Haas",
      "Jean Dalstad"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Hope Lo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mary Marger",
      "Denise Stevens"
     ],
     "a": [
      "Jess Cox",
      "Kumi Dalton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sandy Hess",
      "Christine Steigerwalt"
     ],
     "a": [
      "Rachel Baluyot",
      "Janine Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ghada Abraham",
      "Lynn Hauth"
     ],
     "a": [
      "Cheryl Brodsky",
      "Ly Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Charlie Trapasso"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Angie Ratkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Maureen Murphy",
      "Trena Hahn"
     ],
     "a": [
      "Joanne Rim",
      "Hope Lo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nami Huang",
      "Ghada Abraham"
     ],
     "a": [
      "Theresa Corderi",
      "Ly Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lynn Hauth",
      "Christine Steigerwalt"
     ],
     "a": [
      "Cheryl Brodsky",
      "Debi Mcdonald"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Maureen Murphy",
      "Jean Dalstad"
     ],
     "a": [
      "Joanne Rim",
      "Kumi Dalton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mary Marger",
      "Jenna Haas"
     ],
     "a": [
      "Jess Cox",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lynn Hauth",
      "Sandy Hess"
     ],
     "a": [
      "Cheryl Brodsky",
      "Ly Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Nami Huang",
      "Trena Hahn"
     ],
     "a": [
      "Angie Ratkowitz",
      "Debi Mcdonald"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jenna Haas",
      "Jean Dalstad"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Janine Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Charlie Trapasso",
      "Sandy Hess"
     ],
     "a": [
      "Jess Cox",
      "Theresa Corderi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Trena Hahn",
      "Ghada Abraham"
     ],
     "a": [
      "Hope Lo",
      "Kumi Dalton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mary Marger",
      "Nami Huang"
     ],
     "a": [
      "Rachel Baluyot",
      "Debi Mcdonald"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Maureen Murphy",
      "Denise Stevens"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Kumi Dalton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Marger",
      "Jean Dalstad"
     ],
     "a": [
      "Hope Lo",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Charlie Trapasso"
     ],
     "a": [
      "Joanne Rim",
      "Janine Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Trena Hahn",
      "Jenna Haas"
     ],
     "a": [
      "Theresa Corderi",
      "Cheryl Brodsky"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Flemington Blue",
   "away": "PKLD",
   "time": "2026-09-03T11:00:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 527,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Johanna Kreilick",
      "Peggy Matzen"
     ],
     "a": [
      "Kayla Gipson",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jessica Wormeck",
      "Jo Marie Holzhammer"
     ],
     "a": [
      "Marina Volpe",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Meghan Klein",
      "Monika Torbus"
     ],
     "a": [
      "Paula Cushing",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelly Bowers",
      "Holly Ferguson"
     ],
     "a": [
      "Linda Johns",
      "Linda Seemann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Kreilick",
      "Jessica Wormeck"
     ],
     "a": [
      "Paula Cushing",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Monika Torbus",
      "Kelly Bowers"
     ],
     "a": [
      "Kayla Gipson",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Meghan Klein",
      "Peggy Matzen"
     ],
     "a": [
      "Linda Seemann",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jo Marie Holzhammer",
      "Karen Waldon"
     ],
     "a": [
      "Olga Turova",
      "Linda Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Johanna Kreilick",
      "Holly Ferguson"
     ],
     "a": [
      "Linda Johns",
      "Kayla Gipson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jo Marie Holzhammer",
      "Kelly Bowers"
     ],
     "a": [
      "Paula Cushing",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karen Waldon",
      "Peggy Matzen"
     ],
     "a": [
      "Linda Seemann",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Jessica Wormeck"
     ],
     "a": [
      "Marina Berger",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Johanna Kreilick",
      "Kelly Bowers"
     ],
     "a": [
      "Linda Johns",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Holly Ferguson",
      "Karen Waldon"
     ],
     "a": [
      "Olga Turova",
      "Linda Seemann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Meghan Klein",
      "Jessica Wormeck"
     ],
     "a": [
      "Marina Berger",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Monika Torbus",
      "Jo Marie Holzhammer"
     ],
     "a": [
      "Kayla Gipson",
      "Paula Cushing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Monika Torbus",
      "Peggy Matzen"
     ],
     "a": [
      "Kayla Gipson",
      "Linda Seemann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jo Marie Holzhammer",
      "Holly Ferguson"
     ],
     "a": [
      "Paula Cushing",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelly Bowers",
      "Jessica Wormeck"
     ],
     "a": [
      "Marina Volpe",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Meghan Klein",
      "Karen Waldon"
     ],
     "a": [
      "Linda Johns",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jo Marie Holzhammer",
      "Jessica Wormeck"
     ],
     "a": [
      "Maureen Bruno",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Holly Ferguson"
     ],
     "a": [
      "Linda Seemann",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Meghan Klein",
      "Kelly Bowers"
     ],
     "a": [
      "Linda Johns",
      "Kayla Gipson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Peggy Matzen",
      "Karen Waldon"
     ],
     "a": [
      "Paula Cushing",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jo Marie Holzhammer",
      "Peggy Matzen"
     ],
     "a": [
      "Paula Cushing",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jessica Wormeck",
      "Karen Waldon"
     ],
     "a": [
      "Olga Turova",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Monika Torbus",
      "Kelly Bowers"
     ],
     "a": [
      "Maureen Bruno",
      "Linda Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meghan Klein",
      "Holly Ferguson"
     ],
     "a": [
      "Linda Seemann",
      "Kayla Gipson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelly Bowers",
      "Jo Marie Holzhammer"
     ],
     "a": [
      "Kayla Gipson",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Holly Ferguson",
      "Karen Waldon"
     ],
     "a": [
      "Marina Volpe",
      "Linda Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Meghan Klein",
      "Monika Torbus"
     ],
     "a": [
      "Paula Cushing",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Peggy Matzen",
      "Jessica Wormeck"
     ],
     "a": [
      "Olga Turova",
      "Linda Seemann"
     ]
    }
   ],
   "subs": [
    "Marina Berger"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Picklr Newtown",
   "away": "Premiere",
   "time": "2026-09-03T12:00:00",
   "complete": true,
   "homePoints": 666,
   "awayPoints": 375,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 3,
     "h": [
      "Virginie Boutin",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Sabrina Trunzo Dinkle",
      "Sally Sitro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Holli Lish",
      "Suzi French"
     ],
     "a": [
      "Nancy Ciappina",
      "Paula De Nisc"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Esha Gajjar",
      "Sulyn Kulick"
     ],
     "a": [
      "Denise Bonagura",
      "Stacey Cohen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Pam Mcdannell",
      "Heather Waters"
     ],
     "a": [
      "Stacey Nusser",
      "Christine Pisapia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Esha Gajjar",
      "Sulyn Kulick"
     ],
     "a": [
      "Diana Macri",
      "Sally Sitro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lori Wild",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Nancy Ciappina",
      "Christine Pisapia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Pam Mcdannell",
      "Chiti Joshi"
     ],
     "a": [
      "Karen Pisano",
      "Paula De Nisc"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Virginie Boutin",
      "Holli Lish"
     ],
     "a": [
      "Stacey Nusser",
      "Stacey Cohen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Pam Mcdannell",
      "Jacqueline Ho"
     ],
     "a": [
      "Sabrina Trunzo Dinkle",
      "Stacey Nusser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Virginie Boutin",
      "Lori Wild"
     ],
     "a": [
      "Karen Pisano",
      "Nancy Ciappina"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Suzi French",
      "Heather Waters"
     ],
     "a": [
      "Paula De Nisc",
      "Denise Bonagura"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Holli Lish",
      "Sulyn Kulick"
     ],
     "a": [
      "Sally Sitro",
      "Dawn Dalessio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Esha Gajjar",
      "Jacqueline Ho"
     ],
     "a": [
      "Sabrina Trunzo Dinkle",
      "Stacey Cohen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Virginie Boutin",
      "Sulyn Kulick"
     ],
     "a": [
      "Diana Macri",
      "Denise Bonagura"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Pam Mcdannell",
      "Lori Wild"
     ],
     "a": [
      "Karen Pisano",
      "Sally Sitro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Holli Lish",
      "Chiti Joshi"
     ],
     "a": [
      "Nancy Ciappina",
      "Christine Pisapia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Esha Gajjar",
      "Lori Wild"
     ],
     "a": [
      "Sabrina Trunzo Dinkle",
      "Stacey Nusser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sulyn Kulick",
      "Heather Waters"
     ],
     "a": [
      "Christine Pisapia",
      "Dawn Dalessio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzi French",
      "Jacqueline Ho"
     ],
     "a": [
      "Stacey Cohen",
      "Paula De Nisc"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Virginie Boutin",
      "Chiti Joshi"
     ],
     "a": [
      "Karen Pisano",
      "Denise Bonagura"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Esha Gajjar",
      "Jacqueline Ho"
     ],
     "a": [
      "Stacey Cohen",
      "Stacey Nusser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Holli Lish",
      "Heather Waters"
     ],
     "a": [
      "Diana Macri",
      "Nancy Ciappina"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suzi French",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Paula De Nisc",
      "Denise Bonagura"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sulyn Kulick",
      "Chiti Joshi"
     ],
     "a": [
      "Dawn Dalessio",
      "Sally Sitro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Virginie Boutin",
      "Chiti Joshi"
     ],
     "a": [
      "Sabrina Trunzo Dinkle",
      "Nancy Ciappina"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Suzi French",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Christine Pisapia",
      "Dawn Dalessio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pam Mcdannell",
      "Lori Wild"
     ],
     "a": [
      "Stacey Nusser",
      "Karen Pisano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Holli Lish",
      "Heather Waters"
     ],
     "a": [
      "Paula De Nisc",
      "Diana Macri"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jacqueline Hillgrube",
      "Jacqueline Ho"
     ],
     "a": [
      "Sabrina Trunzo Dinkle",
      "Sally Sitro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pam Mcdannell",
      "Chiti Joshi"
     ],
     "a": [
      "Diana Macri",
      "Karen Pisano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Esha Gajjar",
      "Lori Wild"
     ],
     "a": [
      "Stacey Nusser",
      "Dawn Dalessio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Suzi French",
      "Heather Waters"
     ],
     "a": [
      "Denise Bonagura",
      "Christine Pisapia"
     ]
    }
   ],
   "subs": [
    "Stacey Nusser"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Life Time Red Bank",
   "time": "2026-09-03T12:00:00",
   "complete": true,
   "homePoints": 614,
   "awayPoints": 577,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Amy Wondrack",
      "Jill Collins"
     ],
     "a": [
      "Gina Faccone",
      "Kathy Baker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Wendi Wolanske",
      "Julie Biondi"
     ],
     "a": [
      "Sara Hylan",
      "Jackie Coneeny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Karyn Jarmer",
      "Melissa Mcconnell"
     ],
     "a": [
      "Donna Facconerusin",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathleen Lynch",
      "Corinne Palma"
     ],
     "a": [
      "Marian Kingston",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Virginia Kenny",
      "Corinne Palma"
     ],
     "a": [
      "Sara Hylan",
      "Marian Kingston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shanasia Bagnol",
      "Karyn Jarmer"
     ],
     "a": [
      "Rachel Levkov",
      "Gina Faccone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Julie Biondi",
      "Donna Finn"
     ],
     "a": [
      "Jackie Coneeny",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Wendi Wolanske",
      "Toni Demaio"
     ],
     "a": [
      "Donna Facconerusin",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melissa Mcconnell",
      "Karyn Jarmer"
     ],
     "a": [
      "Donna Facconerusin",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Corinne Palma",
      "Julie Biondi"
     ],
     "a": [
      "Jackie Coneeny",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amy Wondrack",
      "Shanasia Bagnol"
     ],
     "a": [
      "Kathy Baker",
      "Kathleen Nitti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Virginia Kenny",
      "Jill Collins"
     ],
     "a": [
      "Marian Kingston",
      "Brittany Messing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amy Wondrack",
      "Kathleen Lynch"
     ],
     "a": [
      "Kathleen Nitti",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Shanasia Bagnol",
      "Melissa Mcconnell"
     ],
     "a": [
      "Rachel Levkov",
      "Brittany Messing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Wendi Wolanske",
      "Jill Collins"
     ],
     "a": [
      "Marian Kingston",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Toni Demaio",
      "Karyn Jarmer"
     ],
     "a": [
      "Jackie Coneeny",
      "Donna Facconerusin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Wendi Wolanske",
      "Toni Demaio"
     ],
     "a": [
      "Gina Faccone",
      "Brittany Messing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jill Collins",
      "Shanasia Bagnol"
     ],
     "a": [
      "Kathleen Nitti",
      "Rachel Levkov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Corinne Palma",
      "Virginia Kenny"
     ],
     "a": [
      "Kathy Baker",
      "Donna Facconerusin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kathleen Lynch",
      "Donna Finn"
     ],
     "a": [
      "Jackie Coneeny",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karyn Jarmer",
      "Julie Biondi"
     ],
     "a": [
      "Caroline Kinlin",
      "Sara Hylan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Wendi Wolanske",
      "Melissa Mcconnell"
     ],
     "a": [
      "Gina Faccone",
      "Brittany Messing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shanasia Bagnol",
      "Jill Collins"
     ],
     "a": [
      "Kathleen Nitti",
      "Rachel Levkov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Donna Finn",
      "Amy Wondrack"
     ],
     "a": [
      "Jackie Coneeny",
      "Kathy Baker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Amy Wondrack",
      "Kathleen Lynch"
     ],
     "a": [
      "Kathleen Nitti",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shanasia Bagnol",
      "Corinne Palma"
     ],
     "a": [
      "Rachel Levkov",
      "Brittany Messing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Toni Demaio",
      "Donna Finn"
     ],
     "a": [
      "Sara Hylan",
      "Marian Kingston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Virginia Kenny",
      "Melissa Mcconnell"
     ],
     "a": [
      "Kathy Baker",
      "Gina Faccone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Wondrack",
      "Shanasia Bagnol"
     ],
     "a": [
      "Kathy Baker",
      "Kathleen Nitti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Virginia Kenny",
      "Jill Collins"
     ],
     "a": [
      "Marian Kingston",
      "Brittany Messing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Donna Finn",
      "Kathleen Lynch"
     ],
     "a": [
      "Gina Faccone",
      "Rachel Levkov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Toni Demaio",
      "Julie Biondi"
     ],
     "a": [
      "Sara Hylan",
      "Marie Walsh Mccarty"
     ]
    }
   ],
   "subs": [
    "Shanasia Bagnol",
    "Jill Collins"
   ]
  },
  {
   "result": null,
   "week": 3,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-10T11:00:00",
   "complete": false,
   "games": [
    {
     "t": "female",
     "h": [
      "Eileen Clark",
      "Sherry Sili"
     ],
     "a": [
      "Amy Wondrack",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kara Chubrik",
      "Nikki Nigro"
     ],
     "a": [
      "Kimberley Levins",
      "Tina Cros"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rani Borusu",
      "Sushma Rayapudi"
     ],
     "a": [
      "Deborah Muschio",
      "Randee Schneeberg-Pomerantz"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tanyalak Sawangpak",
      "Lay Wassana"
     ],
     "a": [
      "Karyn Jarmer",
      "Toni Demaio"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sushma Rayapudi",
      "Rani Borusu"
     ],
     "a": [
      "Tina Cros",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kara Chubrik",
      "Nikki Nigro"
     ],
     "a": [
      "Corinne Palma",
      "Kimberley Levins"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tanyalak Sawangpak",
      "Lay Wassana"
     ],
     "a": [
      "Amy Wondrack",
      "Julie Biondi"
     ]
    },
    {
     "t": "female",
     "h": [
      "Eileen Clark",
      "Sherry Sili"
     ],
     "a": [
      "Virginia Kenny",
      "Melissa Mcconnell"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rani Borusu",
      "Lay Wassana"
     ],
     "a": [
      "Julie Biondi",
      "Randee Schneeberg-Pomerantz"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tanyalak Sawangpak",
      "Nikki Nigro"
     ],
     "a": [
      "Toni Demaio",
      "Melissa Mcconnell"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sushma Rayapudi",
      "Eileen Clark"
     ],
     "a": [
      "Virginia Kenny",
      "Karyn Jarmer"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sherry Sili",
      "Kara Chubrik"
     ],
     "a": [
      "Corinne Palma",
      "Deborah Muschio"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sherry Sili",
      "Kara Chubrik"
     ],
     "a": [
      "Kimberley Levins",
      "Tina Cros"
     ]
    },
    {
     "t": "female",
     "h": [
      "Eileen Clark",
      "Sushma Rayapudi"
     ],
     "a": [
      "Amy Wondrack",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tanyalak Sawangpak",
      "Nikki Nigro"
     ],
     "a": [
      "Randee Schneeberg-Pomerantz",
      "Toni Demaio"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rani Borusu",
      "Lay Wassana"
     ],
     "a": [
      "Corinne Palma",
      "Deborah Muschio"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rani Borusu",
      "Kara Chubrik"
     ],
     "a": [
      "Kimberley Levins",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tanyalak Sawangpak",
      "Sushma Rayapudi"
     ],
     "a": [
      "Amy Wondrack",
      "Corinne Palma"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lay Wassana",
      "Eileen Clark"
     ],
     "a": [
      "Karyn Jarmer",
      "Melissa Mcconnell"
     ]
    },
    {
     "t": "female",
     "h": [
      "Nikki Nigro",
      "Sherry Sili"
     ],
     "a": [
      "Virginia Kenny",
      "Julie Biondi"
     ]
    },
    {
     "t": "female",
     "h": [
      "Eileen Clark",
      "Kara Chubrik"
     ],
     "a": [
      "Amy Wondrack",
      "Tina Cros"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rani Borusu",
      "Tanyalak Sawangpak"
     ],
     "a": [
      "Kimberley Levins",
      "Randee Schneeberg-Pomerantz"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sushma Rayapudi",
      "Lay Wassana"
     ],
     "a": [
      "Julie Biondi",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "h": [
      "Nikki Nigro",
      "Sherry Sili"
     ],
     "a": [
      "Deborah Muschio",
      "Toni Demaio"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sushma Rayapudi",
      "Sherry Sili"
     ],
     "a": [
      "Randee Schneeberg-Pomerantz",
      "Tina Cros"
     ]
    },
    {
     "t": "female",
     "h": [
      "Nikki Nigro",
      "Lay Wassana"
     ],
     "a": [
      "Kimberley Levins",
      "Amy Wondrack"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kara Chubrik",
      "Tanyalak Sawangpak"
     ],
     "a": [
      "Karyn Jarmer",
      "Melissa Mcconnell"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rani Borusu",
      "Eileen Clark"
     ],
     "a": [
      "Corinne Palma",
      "Virginia Kenny"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sushma Rayapudi",
      "Tanyalak Sawangpak"
     ],
     "a": [
      "Deborah Muschio",
      "Toni Demaio"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sherry Sili",
      "Rani Borusu"
     ],
     "a": [
      "Karyn Jarmer",
      "Kathleen Lynch"
     ]
    },
    {
     "t": "female",
     "h": [
      "Nikki Nigro",
      "Lay Wassana"
     ],
     "a": [
      "Virginia Kenny",
      "Melissa Mcconnell"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kara Chubrik",
      "Eileen Clark"
     ],
     "a": [
      "Corinne Palma",
      "Julie Biondi"
     ]
    }
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Flemington Green",
   "away": "Montville",
   "time": "2026-09-10T11:00:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 602,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Julia Hollman",
      "Jeannine Calhoun"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Joanne Rim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Goeckeler",
      "Tammy Dragon"
     ],
     "a": [
      "Jess Cox",
      "Hope Lo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Janice Aliberti",
      "Diane Bracco"
     ],
     "a": [
      "Theresa Corderi",
      "Amanda Gardiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marianne Rosato",
      "Lynda Levan"
     ],
     "a": [
      "Debi Mcdonald",
      "Angie Ratkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Julia Hollman",
      "Susan Goeckeler"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Hope Lo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janice Aliberti",
      "Lynda Levan"
     ],
     "a": [
      "Jess Cox",
      "Amanda Gardiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Annette Marsh",
      "Elizabeth Biehl"
     ],
     "a": [
      "Theresa Corderi",
      "Joanne Rim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Marianne Rosato",
      "Grace Brennan"
     ],
     "a": [
      "Janine Thompson",
      "Ly Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jeannine Calhoun",
      "Elizabeth Biehl"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Angie Ratkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Susan Goeckeler",
      "Julia Hollman"
     ],
     "a": [
      "Hope Lo",
      "Joanne Rim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Annette Marsh",
      "Tammy Dragon"
     ],
     "a": [
      "Kumi Dalton",
      "Ly Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Grace Brennan",
      "Diane Bracco"
     ],
     "a": [
      "Debi Mcdonald",
      "Cheryl Brodsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tammy Dragon",
      "Jeannine Calhoun"
     ],
     "a": [
      "Kumi Dalton",
      "Janine Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janice Aliberti",
      "Julia Hollman"
     ],
     "a": [
      "Jess Cox",
      "Theresa Corderi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lynda Levan",
      "Elizabeth Biehl"
     ],
     "a": [
      "Hope Lo",
      "Amanda Gardiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marianne Rosato",
      "Diane Bracco"
     ],
     "a": [
      "Ly Kim",
      "Cheryl Brodsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lynda Levan",
      "Susan Goeckeler"
     ],
     "a": [
      "Kumi Dalton",
      "Vilayvanh Sysounthone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jeannine Calhoun",
      "Janice Aliberti"
     ],
     "a": [
      "Joanne Rim",
      "Hope Lo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marianne Rosato",
      "Tammy Dragon"
     ],
     "a": [
      "Angie Ratkowitz",
      "Janine Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Grace Brennan",
      "Annette Marsh"
     ],
     "a": [
      "Debi Mcdonald",
      "Cheryl Brodsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jeannine Calhoun",
      "Julia Hollman"
     ],
     "a": [
      "Theresa Corderi",
      "Ly Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Janice Aliberti",
      "Annette Marsh"
     ],
     "a": [
      "Jess Cox",
      "Joanne Rim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marianne Rosato",
      "Elizabeth Biehl"
     ],
     "a": [
      "Hope Lo",
      "Janine Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Diane Bracco",
      "Grace Brennan"
     ],
     "a": [
      "Debi Mcdonald",
      "Angie Ratkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tammy Dragon",
      "Julia Hollman"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Janine Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Goeckeler",
      "Annette Marsh"
     ],
     "a": [
      "Jess Cox",
      "Joanne Rim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lynda Levan",
      "Diane Bracco"
     ],
     "a": [
      "Amanda Gardiner",
      "Kumi Dalton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Elizabeth Biehl",
      "Grace Brennan"
     ],
     "a": [
      "Ly Kim",
      "Cheryl Brodsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Annette Marsh",
      "Elizabeth Biehl"
     ],
     "a": [
      "Vilayvanh Sysounthone",
      "Joanne Rim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lynda Levan",
      "Jeannine Calhoun"
     ],
     "a": [
      "Jess Cox",
      "Amanda Gardiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Janice Aliberti",
      "Tammy Dragon"
     ],
     "a": [
      "Theresa Corderi",
      "Angie Ratkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan Goeckeler",
      "Marianne Rosato"
     ],
     "a": [
      "Debi Mcdonald",
      "Kumi Dalton"
     ]
    }
   ],
   "subs": [
    "Susan Goeckeler",
    "Amanda Gardiner"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Premiere",
   "away": "Life Time Red Bank",
   "time": "2026-09-10T12:00:00",
   "complete": true,
   "homePoints": 376,
   "awayPoints": 670,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Denise Bonagura",
      "Karen Pisano"
     ],
     "a": [
      "Rachel Levkov",
      "Kathy Baker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Dawn Dalessio",
      "Nancy Ciappina"
     ],
     "a": [
      "Jerzie-Ann Coppola",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Suzanne Leon",
      "Roe Palermo"
     ],
     "a": [
      "Gina Faccone",
      "Jackie Coneeny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Stacey Cohen",
      "Sabrina Trunzo Dinkle"
     ],
     "a": [
      "Sara Hylan",
      "Donna Facconerusin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sabrina Trunzo Dinkle",
      "Roe Palermo"
     ],
     "a": [
      "Kathy Baker",
      "Donna Facconerusin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Dawn Dalessio",
      "Denise Bonagura"
     ],
     "a": [
      "Kathleen Nitti",
      "Jerzie-Ann Coppola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Nancy Ciappina"
     ],
     "a": [
      "Brittany Messing",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Stacey Cohen",
      "Suzanne Leon"
     ],
     "a": [
      "Jackie Coneeny",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Nancy Ciappina",
      "Sabrina Trunzo Dinkle"
     ],
     "a": [
      "Kathy Baker",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Suzanne Leon"
     ],
     "a": [
      "Sara Hylan",
      "Rachel Levkov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Denise Bonagura",
      "Dawn Dalessio"
     ],
     "a": [
      "Brittany Messing",
      "Kathleen Nitti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Roe Palermo",
      "Stacey Cohen"
     ],
     "a": [
      "Marie Walsh Mccarty",
      "Donna Facconerusin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Suzanne Leon",
      "Sabrina Trunzo Dinkle"
     ],
     "a": [
      "Kathleen Nitti",
      "Gina Faccone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Denise Bonagura",
      "Karen Pisano"
     ],
     "a": [
      "Kathy Baker",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Dawn Dalessio",
      "Nancy Ciappina"
     ],
     "a": [
      "Sara Hylan",
      "Rachel Levkov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Stacey Cohen",
      "Roe Palermo"
     ],
     "a": [
      "Donna Facconerusin",
      "Jerzie-Ann Coppola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzanne Leon",
      "Stacey Cohen"
     ],
     "a": [
      "Rachel Levkov",
      "Jerzie-Ann Coppola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sabrina Trunzo Dinkle",
      "Karen Pisano"
     ],
     "a": [
      "Donna Facconerusin",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dawn Dalessio",
      "Roe Palermo"
     ],
     "a": [
      "Brittany Messing",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Denise Bonagura",
      "Nancy Ciappina"
     ],
     "a": [
      "Kathy Baker",
      "Kathleen Nitti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dawn Dalessio",
      "Stacey Cohen"
     ],
     "a": [
      "Brittany Messing",
      "Sara Hylan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Roe Palermo",
      "Suzanne Leon"
     ],
     "a": [
      "Gina Faccone",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Nancy Ciappina"
     ],
     "a": [
      "Rachel Levkov",
      "Jackie Coneeny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sabrina Trunzo Dinkle",
      "Denise Bonagura"
     ],
     "a": [
      "Marie Walsh Mccarty",
      "Jerzie-Ann Coppola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Denise Bonagura",
      "Suzanne Leon"
     ],
     "a": [
      "Brittany Messing",
      "Kathleen Nitti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nancy Ciappina",
      "Stacey Cohen"
     ],
     "a": [
      "Sara Hylan",
      "Jackie Coneeny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Roe Palermo"
     ],
     "a": [
      "Gina Faccone",
      "Kathy Baker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Sabrina Trunzo Dinkle",
      "Dawn Dalessio"
     ],
     "a": [
      "Rachel Levkov",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Karen Pisano",
      "Suzanne Leon"
     ],
     "a": [
      "Gina Faccone",
      "Brittany Messing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stacey Cohen",
      "Dawn Dalessio"
     ],
     "a": [
      "Caroline Kinlin",
      "Jackie Coneeny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Nancy Ciappina",
      "Denise Bonagura"
     ],
     "a": [
      "Sara Hylan",
      "Kathleen Nitti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Roe Palermo",
      "Sabrina Trunzo Dinkle"
     ],
     "a": [
      "Donna Facconerusin",
      "Jerzie-Ann Coppola"
     ]
    }
   ],
   "subs": [
    "Roe Palermo",
    "Suzanne Leon"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Pickleball Lehigh Valley",
   "away": "Flemington Blue",
   "time": "2026-09-10T12:00:00",
   "complete": true,
   "homePoints": 546,
   "awayPoints": 661,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Darlene Fusco",
      "Christine Steigerwalt"
     ],
     "a": [
      "Christine Ziegler",
      "Maureen Dazzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jean Dalstad",
      "Denise Stevens"
     ],
     "a": [
      "Jessica Wormeck",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Charlie Trapasso",
      "Trena Hahn"
     ],
     "a": [
      "Peggy Matzen",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Maureen Murphy",
      "Susan Hughes"
     ],
     "a": [
      "Meghan Klein",
      "Suzanne Bauer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nami Huang",
      "Ghada Abraham"
     ],
     "a": [
      "Nancy Cook",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Susan Hughes",
      "Trena Hahn"
     ],
     "a": [
      "Suzanne Bauer",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Steigerwalt",
      "Jenna Haas"
     ],
     "a": [
      "Meghan Klein",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Darlene Fusco",
      "Sandy Hess"
     ],
     "a": [
      "Maureen Dazzo",
      "Christine Ziegler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Jean Dalstad"
     ],
     "a": [
      "Meghan Klein",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sandy Hess",
      "Nami Huang"
     ],
     "a": [
      "Peggy Matzen",
      "Maureen Dazzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ghada Abraham",
      "Jenna Haas"
     ],
     "a": [
      "Kelly Bowers",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Maureen Murphy",
      "Charlie Trapasso"
     ],
     "a": [
      "Christine Ziegler",
      "Suzanne Bauer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jenna Haas",
      "Trena Hahn"
     ],
     "a": [
      "Kelly Bowers",
      "Maureen Dazzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Hughes",
      "Ghada Abraham"
     ],
     "a": [
      "Christine Ziegler",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Jean Dalstad"
     ],
     "a": [
      "Nancy Cook",
      "Suzanne Bauer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nami Huang",
      "Darlene Fusco"
     ],
     "a": [
      "Meghan Klein",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Steigerwalt",
      "Charlie Trapasso"
     ],
     "a": [
      "Christine Ziegler",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Darlene Fusco",
      "Trena Hahn"
     ],
     "a": [
      "Maureen Dazzo",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sandy Hess",
      "Jean Dalstad"
     ],
     "a": [
      "Peggy Matzen",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Maureen Murphy"
     ],
     "a": [
      "Nancy Cook",
      "Suzanne Bauer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Susan Hughes",
      "Nami Huang"
     ],
     "a": [
      "Jessica Wormeck",
      "Christine Ziegler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ghada Abraham",
      "Sandy Hess"
     ],
     "a": [
      "Peggy Matzen",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jean Dalstad",
      "Jenna Haas"
     ],
     "a": [
      "Suzanne Bauer",
      "Maureen Dazzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Charlie Trapasso",
      "Denise Stevens"
     ],
     "a": [
      "Meghan Klein",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jean Dalstad",
      "Nami Huang"
     ],
     "a": [
      "Kelly Bowers",
      "Maureen Dazzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Maureen Murphy"
     ],
     "a": [
      "Jessica Wormeck",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ghada Abraham",
      "Susan Hughes"
     ],
     "a": [
      "Christine Ziegler",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Charlie Trapasso",
      "Trena Hahn"
     ],
     "a": [
      "Peggy Matzen",
      "Suzanne Bauer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Darlene Fusco",
      "Christine Steigerwalt"
     ],
     "a": [
      "Meghan Klein",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jenna Haas",
      "Ghada Abraham"
     ],
     "a": [
      "Christine Ziegler",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Hughes",
      "Maureen Murphy"
     ],
     "a": [
      "Jessica Wormeck",
      "Suzanne Bauer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nami Huang",
      "Sandy Hess"
     ],
     "a": [
      "Maureen Dazzo",
      "Nancy Cook"
     ]
    }
   ],
   "subs": [
    "Suzanne Bauer"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Picklr Newtown",
   "away": "PKLD",
   "time": "2026-09-10T13:00:00",
   "complete": true,
   "homePoints": 635,
   "awayPoints": 630,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jacqueline Hillgrube",
      "Sulyn Kulick"
     ],
     "a": [
      "Olga Kim",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Holli Lish",
      "Chiti Joshi"
     ],
     "a": [
      "Marina Volpe",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lori Wild",
      "Jacqueline Ho"
     ],
     "a": [
      "Paula Cushing",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Suzi French",
      "Heather Waters"
     ],
     "a": [
      "Linda Johns",
      "Jasmine Ho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lori Wild",
      "Jacqueline Ho"
     ],
     "a": [
      "Marina Volpe",
      "Paula Cushing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rachel Mcgowan",
      "Sulyn Kulick"
     ],
     "a": [
      "Olga Kim",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Chiti Joshi",
      "Holli Lish"
     ],
     "a": [
      "Jasmine Ho",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Suzi French",
      "Heather Waters"
     ],
     "a": [
      "Linda Johns",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sulyn Kulick",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Linda Johns",
      "Olga Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Heather Waters",
      "Holli Lish"
     ],
     "a": [
      "Paula Cushing",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Virginie Boutin",
      "Lori Wild"
     ],
     "a": [
      "Jasmine Ho",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rachel Mcgowan",
      "Jacqueline Ho"
     ],
     "a": [
      "Marina Berger",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sulyn Kulick",
      "Suzi French"
     ],
     "a": [
      "Linda Johns",
      "Marina Volpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jacqueline Hillgrube",
      "Heather Waters"
     ],
     "a": [
      "Olga Turova",
      "Jasmine Ho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Virginie Boutin",
      "Jacqueline Ho"
     ],
     "a": [
      "Marina Berger",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lori Wild",
      "Esha Gajjar"
     ],
     "a": [
      "Olga Kim",
      "Paula Cushing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Virginie Boutin",
      "Sulyn Kulick"
     ],
     "a": [
      "Olga Kim",
      "Jasmine Ho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Rachel Mcgowan",
      "Chiti Joshi"
     ],
     "a": [
      "Paula Cushing",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Heather Waters",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Marina Volpe",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Holli Lish",
      "Suzi French"
     ],
     "a": [
      "Linda Johns",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Virginie Boutin",
      "Chiti Joshi"
     ],
     "a": [
      "Marina Berger",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Holli Lish",
      "Jacqueline Ho"
     ],
     "a": [
      "Marina Volpe",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sulyn Kulick",
      "Heather Waters"
     ],
     "a": [
      "Linda Johns",
      "Jasmine Ho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Rachel Mcgowan",
      "Esha Gajjar"
     ],
     "a": [
      "Olga Kim",
      "Paula Cushing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chiti Joshi",
      "Virginie Boutin"
     ],
     "a": [
      "Marina Volpe",
      "Paula Cushing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Holli Lish",
      "Rachel Mcgowan"
     ],
     "a": [
      "Olga Turova",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Esha Gajjar",
      "Lori Wild"
     ],
     "a": [
      "Maureen Bruno",
      "Linda Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suzi French",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Jasmine Ho",
      "Olga Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lori Wild",
      "Jacqueline Hillgrube"
     ],
     "a": [
      "Olga Kim",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Virginie Boutin",
      "Suzi French"
     ],
     "a": [
      "Marina Volpe",
      "Linda Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Rachel Mcgowan",
      "Esha Gajjar"
     ],
     "a": [
      "Paula Cushing",
      "Marina Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chiti Joshi",
      "Jacqueline Ho"
     ],
     "a": [
      "Olga Turova",
      "Jasmine Ho"
     ]
    }
   ],
   "subs": [
    "Marina Berger"
   ]
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-09-17T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "PKLD",
   "away": "Flemington Green",
   "time": "2026-09-17T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Life Time Red Bank",
   "away": "Montville",
   "time": "2026-09-17T11:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Premiere",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-17T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Picklr Newtown",
   "away": "Flemington Blue",
   "time": "2026-09-17T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Montville",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-24T10:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington Green",
   "away": "Flemington Blue",
   "time": "2026-09-24T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Life Time Red Bank",
   "away": "PKLD",
   "time": "2026-09-24T11:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Lehigh Valley",
   "away": "Picklr Newtown",
   "time": "2026-09-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Premiere",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Lehigh Valley",
   "away": "Premiere",
   "time": "2026-09-26T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Picklr Newtown",
   "time": "2026-09-27T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Montville",
   "away": "PKLD",
   "time": "2026-09-27T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington Blue",
   "away": "Life Time Red Bank",
   "time": "2026-09-27T16:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington Green",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-27T16:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "PKLD",
   "away": "Premiere",
   "time": "2026-10-01T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Flemington Blue",
   "away": "Montville",
   "time": "2026-10-01T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Life Time Red Bank",
   "away": "Flemington Green",
   "time": "2026-10-01T11:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Picklr Newtown",
   "time": "2026-10-01T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Lehigh Valley",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-01T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Flemington Blue",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-08T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Lehigh Valley",
   "away": "Flemington Green",
   "time": "2026-10-08T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "PKLD",
   "time": "2026-10-08T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Picklr Newtown",
   "away": "Life Time Red Bank",
   "time": "2026-10-08T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Flemington Green",
   "away": "Premiere",
   "time": "2026-10-15T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "PKLD",
   "time": "2026-10-15T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Life Time Red Bank",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-10-15T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Picklr Newtown",
   "away": "Montville",
   "time": "2026-10-15T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Flemington Blue",
   "time": "2026-10-15T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington Green",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-22T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Montville",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-10-22T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Life Time Red Bank",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-10-22T11:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Premiere",
   "away": "Picklr Newtown",
   "time": "2026-10-22T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "PKLD",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Life Time Red Bank",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Montville",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Premiere",
   "away": "Flemington Blue",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Picklr Newtown",
   "away": "Flemington Green",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Montville",
   "away": "Flemington Green",
   "time": "2026-10-29T10:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "PKLD",
   "away": "Picklr Newtown",
   "time": "2026-10-29T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington Blue",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-10-29T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Life Time Red Bank",
   "away": "Premiere",
   "time": "2026-10-29T11:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Montville",
   "away": "Premiere",
   "time": "2026-11-05T10:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Flemington Blue",
   "time": "2026-11-05T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "PKLD",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-11-05T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Flemington Green",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-11-05T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Life Time Red Bank",
   "away": "Picklr Newtown",
   "time": "2026-11-05T11:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "PKLD",
   "away": "Life Time Red Bank",
   "time": "2026-11-12T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Montville",
   "time": "2026-11-12T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Flemington Blue",
   "away": "Flemington Green",
   "time": "2026-11-12T11:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Premiere",
   "time": "2026-11-12T12:00:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Janice Corpora": "0b75a96c-be49-4dbb-967f-bd6459b0f3bc",
  "Esther Dayon": "487f97a4-05cd-4825-a2b9-d733741a8115",
  "Love Roa": "5278c4bb-2d3a-4b18-bcb4-f073aac0f9ff",
  "Vanessa Tortorice": "818811e5-0eb6-4611-8ac3-f65c10316305",
  "Kelly Lopinto": "8a1482a3-791c-4ec9-9fae-f9f4f9820296",
  "Renee Peel": "9e346d92-597a-49ef-af58-665667c75c82",
  "Sara Mizrahi": "c190d722-7f9c-49a7-88ae-cbba5f19e7d0",
  "Danielle Nitti": "c87dbf47-5507-470c-b006-71eb4e859389",
  "Nicole Tarallo": "d16138ba-5e8f-4f9e-9464-478ba4320c11",
  "Tracey Klemick": "ee0ab5ac-db12-47f7-bcdb-1a9d452e0ff0",
  "Cara Marcoux": "fa1b17b7-edc0-4281-b66d-587b9eb73062"
 },
 "meta": {
  "matchesPlayed": 13,
  "provisionalMatches": 0,
  "weeks": "1-3",
  "totalPlayers": 147,
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
    "week": 3,
    "label": "3",
    "seq": 2
   }
  ],
  "divisionSlug": "ad44e3bd",
  "hasPlayoffs": false,
  "typicalDay": "Thursdays",
  "detailFile": "compiled/detail-ad44e3bd.js",
  "clubName": "",
  "divisionName": "3.25 Womens",
  "leagueType": "travel",
  "seasonSlug": "2026-fall",
  "seasonLabel": "Fall 2026",
  "seasonStatus": "current",
  "singleGender": "Female",
  "podCount": 1,
  "podNames": [
   "East / West"
  ],
  "podSource": "api",
  "reportedPods": [
   "East",
   "West"
  ],
  "podMismatch": {
   "crossPodMatchups": 25,
   "totalMatchups": 65,
   "reported": {
    "West": [
     "Flemington Blue",
     "Flemington Green",
     "Montville",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Lehigh Valley"
    ],
    "East": [
     "Life Time Red Bank",
     "Pickleball Kingdom Tinton Falls",
     "Picklr Newtown",
     "PKLD",
     "Premiere"
    ]
   },
   "schedule": {
    "Pod 1": [
     "Flemington Blue",
     "Flemington Green",
     "Life Time Red Bank",
     "Montville",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Tinton Falls",
     "Pickleball Lehigh Valley",
     "Picklr Newtown",
     "PKLD",
     "Premiere"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-09-11T02:09:50.298Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["ad44e3bd"] = DATA;
})();
