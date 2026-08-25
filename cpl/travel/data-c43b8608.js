(function () {
  const DATA = {
 "players": [
  {
   "name": "Gladys Garzone",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 78,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "130961d9-c1d1-47b6-9bee-90183531473c",
   "winPct": 100,
   "diff": 69,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 4.3,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Ana Bautista",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 79,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "33692212-f6ed-47f3-bac2-e19da564c0c6",
   "winPct": 100,
   "diff": 68,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 4.4,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1
  },
  {
   "name": "Shuming Zhu",
   "gender": "Female",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 86,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "ce26642b-bd69-4cbc-a478-95e060c2b0a8",
   "winPct": 100,
   "diff": 61,
   "ppg": 21,
   "leagueRank": 6,
   "rating": 2.7,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.7
  },
  {
   "name": "Jhon Cifuentes",
   "gender": "Male",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 86,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "91f844b2-dd13-45a0-b66d-9b7ea751037a",
   "winPct": 100,
   "diff": 61,
   "ppg": 21,
   "leagueRank": 8,
   "rating": 2.8,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -1.4
  },
  {
   "name": "Xiaohong Fang",
   "gender": "Female",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 89,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "2279ed76-ddf7-4ed7-aeef-e2bc83db3ed4",
   "winPct": 100,
   "diff": 58,
   "ppg": 21,
   "leagueRank": 7,
   "rating": 2.9,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Kristie Capitanelli",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 68,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "4f87890f-1940-405a-82a2-bd2d50b5bf21",
   "winPct": 100,
   "diff": 58,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 3.5,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.6
  },
  {
   "name": "Roberto Marcillo",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 97,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "4516a66f-67b3-4981-a16d-036deb8db9bc",
   "winPct": 100,
   "diff": 50,
   "ppg": 21,
   "leagueRank": 5,
   "rating": 2.7,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.8
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
   "playerId": "9334d28c-6aab-4669-9297-799876b8ca16",
   "winPct": 100,
   "diff": 49,
   "ppg": 21,
   "leagueRank": 11,
   "rating": 1.9,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -1.6
  },
  {
   "name": "Wallace Lee",
   "gender": "Male",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 99,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "ecf2cd14-2d76-4e21-9e99-e86aff72c356",
   "winPct": 100,
   "diff": 48,
   "ppg": 21,
   "leagueRank": 15,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.2
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
   "playerId": "dbe6ecd1-6aad-4f8f-bc44-702ef0be5667",
   "winPct": 100,
   "diff": 47,
   "ppg": 21,
   "leagueRank": 12,
   "rating": 2.3,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Joe Monello",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 83,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "e5eb8990-4b8d-4a10-bff8-29740ce57276",
   "winPct": 100,
   "diff": 43,
   "ppg": 21,
   "leagueRank": 10,
   "rating": 2.2,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1.1
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
   "leagueRank": 9,
   "rating": 2.6,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.1
  },
  {
   "name": "Kirsten Hinds",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
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
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "23bf4ad6-5b88-4d00-93c8-3134ec378f34",
   "winPct": 100,
   "diff": 42,
   "ppg": 21,
   "leagueRank": 4,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "May Syso",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 97,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "e81b7980-75d9-4dab-b9e2-626065c3ee51",
   "winPct": 100,
   "diff": 29,
   "ppg": 21,
   "leagueRank": 16,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1
  },
  {
   "name": "Hongjie Liu",
   "gender": "Male",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 98,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "32208805-a6c4-402d-bdf6-b44c29c35ba6",
   "winPct": 100,
   "diff": 28,
   "ppg": 21,
   "leagueRank": 19,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Charles Buzad",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 102,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "5d3b9d31-abbd-49ef-b63b-fa8a30759147",
   "winPct": 100,
   "diff": 24,
   "ppg": 21,
   "leagueRank": 17,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Alam Mohammad",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 103,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "d621bf00-b03f-478d-a0b6-cab0ba96b28b",
   "winPct": 100,
   "diff": 23,
   "ppg": 21,
   "leagueRank": 20,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1
  },
  {
   "name": "Garry Wright",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 84,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "6c10bca6-6034-42ca-8adc-1532e7e3c629",
   "winPct": 100,
   "diff": 21,
   "ppg": 21,
   "leagueRank": 13,
   "rating": 1.3,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Jenn Guerrini",
   "gender": "Female",
   "team": "One Love",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 85,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "0a61962c-a23d-4651-8153-201d107f4477",
   "winPct": 100,
   "diff": 20,
   "ppg": 21,
   "leagueRank": 14,
   "rating": 1.7,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Rachel Shirley",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 87,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "ff713931-208e-4b8f-9b1d-c7919e6af892",
   "winPct": 100,
   "diff": 18,
   "ppg": 21,
   "leagueRank": 18,
   "rating": 1.4,
   "ratingGames": 5,
   "confidence": 32,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Mark Lederman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 106,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "1181bed8-38bd-4496-8be0-323f36d5d7c4",
   "winPct": 85.7,
   "diff": 39,
   "ppg": 20.7,
   "leagueRank": 23,
   "rating": 1,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Cindy Walters",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 143,
   "totalPointsAgainst": 109,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "e1957c7a-4e30-47e1-bf43-fae97adcf183",
   "winPct": 85.7,
   "diff": 34,
   "ppg": 20.4,
   "leagueRank": 29,
   "rating": 1,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Luis Perez",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 119,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "fe7754f9-404d-4b6d-8499-552ee9f237fa",
   "winPct": 85.7,
   "diff": 26,
   "ppg": 20.7,
   "leagueRank": 26,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Steve Roth",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 122,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "183983b9-993f-471e-ac3d-224dcee6d80f",
   "winPct": 85.7,
   "diff": 23,
   "ppg": 20.7,
   "leagueRank": 36,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Yan Wang",
   "gender": "Male",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 85,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "e9147f78-5bc3-4cab-9b59-6f830a44337c",
   "winPct": 83.3,
   "diff": 39,
   "ppg": 20.7,
   "leagueRank": 30,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.4
  },
  {
   "name": "Marguerite Greener",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 91,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d",
   "winPct": 83.3,
   "diff": 33,
   "ppg": 20.7,
   "leagueRank": 22,
   "rating": 2.5,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Doreen Arleth",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 92,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "869705bd-7c6f-4515-a1a4-d214c92fabb4",
   "winPct": 83.3,
   "diff": 30,
   "ppg": 20.3,
   "leagueRank": 28,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 44,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Tom Matko",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 93,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5",
   "winPct": 83.3,
   "diff": 29,
   "ppg": 20.3,
   "leagueRank": 21,
   "rating": 3.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Vilayvanh Sysounthone",
   "gender": "Female",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 98,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "adcdbc67-29b2-4411-9d74-919d1c7abf0b",
   "winPct": 83.3,
   "diff": 26,
   "ppg": 20.7,
   "leagueRank": 38,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Claudia Calle",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "cf05f9f7-40a6-4861-b9be-020ee81a9c06",
   "winPct": 83.3,
   "diff": 25,
   "ppg": 20.7,
   "leagueRank": 35,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Michael Johnson",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 99,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "4f98756a-9726-48fe-a241-2579f96eee16",
   "winPct": 83.3,
   "diff": 24,
   "ppg": 20.5,
   "leagueRank": 31,
   "rating": 1,
   "ratingGames": 6,
   "confidence": 44,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Stephen Arleth",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 98,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "5a5c19dd-0788-4c96-975f-18c91f580210",
   "winPct": 83.3,
   "diff": 24,
   "ppg": 20.3,
   "leagueRank": 33,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 42,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -1
  },
  {
   "name": "Kate Clow",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 102,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "1bdfe261-94e8-4713-972b-785953b6dd88",
   "winPct": 83.3,
   "diff": 22,
   "ppg": 20.7,
   "leagueRank": 37,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1
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
   "playerId": "36b33227-285b-4959-a3b8-21012748391e",
   "winPct": 83.3,
   "diff": 20,
   "ppg": 20.5,
   "leagueRank": 25,
   "rating": 2.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0
  },
  {
   "name": "Cathy Proctor",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 117,
   "totalPointsAgainst": 102,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "cb02b0c7-7df6-481e-aeb2-5f945a9522bc",
   "winPct": 83.3,
   "diff": 15,
   "ppg": 19.5,
   "leagueRank": 40,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 42,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Sarah Flynn",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 114,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "playerId": "29b01229-f7ed-4692-bdb4-32926b8a7cc5",
   "winPct": 83.3,
   "diff": 8,
   "ppg": 20.3,
   "leagueRank": 45,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Christina Pietrak",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 64,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "753f0571-691f-4de6-b307-50980e237994",
   "winPct": 80,
   "diff": 39,
   "ppg": 20.6,
   "leagueRank": 24,
   "rating": 2,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Julie Chiappa",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 101,
   "totalPointsAgainst": 66,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "7c329f6b-3ee5-4a0a-8cd9-b3d439da6e47",
   "winPct": 80,
   "diff": 35,
   "ppg": 20.2,
   "leagueRank": 27,
   "rating": 1.8,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Mike Leach",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 85,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b",
   "winPct": 80,
   "diff": 18,
   "ppg": 20.6,
   "leagueRank": 32,
   "rating": 1.6,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Qiuwei Feng",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 86,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "5afdbd12-d79e-45ec-ae26-63ea91a262f2",
   "winPct": 80,
   "diff": 17,
   "ppg": 20.6,
   "leagueRank": 34,
   "rating": 1.2,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Saritha Kondra",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 99,
   "totalPointsAgainst": 82,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "b4f3fc0d-6166-4726-9180-2a9a698afcdf",
   "winPct": 80,
   "diff": 17,
   "ppg": 19.8,
   "leagueRank": 39,
   "rating": 1.3,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0
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
   "playerId": "4a01c170-a937-4061-8385-cfb0e00e3742",
   "winPct": 80,
   "diff": 12,
   "ppg": 20.6,
   "leagueRank": 47,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.2
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
   "playerId": "813470f2-6efd-44e2-87b0-c373c5ecacfd",
   "winPct": 75,
   "diff": 24,
   "ppg": 19.8,
   "leagueRank": 41,
   "rating": 0.5,
   "ratingGames": 4,
   "confidence": 38,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.8
  },
  {
   "name": "Marvin Gordon",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 82,
   "totalPointsAgainst": 67,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "1d9d1a52-6704-43c9-a8bf-8e902e260e01",
   "winPct": 75,
   "diff": 15,
   "ppg": 20.5,
   "leagueRank": 42,
   "rating": 1.1,
   "ratingGames": 4,
   "confidence": 39,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.5
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
   "leagueRank": 43,
   "rating": 1.1,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Ben Xie",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 143,
   "totalPointsAgainst": 117,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "ed9f303e-a29c-4172-a72d-6a9a31bf7124",
   "winPct": 71.4,
   "diff": 26,
   "ppg": 20.4,
   "leagueRank": 44,
   "rating": 1.7,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Robert Alexander",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 140,
   "totalPointsAgainst": 117,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "6b844385-0db4-4fa9-a38f-1f79ecef1db0",
   "winPct": 71.4,
   "diff": 23,
   "ppg": 20,
   "leagueRank": 48,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Scott Kindzierski",
   "gender": "Male",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 141,
   "totalPointsAgainst": 119,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "b3c8341b-b3d8-442b-93dc-1da6a5c4e868",
   "winPct": 71.4,
   "diff": 22,
   "ppg": 20.1,
   "leagueRank": 51,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Renee Froeberg",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 141,
   "totalPointsAgainst": 120,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "3804b024-a017-4fa2-90d3-5d726e764f44",
   "winPct": 71.4,
   "diff": 21,
   "ppg": 20.1,
   "leagueRank": 46,
   "rating": 2,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Susan Colicchio",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 140,
   "totalPointsAgainst": 123,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "9443df04-e253-4d24-8d52-6c89bba6b4e1",
   "winPct": 71.4,
   "diff": 17,
   "ppg": 20,
   "leagueRank": 56,
   "rating": -0.6,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1
  },
  {
   "name": "Gajendra Mehta",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 137,
   "totalPointsAgainst": 123,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "9ecb04f7-d32e-4f28-8585-aad932450f89",
   "winPct": 71.4,
   "diff": 14,
   "ppg": 19.6,
   "leagueRank": 54,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 46,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Joanne Rim",
   "gender": "Female",
   "team": "Montville Rocks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 89,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "a6f156e3-7dfa-42ec-8c69-a73c25e55833",
   "winPct": 66.7,
   "diff": 33,
   "ppg": 20.3,
   "leagueRank": 49,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -1.9
  },
  {
   "name": "Ashish Malhotra",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 105,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "c7c10631-26d1-46cf-9c21-84eed5659847",
   "winPct": 66.7,
   "diff": 15,
   "ppg": 20,
   "leagueRank": 59,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "George Chen",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 101,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "36d781d6-de40-4d55-b17f-97f8c8757bd3",
   "winPct": 66.7,
   "diff": 15,
   "ppg": 19.3,
   "leagueRank": 58,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Robert Bernstein",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 105,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "5c119a69-3fc4-40b6-a8e1-dc3504df440a",
   "winPct": 66.7,
   "diff": 14,
   "ppg": 19.8,
   "leagueRank": 50,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Joe Carrano",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 106,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "f6fcffef-8b65-4735-a0bd-ae87f7ea2e25",
   "winPct": 66.7,
   "diff": 14,
   "ppg": 20,
   "leagueRank": 53,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Shawn Maloney",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 121,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "c51970e8-6156-404b-863a-eb694ad67be9",
   "winPct": 66.7,
   "diff": 12,
   "ppg": 20.2,
   "leagueRank": 55,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Kristen Silvestri",
   "gender": "Female",
   "team": "PCKLRAMA",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 121,
   "totalPointsAgainst": 110,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "035a8041-2b2d-4050-a71d-9a8e7fb1b5e6",
   "winPct": 66.7,
   "diff": 11,
   "ppg": 20.2,
   "leagueRank": 64,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Geordielyn Alviola",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 121,
   "totalPointsAgainst": 112,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "0a458710-16fc-4aac-93a1-91ce89d6bacf",
   "winPct": 66.7,
   "diff": 9,
   "ppg": 20.2,
   "leagueRank": 57,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Karen Kelly",
   "gender": "Female",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 117,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "07767191-9167-4314-973d-3798ae6265a9",
   "winPct": 66.7,
   "diff": 8,
   "ppg": 19.5,
   "leagueRank": 60,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 43,
   "strengthOfPartners": -0.6,
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
   "playerId": "03bc5e6c-8df7-4b9d-a0df-37cb4068adac",
   "winPct": 66.7,
   "diff": 6,
   "ppg": 19.8,
   "leagueRank": 62,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Elizabeth Biehl",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 115,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "a10029d9-c75f-4a33-98cd-6173faa99ddc",
   "winPct": 66.7,
   "diff": 1,
   "ppg": 19.3,
   "leagueRank": 65,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0
  },
  {
   "name": "Randi Yezer",
   "gender": "Female",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 113,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "477f09e9-1b92-40e0-ae94-e32a0722f1cd",
   "winPct": 66.7,
   "diff": 0,
   "ppg": 18.8,
   "leagueRank": 72,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Christian Aberin",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 113,
   "totalPointsAgainst": 114,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "d4254f79-f461-4723-9a64-2660985b2702",
   "winPct": 66.7,
   "diff": -1,
   "ppg": 18.8,
   "leagueRank": 73,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Samuel Sickles",
   "gender": "Male",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 71,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "36b88cb3-c746-48d1-b18d-a080a7761a5e",
   "winPct": 60,
   "diff": 30,
   "ppg": 20.2,
   "leagueRank": 52,
   "rating": 1.4,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Robert Mroz",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 89,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "d580c22d-f8c0-4688-90d5-af4f0e180c6d",
   "winPct": 60,
   "diff": 12,
   "ppg": 20.2,
   "leagueRank": 67,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Jim Sintic",
   "gender": "Male",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 100,
   "totalPointsAgainst": 90,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b3317f76-7939-45f1-a100-dbd17d9c768e",
   "winPct": 60,
   "diff": 10,
   "ppg": 20,
   "leagueRank": 63,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Dan He",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 95,
   "totalPointsAgainst": 86,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "f544c236-d1bb-4bcf-bf15-df57dfb4e7f1",
   "winPct": 60,
   "diff": 9,
   "ppg": 19,
   "leagueRank": 71,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Thomas Lum",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 96,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7",
   "winPct": 60,
   "diff": 5,
   "ppg": 20.2,
   "leagueRank": 61,
   "rating": 1.2,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Thomas Licciardello",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 98,
   "totalPointsAgainst": 94,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "ac13b60d-b370-45f4-8980-0ecbdd1b81b4",
   "winPct": 60,
   "diff": 4,
   "ppg": 19.6,
   "leagueRank": 74,
   "rating": -0.1,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Heidi Lipton",
   "gender": "Female",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 97,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "7fbaae89-bf6e-441a-b713-9b1db817dc5c",
   "winPct": 60,
   "diff": 4,
   "ppg": 20.2,
   "leagueRank": 70,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 40,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3
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
   "playerId": "fc8f4c96-b37a-4b4c-a31d-01d270e1bda9",
   "winPct": 60,
   "diff": 2,
   "ppg": 19,
   "leagueRank": 76,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Gail Mackenzie",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 0,
   "outsideSub": true,
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
   "playerId": "493d1f95-ca55-4e30-b627-1f3f8d787449",
   "winPct": 60,
   "diff": -4,
   "ppg": 17.6,
   "leagueRank": 81,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 39,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.2
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
   "playerId": "3e6d0ced-4c54-4733-8fd5-c685729f66ae",
   "winPct": 57.1,
   "diff": 20,
   "ppg": 19.7,
   "leagueRank": 66,
   "rating": 1.7,
   "ratingGames": 7,
   "confidence": 46,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.1
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
   "playerId": "602fc2fd-c2f6-4909-9951-c829b5831548",
   "winPct": 57.1,
   "diff": 17,
   "ppg": 19.3,
   "leagueRank": 77,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 45,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Robert Goldenberg",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 135,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "52940bf9-2379-45c0-94db-829704ea0ecc",
   "winPct": 57.1,
   "diff": 15,
   "ppg": 19.3,
   "leagueRank": 78,
   "rating": -0.1,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.5
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
   "leagueRank": 69,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3
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
   "playerId": "b676efe0-5294-4ebe-ae21-989f42b33ebc",
   "winPct": 50,
   "diff": 25,
   "ppg": 20,
   "leagueRank": 68,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Peter Shen",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 118,
   "totalPointsAgainst": 105,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "7417eca2-2140-47f9-bd14-be210ba9d630",
   "winPct": 50,
   "diff": 13,
   "ppg": 19.7,
   "leagueRank": 75,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0
  },
  {
   "name": "Krystal Johnson",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 105,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "a4fb87af-daed-4bc9-9027-2a4b215c060c",
   "winPct": 50,
   "diff": 11,
   "ppg": 19.3,
   "leagueRank": 80,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Cheryl Klein",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 111,
   "totalPointsAgainst": 106,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "d521a98f-88b6-488e-8903-8c35386df363",
   "winPct": 50,
   "diff": 5,
   "ppg": 18.5,
   "leagueRank": 82,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Jennifer Jones",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 113,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "aae8138e-15d4-44b2-b48c-60c87c40a116",
   "winPct": 50,
   "diff": 4,
   "ppg": 18.8,
   "leagueRank": 89,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Aaron Smith",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 117,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "c52d90c3-f405-4312-8c1d-0a828ce19a18",
   "winPct": 50,
   "diff": 0,
   "ppg": 19.5,
   "leagueRank": 79,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 44,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Toby Athron",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 113,
   "totalPointsAgainst": 114,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "65e91297-9d8e-4aad-a836-8458adc59a75",
   "winPct": 50,
   "diff": -1,
   "ppg": 18.8,
   "leagueRank": 87,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "John Cave",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 118,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "f93f978f-ba60-44ac-b8dc-9e872af0e5c2",
   "winPct": 50,
   "diff": -3,
   "ppg": 19.2,
   "leagueRank": 85,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.1
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
   "playerId": "99f7821f-79d3-4e9e-9a9f-01043edcebee",
   "winPct": 50,
   "diff": -3,
   "ppg": 19,
   "leagueRank": 83,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Andrew Mclean",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 109,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "2d439cdc-347e-4beb-9975-1b31bc46f2df",
   "winPct": 50,
   "diff": -4,
   "ppg": 18.2,
   "leagueRank": 98,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Eileen Clark",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 113,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "2abe95e2-0e73-49b6-aca8-689041f98b94",
   "winPct": 50,
   "diff": -4,
   "ppg": 18.8,
   "leagueRank": 92,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 43,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Pedro Oliveira",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 110,
   "totalPointsAgainst": 117,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "6600b9f3-d27b-4772-8308-5636ac646776",
   "winPct": 50,
   "diff": -7,
   "ppg": 18.3,
   "leagueRank": 86,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.8
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
   "playerId": "938658e5-f3f0-4597-8d1b-8d65a9378673",
   "winPct": 50,
   "diff": -8,
   "ppg": 18.5,
   "leagueRank": 93,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3
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
   "playerId": "3123a017-5268-43cb-8306-d70ac18760c3",
   "winPct": 50,
   "diff": -9,
   "ppg": 18.2,
   "leagueRank": 96,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 42,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Christopher Aiello",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 103,
   "totalPointsAgainst": 112,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "c9ff8d7f-0d8c-4b52-8b15-ae89d132542f",
   "winPct": 50,
   "diff": -9,
   "ppg": 17.2,
   "leagueRank": 104,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Maria Fanfa",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 98,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "98bfa16f-b5e6-4534-a4b9-5b84267284d4",
   "winPct": 50,
   "diff": -19,
   "ppg": 16.3,
   "leagueRank": 109,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Christine Clark",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 139,
   "totalPointsAgainst": 130,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 4,
   "playerId": "e05ce193-53c0-4251-8a44-734c522f7a75",
   "winPct": 42.9,
   "diff": 9,
   "ppg": 19.9,
   "leagueRank": 88,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Rosanna Neis",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 136,
   "totalPointsAgainst": 128,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "b4ef8674-2eff-4b19-80c1-82de7f94d8b7",
   "winPct": 42.9,
   "diff": 8,
   "ppg": 19.4,
   "leagueRank": 84,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Jo Marie Holzhammer",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 132,
   "totalPointsAgainst": 131,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "f4af59de-c7a2-4aa4-a3db-1e3856181ffe",
   "winPct": 42.9,
   "diff": 1,
   "ppg": 18.9,
   "leagueRank": 90,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Nicole Nelson",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 133,
   "totalPointsAgainst": 137,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "2e2b7732-48a3-4102-86f9-555111fa9ae8",
   "winPct": 42.9,
   "diff": -4,
   "ppg": 19,
   "leagueRank": 97,
   "rating": -0.1,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Susan Goeckeler",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 118,
   "totalPointsAgainst": 137,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "winPct": 42.9,
   "diff": -19,
   "ppg": 16.9,
   "leagueRank": 110,
   "rating": -0.9,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Jessie Yan Han",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 94,
   "totalPointsAgainst": 88,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "e913ece6-fc6e-4ef6-aef8-ba623d72fe4b",
   "winPct": 40,
   "diff": 6,
   "ppg": 18.8,
   "leagueRank": 94,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Eric Shipon",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 99,
   "totalPointsAgainst": 96,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "b035d8be-372b-4bec-92be-0b0bde7dce82",
   "winPct": 40,
   "diff": 3,
   "ppg": 19.8,
   "leagueRank": 91,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3
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
   "playerId": "9d439fce-c801-40b3-8e58-c5616fd7c2b7",
   "winPct": 40,
   "diff": -1,
   "ppg": 19.4,
   "leagueRank": 95,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Roni Douber",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 89,
   "totalPointsAgainst": 91,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "8ec58af7-1a0a-445f-a4b8-6b4cdd68d908",
   "winPct": 40,
   "diff": -2,
   "ppg": 17.8,
   "leagueRank": 103,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -0.5
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
   "playerId": "eae8e588-17f6-4f61-ba17-ed73cbe3daf7",
   "winPct": 40,
   "diff": -3,
   "ppg": 18.6,
   "leagueRank": 99,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Katy Taylor",
   "gender": "Female",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 95,
   "totalPointsAgainst": 99,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "2827e15f-71d2-4ced-9841-c5f224f98339",
   "winPct": 40,
   "diff": -4,
   "ppg": 19,
   "leagueRank": 100,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0
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
   "playerId": "928966ea-f05c-4aed-8f98-df1f7313e41c",
   "winPct": 40,
   "diff": -6,
   "ppg": 18.4,
   "leagueRank": 101,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Lisa Yuskevich",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 93,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "f03105d3-576a-4955-909a-24c18a087d1e",
   "winPct": 40,
   "diff": -8,
   "ppg": 18.6,
   "leagueRank": 107,
   "rating": -1,
   "ratingGames": 5,
   "confidence": 38,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Herald Barber",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 90,
   "totalPointsAgainst": 99,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "8bb1e9d8-4569-41d0-8502-a265101a76d6",
   "winPct": 40,
   "diff": -9,
   "ppg": 18,
   "leagueRank": 102,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Nan Feng",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 88,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "37674a49-6b43-48ad-827a-4d3baa1cab1c",
   "winPct": 40,
   "diff": -11,
   "ppg": 17.6,
   "leagueRank": 106,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Nancy Culley",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 82,
   "totalPointsAgainst": 96,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "f58a1856-de9a-46ee-8a63-0445bee6fd3f",
   "winPct": 40,
   "diff": -14,
   "ppg": 16.4,
   "leagueRank": 113,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1
  },
  {
   "name": "Stu Schwartz",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 86,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "083316b5-595a-4b81-90e7-d72ee570e021",
   "winPct": 40,
   "diff": -15,
   "ppg": 17.2,
   "leagueRank": 118,
   "rating": -1,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.2
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
   "playerId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7",
   "winPct": 40,
   "diff": -17,
   "ppg": 16.8,
   "leagueRank": 117,
   "rating": -0.8,
   "ratingGames": 5,
   "confidence": 40,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.6
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
   "playerId": "da2dbedd-2a9d-4b7e-924c-374e11dcddd8",
   "winPct": 40,
   "diff": -18,
   "ppg": 16.2,
   "leagueRank": 119,
   "rating": -0.2,
   "ratingGames": 5,
   "confidence": 40,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "John Laspina",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 111,
   "totalPointsAgainst": 110,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "9a0e3b23-efa6-4c87-bc93-f8fa1bbde474",
   "winPct": 33.3,
   "diff": 1,
   "ppg": 18.5,
   "leagueRank": 108,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Cyndee Catalano",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 104,
   "totalPointsAgainst": 111,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "7b807cdf-4322-4979-b810-acae5cc05409",
   "winPct": 33.3,
   "diff": -7,
   "ppg": 17.3,
   "leagueRank": 116,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1
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
   "leagueRank": 105,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.3
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
   "playerId": "9b43d5cd-a837-4958-a69e-404061700cc6",
   "winPct": 33.3,
   "diff": -11,
   "ppg": 18.5,
   "leagueRank": 112,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Enid Lum",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 107,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "fa4eb637-9da5-4418-9135-c41cca7e6ced",
   "winPct": 33.3,
   "diff": -13,
   "ppg": 17.8,
   "leagueRank": 111,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Shobana Ravishankar",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 102,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "12f7de26-e375-4efe-a282-f292bd8ca719",
   "winPct": 33.3,
   "diff": -14,
   "ppg": 17,
   "leagueRank": 114,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Kathleen Grennan",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 102,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "84092931-7836-43e8-a35c-790bd5555b1a",
   "winPct": 33.3,
   "diff": -18,
   "ppg": 17,
   "leagueRank": 120,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Stephen Stasiulewicz",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 92,
   "totalPointsAgainst": 119,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "40a679d7-818c-46dc-872c-5e1cdf926e44",
   "winPct": 33.3,
   "diff": -27,
   "ppg": 15.3,
   "leagueRank": 123,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Robert Toledo",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 130,
   "totalPointsAgainst": 134,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "a1e0d6a6-b8d4-47b7-bdfc-6cb8670a421d",
   "winPct": 28.6,
   "diff": -4,
   "ppg": 18.6,
   "leagueRank": 115,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Stephen Villani",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 106,
   "totalPointsAgainst": 143,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "cc8cfbf1-a6d3-40d7-99a9-eb20343774eb",
   "winPct": 28.6,
   "diff": -37,
   "ppg": 15.1,
   "leagueRank": 138,
   "rating": -2.4,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8
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
   "playerId": "abd55992-7237-4a92-817d-3d39388369c9",
   "winPct": 25,
   "diff": -21,
   "ppg": 15.3,
   "leagueRank": 135,
   "rating": -1.2,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.9
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
   "playerId": "ce787b4f-30b9-4fd0-a12a-caba1f27ca68",
   "winPct": 25,
   "diff": -33,
   "ppg": 16,
   "leagueRank": 127,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1
  },
  {
   "name": "Jenn Zhang",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 87,
   "totalPointsAgainst": 96,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "7b374f2a-8e98-445a-8ac1-f373be68f1e5",
   "winPct": 20,
   "diff": -9,
   "ppg": 17.4,
   "leagueRank": 124,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Kenneth Pickett",
   "gender": "Male",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 93,
   "totalPointsAgainst": 102,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "98d93578-da83-40f7-ba1d-ac42a61c848c",
   "winPct": 20,
   "diff": -9,
   "ppg": 18.6,
   "leagueRank": 122,
   "rating": -1.2,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3
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
   "leagueRank": 121,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 38,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.8
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
   "playerId": "4ef265ed-35c0-4d1d-a51e-a258891a9261",
   "winPct": 20,
   "diff": -14,
   "ppg": 17.4,
   "leagueRank": 125,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Rayleen Romeo",
   "gender": "Female",
   "team": "Dill Dinkers Lansdale",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 86,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "ed39904c-85db-4a4d-ba86-1e5c7f98529a",
   "winPct": 20,
   "diff": -15,
   "ppg": 17.2,
   "leagueRank": 140,
   "rating": -2.6,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5
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
   "playerId": "be327e7d-88f5-4531-b6b9-a2ff187578a4",
   "winPct": 20,
   "diff": -16,
   "ppg": 17.4,
   "leagueRank": 131,
   "rating": -1.4,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Ericka Lyn Mayer",
   "gender": "Female",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 86,
   "totalPointsAgainst": 102,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "442d80c7-8eaf-413b-b99b-7cdaddb08b7c",
   "winPct": 20,
   "diff": -16,
   "ppg": 17.2,
   "leagueRank": 132,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Carolyn Coonan",
   "gender": "Female",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 83,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "a6669cc7-9c23-4088-8e49-e529dc9b46a8",
   "winPct": 20,
   "diff": -20,
   "ppg": 16.6,
   "leagueRank": 139,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Yolanda Li",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 78,
   "totalPointsAgainst": 99,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "c27bd9a5-be16-49eb-a849-d3a556ab1d75",
   "winPct": 20,
   "diff": -21,
   "ppg": 15.6,
   "leagueRank": 145,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0
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
   "playerId": "3f619777-f9a4-4b60-b0a7-6d3c8b0d64db",
   "winPct": 20,
   "diff": -21,
   "ppg": 16,
   "leagueRank": 144,
   "rating": -2,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Michael-John Van Rhyn",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 79,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "9d3946e6-1bab-4f1c-911c-81e21eb6caf1",
   "winPct": 20,
   "diff": -24,
   "ppg": 15.8,
   "leagueRank": 133,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Joe Chin",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
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
   "clutchLosses": 0,
   "playerId": "6ff12922-82df-486a-a686-c5a77674cbf4",
   "winPct": 20,
   "diff": -27,
   "ppg": 15.2,
   "leagueRank": 148,
   "rating": -2.1,
   "ratingGames": 5,
   "confidence": 40,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Stephen Levitt",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 71,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "d8be7fe2-86ab-439d-b245-fe02733b80d3",
   "winPct": 20,
   "diff": -32,
   "ppg": 14.2,
   "leagueRank": 147,
   "rating": -1,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Julian Stamper",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 67,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "e66968be-773e-47ec-9f2c-10d7f2bcd3af",
   "winPct": 20,
   "diff": -36,
   "ppg": 13.4,
   "leagueRank": 158,
   "rating": -2.9,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Margaret Bayse",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 62,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "941eff8b-b056-483d-b927-48cf751a04d9",
   "winPct": 20,
   "diff": -41,
   "ppg": 12.4,
   "leagueRank": 160,
   "rating": -2.9,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Gwen Leach",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 58,
   "totalPointsAgainst": 100,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "1ca5f8b5-dd7b-4761-94ed-6eb61c36eb78",
   "winPct": 20,
   "diff": -42,
   "ppg": 11.6,
   "leagueRank": 164,
   "rating": -2.2,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 1.1
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
   "playerId": "75e4a96f-5f49-4dec-97f2-6a79d5d290f4",
   "winPct": 16.7,
   "diff": -13,
   "ppg": 17.8,
   "leagueRank": 129,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Raffaella Pernice",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 108,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "f886bdf8-6b28-4b31-9587-fe6d2e9aea4a",
   "winPct": 16.7,
   "diff": -16,
   "ppg": 18,
   "leagueRank": 128,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Michael Cisar",
   "gender": "Male",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 104,
   "totalPointsAgainst": 123,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "7e8fcb9e-d338-4358-9181-f03e57ba5c7c",
   "winPct": 16.7,
   "diff": -19,
   "ppg": 17.3,
   "leagueRank": 136,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Rita Hung",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 104,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "42cd2ea9-67c6-4d62-ad7f-8005e5c03606",
   "winPct": 16.7,
   "diff": -20,
   "ppg": 17.3,
   "leagueRank": 126,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1
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
   "leagueRank": 142,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Derek Manwaring",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 102,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "ec511d19-2f10-425b-828f-708e5365bfcf",
   "winPct": 16.7,
   "diff": -22,
   "ppg": 17,
   "leagueRank": 137,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 41,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5
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
   "playerId": "4b8bb97a-f15c-4f8d-926f-8a19379d6cfa",
   "winPct": 16.7,
   "diff": -26,
   "ppg": 16.3,
   "leagueRank": 143,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Ting Chen",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 96,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "9642a1bd-ed0a-4d65-9c6e-8f0c04721c75",
   "winPct": 16.7,
   "diff": -28,
   "ppg": 16,
   "leagueRank": 141,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Mark Pleasanton",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 85,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "f0d9f371-371e-4625-ad0a-aea8da83fb8e",
   "winPct": 16.7,
   "diff": -39,
   "ppg": 14.2,
   "leagueRank": 155,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Karen Gallione",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 83,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "401902c9-4e46-4ed7-9995-643dc73f135a",
   "winPct": 16.7,
   "diff": -41,
   "ppg": 13.8,
   "leagueRank": 151,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Joy Perry",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 73,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "a9f2a010-b832-4aed-b68e-28fecd6a297d",
   "winPct": 16.7,
   "diff": -48,
   "ppg": 12.2,
   "leagueRank": 163,
   "rating": -2.3,
   "ratingGames": 6,
   "confidence": 43,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Alex Lawrason",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 122,
   "totalPointsAgainst": 144,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b925cfcd-a7a4-4c6c-a604-5b7997bceebb",
   "winPct": 14.3,
   "diff": -22,
   "ppg": 17.4,
   "leagueRank": 134,
   "rating": -1.4,
   "ratingGames": 7,
   "confidence": 46,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Janine Thompson",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 101,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "e9c2ebf6-88d5-485d-be0f-8c71488231ae",
   "winPct": 14.3,
   "diff": -44,
   "ppg": 14.4,
   "leagueRank": 150,
   "rating": -1.4,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Denise Rempson",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 98,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "2e13698d-f902-43c1-b5b1-226d40d7af3d",
   "winPct": 14.3,
   "diff": -47,
   "ppg": 14,
   "leagueRank": 153,
   "rating": -0.7,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 139,
   "totalPointsAgainst": 164,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62",
   "winPct": 12.5,
   "diff": -25,
   "ppg": 17.4,
   "leagueRank": 130,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 51,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6
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
   "leagueRank": 152,
   "rating": -1.7,
   "ratingGames": 8,
   "confidence": 51,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Ronald Wong",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 3,
   "wins": 0,
   "losses": 3,
   "pointsWon": 51,
   "totalPointsAgainst": 63,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "6518a1dd-c30a-464a-a378-d8080c480742",
   "winPct": 0,
   "diff": -12,
   "ppg": 17,
   "leagueRank": 146,
   "rating": -0.3,
   "ratingGames": 3,
   "confidence": 33,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Sara Renzulli",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 87,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "21da9d6f-1118-44a7-984d-0565cb46f43d",
   "winPct": 0,
   "diff": -18,
   "ppg": 17.4,
   "leagueRank": 149,
   "rating": -1.4,
   "ratingGames": 5,
   "confidence": 32,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Leonard Procaccino",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 62,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "fe15dec9-7fc3-4a99-9035-ff18c41bb6d2",
   "winPct": 0,
   "diff": -22,
   "ppg": 15.5,
   "leagueRank": 167,
   "rating": -1.7,
   "ratingGames": 4,
   "confidence": 36,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.7
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
   "playerId": "8767c73e-fa5a-4e68-9ded-850b7ab50693",
   "winPct": 0,
   "diff": -22,
   "ppg": 16.6,
   "leagueRank": 154,
   "rating": -0.8,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.9
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
   "leagueRank": 157,
   "rating": -1.3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Virasack Vorabouth",
   "gender": "Male",
   "team": "Allstar Pickler",
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
   "clutchLosses": 2,
   "playerId": "a478ffa6-7bfc-4c67-9b3d-0aad661a58bc",
   "winPct": 0,
   "diff": -25,
   "ppg": 14.8,
   "leagueRank": 162,
   "rating": -1,
   "ratingGames": 4,
   "confidence": 39,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Lisa Braumann",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 78,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b3d8b1e5-378c-4b5b-bc50-dfa39e6c8311",
   "winPct": 0,
   "diff": -27,
   "ppg": 15.6,
   "leagueRank": 159,
   "rating": -1.3,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Stella Ott",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 95,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "a9c9b8dc-e4b6-49b3-9ec3-de99246526fa",
   "winPct": 0,
   "diff": -31,
   "ppg": 15.8,
   "leagueRank": 156,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Izabel Illipronti",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
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
   "playerId": "e4b1fba4-7df9-45eb-ad2f-d6b352d25cf4",
   "winPct": 0,
   "diff": -32,
   "ppg": 14.6,
   "leagueRank": 166,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.8
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
   "leagueRank": 170,
   "rating": -2,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Gary Grzankowski",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 72,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "67f81846-bb41-4b0b-8d77-c0d876a4561c",
   "winPct": 0,
   "diff": -33,
   "ppg": 14.4,
   "leagueRank": 168,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.5
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
   "playerId": "39c42fdb-bb35-458b-9460-b60d8fa5fcdb",
   "winPct": 0,
   "diff": -34,
   "ppg": 14.2,
   "leagueRank": 171,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 39,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Cromwell Palomares",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 89,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "bc82cbed-1dfa-43fa-9cc5-1f12b6c4fe76",
   "winPct": 0,
   "diff": -37,
   "ppg": 14.8,
   "leagueRank": 161,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Cesar Fojas",
   "gender": "Male",
   "team": "Montville Dragons",
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
   "playerId": "7c31fae2-4ca2-47e5-a531-cdcbdb069c80",
   "winPct": 0,
   "diff": -37,
   "ppg": 13.6,
   "leagueRank": 169,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Jinghua Shi",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 46,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "83effba4-f2b6-4576-93ef-1ba487b02f0c",
   "winPct": 0,
   "diff": -38,
   "ppg": 11.5,
   "leagueRank": 175,
   "rating": -1.5,
   "ratingGames": 4,
   "confidence": 34,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 2.4
  },
  {
   "name": "Stephen Cordaro",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 67,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "5c67007f-4ceb-44a8-873d-0c00553626a5",
   "winPct": 0,
   "diff": -38,
   "ppg": 13.4,
   "leagueRank": 172,
   "rating": -1.8,
   "ratingGames": 5,
   "confidence": 39,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Lance Arlaus",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 66,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "3b4a5b66-69e2-44be-96c8-b48d93e9ae6f",
   "winPct": 0,
   "diff": -39,
   "ppg": 13.2,
   "leagueRank": 173,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Jonathan Basa",
   "gender": "Male",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 78,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "916dafeb-720f-471b-9609-7f338b793ed3",
   "winPct": 0,
   "diff": -48,
   "ppg": 13,
   "leagueRank": 174,
   "rating": -2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Yayuan Lien",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 117,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "f4725f25-ce53-4104-8f94-d558d8c39e84",
   "winPct": 0,
   "diff": -51,
   "ppg": 14.6,
   "leagueRank": 165,
   "rating": -2.5,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1
  },
  {
   "name": "Vincent Lamarco",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 47,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "0930c5f6-0231-431b-b9bb-609e61b519c1",
   "winPct": 0,
   "diff": -58,
   "ppg": 9.4,
   "leagueRank": 177,
   "rating": -4,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Jemma Bucks",
   "gender": "Female",
   "team": "Montville Dragons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 62,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "f0acebf7-62fd-455a-9fa4-c5ca589fc1b5",
   "winPct": 0,
   "diff": -64,
   "ppg": 10.3,
   "leagueRank": 176,
   "rating": -3.9,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.4
  }
 ],
 "teams": [
  {
   "name": "Montville Rocks",
   "w": 1,
   "l": 0,
   "pf": 684,
   "pa": 459,
   "gw": 30,
   "gl": 2,
   "diff": 225,
   "gameDiff": 28,
   "power": 1.6,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     15,
     1
    ],
    "male": [
     8,
     0
    ],
    "female": [
     7,
     1
    ]
   }
  },
  {
   "name": "PCKLRAMA",
   "w": 1,
   "l": 0,
   "pf": 677,
   "pa": 525,
   "gw": 28,
   "gl": 4,
   "diff": 152,
   "gameDiff": 24,
   "power": 1.1,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     13,
     3
    ],
    "male": [
     8,
     0
    ],
    "female": [
     7,
     1
    ]
   }
  },
  {
   "name": "Pickleball Palace",
   "w": 1,
   "l": 0,
   "pf": 663,
   "pa": 521,
   "gw": 25,
   "gl": 7,
   "diff": 142,
   "gameDiff": 18,
   "power": 1.1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     10,
     6
    ],
    "male": [
     7,
     1
    ],
    "female": [
     8,
     0
    ]
   }
  },
  {
   "name": "Dill Dinkers Lansdale",
   "w": 1,
   "l": 0,
   "pf": 655,
   "pa": 515,
   "gw": 23,
   "gl": 9,
   "diff": 140,
   "gameDiff": 14,
   "power": 0.9,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     11,
     5
    ],
    "male": [
     6,
     2
    ],
    "female": [
     6,
     2
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Tinton Falls",
   "w": 1,
   "l": 0,
   "pf": 651,
   "pa": 567,
   "gw": 21,
   "gl": 11,
   "diff": 84,
   "gameDiff": 10,
   "power": 0.6,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "Southeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     9,
     7
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
   "name": "Picklr Newtown",
   "w": 1,
   "l": 0,
   "pf": 631,
   "pa": 593,
   "gw": 18,
   "gl": 14,
   "diff": 38,
   "gameDiff": 4,
   "power": 0.3,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
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
     4,
     4
    ]
   }
  },
  {
   "name": "Stelton Sports",
   "w": 1,
   "l": 0,
   "pf": 614,
   "pa": 590,
   "gw": 17,
   "gl": 15,
   "diff": 24,
   "gameDiff": 2,
   "power": 0.2,
   "powerRank": 7,
   "pod": 1,
   "reportedPod": "Southeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
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
     5,
     3
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 1,
   "l": 0,
   "pf": 629,
   "pa": 625,
   "gw": 16,
   "gl": 16,
   "diff": 4,
   "gameDiff": 0,
   "power": 0,
   "powerRank": 8,
   "pod": 1,
   "reportedPod": "Southeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     9,
     7
    ],
    "male": [
     5,
     3
    ],
    "female": [
     2,
     6
    ]
   }
  },
  {
   "name": "PickleRage Union County",
   "w": 1,
   "l": 0,
   "pf": 32,
   "pa": 0,
   "gw": 0,
   "gl": 0,
   "diff": 32,
   "gameDiff": 0,
   "power": null,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
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
  },
  {
   "name": "One Love",
   "w": 0,
   "l": 1,
   "pf": 625,
   "pa": 629,
   "gw": 16,
   "gl": 16,
   "diff": -4,
   "gameDiff": 0,
   "power": 0,
   "powerRank": 9,
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
     6,
     2
    ]
   }
  },
  {
   "name": "Picklr Fair Lawn",
   "w": 0,
   "l": 1,
   "pf": 590,
   "pa": 614,
   "gw": 15,
   "gl": 17,
   "diff": -24,
   "gameDiff": -2,
   "power": -0.1,
   "powerRank": 10,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     9,
     7
    ],
    "male": [
     3,
     5
    ],
    "female": [
     3,
     5
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 0,
   "l": 1,
   "pf": 593,
   "pa": 631,
   "gw": 14,
   "gl": 18,
   "diff": -38,
   "gameDiff": -4,
   "power": -0.3,
   "powerRank": 11,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     6,
     10
    ],
    "male": [
     4,
     4
    ],
    "female": [
     4,
     4
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
   "power": -0.5,
   "powerRank": 12,
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
   "name": "Picklr Newark",
   "w": 0,
   "l": 1,
   "pf": 515,
   "pa": 655,
   "gw": 9,
   "gl": 23,
   "diff": -140,
   "gameDiff": -14,
   "power": -0.9,
   "powerRank": 14,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     5,
     11
    ],
    "male": [
     2,
     6
    ],
    "female": [
     2,
     6
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Watchung",
   "w": 0,
   "l": 1,
   "pf": 521,
   "pa": 663,
   "gw": 7,
   "gl": 25,
   "diff": -142,
   "gameDiff": -18,
   "power": -0.8,
   "powerRank": 13,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
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
     0,
     8
    ]
   }
  },
  {
   "name": "Allstar Pickler",
   "w": 0,
   "l": 1,
   "pf": 525,
   "pa": 677,
   "gw": 4,
   "gl": 28,
   "diff": -152,
   "gameDiff": -24,
   "power": -1,
   "powerRank": 15,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
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
     1,
     7
    ]
   }
  },
  {
   "name": "Montville Dragons",
   "w": 0,
   "l": 1,
   "pf": 459,
   "pa": 684,
   "gw": 2,
   "gl": 30,
   "diff": -225,
   "gameDiff": -28,
   "power": -1.4,
   "powerRank": 16,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
   "fmt": {
    "mixed": [
     1,
     15
    ],
    "male": [
     0,
     8
    ],
    "female": [
     1,
     7
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 0,
   "l": 0,
   "pf": 0,
   "pa": 0,
   "gw": 0,
   "gl": 0,
   "diff": 0,
   "gameDiff": 0,
   "power": null,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
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
  },
  {
   "name": "APC Garden State",
   "w": 0,
   "l": 0,
   "pf": 0,
   "pa": 0,
   "gw": 0,
   "gl": 0,
   "diff": 0,
   "gameDiff": 0,
   "power": null,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Northeast / Northwest / Southeast / Southwest",
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
  },
  {
   "name": "Home Court",
   "w": 0,
   "l": 0,
   "pf": 0,
   "pa": 0,
   "gw": 0,
   "gl": 0,
   "diff": 0,
   "gameDiff": 0,
   "power": null,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
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
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 0,
   "l": 1,
   "pf": 0,
   "pa": 32,
   "gw": 0,
   "gl": 0,
   "diff": -32,
   "gameDiff": 0,
   "power": null,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast / Northwest / Southeast / Southwest",
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
    "Ying Lin",
    "Xilin Zhao",
    "Yayuan Lien",
    "Ronald Wong",
    "Elias Eid"
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
    "Tara Lombardo",
    "Erik Lombardo",
    "Jenn Guerrini"
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
      "Gail Mackenzie"
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
      "Gail Mackenzie",
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
      "Gail Mackenzie",
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
      "Gail Mackenzie"
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
      "Gail Mackenzie",
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
    "Gail Mackenzie",
    "Willie Simmons"
   ]
  },
  {
   "result": null,
   "week": 2,
   "home": "Picklr Newtown",
   "away": "APC Garden State",
   "time": "2026-08-30T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Premiere",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-08-30T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Flemington",
   "away": "Picklr Newark",
   "time": "2026-08-30T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Home Court",
   "away": "PickleRage Union County",
   "time": "2026-08-30T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-08-30T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Allstar Pickler",
   "away": "Pickleball Palace",
   "time": "2026-08-30T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "ACE Moorestown",
   "away": "Dill Dinkers Lansdale",
   "time": "2026-08-30T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Picklr Fair Lawn",
   "away": "Montville Dragons",
   "time": "2026-08-30T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Montville Rocks",
   "away": "PCKLRAMA",
   "time": "2026-08-30T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Stelton Sports",
   "away": "One Love",
   "time": "2026-08-30T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Kingdom Watchung",
   "away": "Home Court",
   "time": "2026-09-13T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Flemington",
   "away": "Montville Dragons",
   "time": "2026-09-13T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "PickleRage Union County",
   "away": "One Love",
   "time": "2026-09-13T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Allstar Pickler",
   "away": "Montville Rocks",
   "time": "2026-09-13T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Palace",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-13T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "PCKLRAMA",
   "away": "Picklr Fair Lawn",
   "time": "2026-09-13T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Stelton Sports",
   "time": "2026-09-13T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "ACE Moorestown",
   "away": "Picklr Newark",
   "time": "2026-09-13T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Dill Dinkers Lansdale",
   "away": "Picklr Newtown",
   "time": "2026-09-13T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Monroe",
   "away": "Premiere",
   "time": "2026-09-13T14:00:00",
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
   "home": "Pickleball Palace",
   "away": "Montville Rocks",
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
 "meta": {
  "matchesPlayed": 9,
  "weeks": "1",
  "totalPlayers": 177,
  "ratingHistoryWeeks": [
   1
  ],
  "divisionSlug": "c43b8608",
  "hasPlayoffs": false,
  "typicalDay": "Sundays",
  "detailFile": "detail-c43b8608.js",
  "clubName": "",
  "divisionName": "3.5 (50+)",
  "leagueType": "travel",
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
    "Northwest": [
     "Allstar Pickler",
     "Montville Dragons",
     "Montville Rocks",
     "PCKLRAMA",
     "Picklr Fair Lawn"
    ],
    "Northeast": [
     "Home Court",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Watchung",
     "Pickleball Palace",
     "PickleRage Union County"
    ],
    "Southwest": [
     "ACE Moorestown",
     "APC Garden State",
     "Dill Dinkers Lansdale",
     "Flemington",
     "Picklr Newark",
     "Picklr Newtown"
    ],
    "Southeast": [
     "Monroe",
     "One Love",
     "Pickleball Kingdom Tinton Falls",
     "Premiere",
     "Stelton Sports"
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
  DATA.meta.asOf = "2026-08-25";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["c43b8608"] = DATA;
})();
