// Array över filmer, respektive film innehåller:
//  - Ett ID
//  - Filmtitel
//  - Årtal då filmen släpptes
//  - Genre
//  - Array över skådespelare (varje siffra representerar `actorId`, se nästa array)
//  - Regissörens `actorId`

const MOVIES = [
  {
    "movieId": 1,
    "title": "CandmovieIdate, The",
    "release": 2001,
    "genre": "Drama",
    "actors": [
      13,
      15,
      20,
      21,
      14
    ],
    "directorId": 28
  },
  {
    "movieId": 2,
    "title": "Kiss Me Goodbye",
    "release": 1986,
    "genre": "Comedy",
    "actors": [
      18,
      0,
      13,
      35
    ],
    "directorId": 13
  },
  {
    "movieId": 3,
    "title": "This Property is Condemned",
    "release": 1985,
    "genre": "Drama|Romance",
    "actors": [
      39,
      10,
      50,
      35
    ],
    "directorId": 3
  },
  {
    "movieId": 4,
    "title": "Enigma",
    "release": 1998,
    "genre": "Drama|Sci-Fi",
    "actors": [
      21,
      39,
      39,
      34
    ],
    "directorId": 17
  },
  {
    "movieId": 5,
    "title": "Anastasia",
    "release": 2014,
    "genre": "Drama",
    "actors": [
      14,
      35
    ],
    "directorId": 0
  },
  {
    "movieId": 6,
    "title": "Land That Time Forgot, The",
    "release": 1999,
    "genre": "Adventure|Sci-Fi",
    "actors": [
      44,
      32
    ],
    "directorId": 9
  },
  {
    "movieId": 7,
    "title": "Whitecoats",
    "release": 2010,
    "genre": "Comedy",
    "actors": [
      30,
      5,
      50
    ],
    "directorId": 19
  },
  {
    "movieId": 8,
    "title": "Henry Poole is Here",
    "release": 1993,
    "genre": "Drama|Mystery",
    "actors": [
      12,
      28,
      17
    ],
    "directorId": 28
  },
  {
    "movieId": 9,
    "title": "Hotte in Paradise (Hotte im Paradies)",
    "release": 1968,
    "genre": "Drama",
    "actors": [
      6,
      19
    ],
    "directorId": 13
  },
  {
    "movieId": 10,
    "title": "Ghost Adventures",
    "release": 1985,
    "genre": "Documentary",
    "actors": [
      1,
      21
    ],
    "directorId": 3
  },
  {
    "movieId": 11,
    "title": "Stacy",
    "release": 2009,
    "genre": "Comedy|Horror",
    "actors": [
      16,
      15,
      10,
      34,
      50
    ],
    "directorId": 6
  },
  {
    "movieId": 12,
    "title": "Wog Boy, The",
    "release": 1977,
    "genre": "Comedy",
    "actors": [
      40,
      14,
      6,
      42
    ],
    "directorId": 47
  },
  {
    "movieId": 13,
    "title": "Two for the Road",
    "release": 1959,
    "genre": "Comedy|Drama|Romance",
    "actors": [
      10,
      28,
      17,
      0,
      29
    ],
    "directorId": 21
  },
  {
    "movieId": 14,
    "title": "Third World Cop",
    "release": 1967,
    "genre": "Action",
    "actors": [
      49,
      35,
      37,
      11,
      25
    ],
    "directorId": 34
  },
  {
    "movieId": 15,
    "title": "End of Summer, The (Early Autumn) (Kohayagawa-ke no aki)",
    "release": 2009,
    "genre": "Drama",
    "actors": [
      5,
      40
    ],
    "directorId": 4
  },
  {
    "movieId": 16,
    "title": "Final Approach",
    "release": 1974,
    "genre": "Sci-Fi|Thriller",
    "actors": [
      33,
      22,
      4,
      37
    ],
    "directorId": 24
  },
  {
    "movieId": 17,
    "title": "Butterflies Have No Memories",
    "release": 1963,
    "genre": "(no genres listed)",
    "actors": [
      47,
      0
    ],
    "directorId": 49
  },
  {
    "movieId": 18,
    "title": "Gravity",
    "release": 2018,
    "genre": "Action|Sci-Fi|IMAX",
    "actors": [
      21,
      39
    ],
    "directorId": 25
  },
  {
    "movieId": 19,
    "title": "Superman Unbound",
    "release": 2005,
    "genre": "Action|Adventure|Animation",
    "actors": [
      12,
      7,
      23,
      46
    ],
    "directorId": 38
  },
  {
    "movieId": 20,
    "title": "Living with Wolves",
    "release": 1996,
    "genre": "Documentary",
    "actors": [
      26,
      3
    ],
    "directorId": 10
  },
  {
    "movieId": 21,
    "title": "Apartment for Peggy",
    "release": 2011,
    "genre": "Drama",
    "actors": [
      44,
      40,
      47,
      46
    ],
    "directorId": 41
  },
  {
    "movieId": 22,
    "title": "Ip Man 2",
    "release": 1981,
    "genre": "Action",
    "actors": [
      19,
      11
    ],
    "directorId": 5
  },
  {
    "movieId": 23,
    "title": "Beavis and Butt-Head Do America",
    "release": 2000,
    "genre": "Adventure|Animation|Comedy|Crime",
    "actors": [
      19,
      45,
      13,
      24,
      48
    ],
    "directorId": 39
  },
  {
    "movieId": 24,
    "title": "Clubland (a.k.a. Introducing the Dwights)",
    "release": 2017,
    "genre": "Comedy|Drama",
    "actors": [
      11,
      39,
      6,
      46
    ],
    "directorId": 46
  },
  {
    "movieId": 25,
    "title": "One Hour Photo",
    "release": 1960,
    "genre": "Drama|Thriller",
    "actors": [
      25,
      21,
      28,
      10
    ],
    "directorId": 44
  },
  {
    "movieId": 26,
    "title": "Crime Spree",
    "release": 1977,
    "genre": "Comedy|Crime",
    "actors": [
      12,
      17,
      2,
      28
    ],
    "directorId": 35
  },
  {
    "movieId": 27,
    "title": "Escaflowne: The Movie (Escaflowne)",
    "release": 1956,
    "genre": "Action|Adventure|Animation|Drama|Fantasy",
    "actors": [
      28,
      37,
      24
    ],
    "directorId": 13
  },
  {
    "movieId": 28,
    "title": "Africa addio",
    "release": 1980,
    "genre": "Documentary",
    "actors": [
      43,
      33
    ],
    "directorId": 4
  },
  {
    "movieId": 29,
    "title": "Frankenstein",
    "release": 1966,
    "genre": "Drama|Horror|Sci-Fi",
    "actors": [
      8,
      22
    ],
    "directorId": 31
  },
  {
    "movieId": 30,
    "title": "Rebirth",
    "release": 2018,
    "genre": "Documentary",
    "actors": [
      11,
      24,
      4,
      47,
      1
    ],
    "directorId": 13
  },
  {
    "movieId": 31,
    "title": "Hamburger Hill",
    "release": 2012,
    "genre": "Action|Drama|War",
    "actors": [
      27,
      31,
      4
    ],
    "directorId": 32
  },
  {
    "movieId": 32,
    "title": "Me Two (Personne aux deux personnes, La)",
    "release": 1998,
    "genre": "Comedy|Fantasy",
    "actors": [
      17,
      23,
      27,
      31,
      21
    ],
    "directorId": 35
  },
  {
    "movieId": 33,
    "title": "Castle of the Living Dead (Castello Dei Morti Vivi, Il)",
    "release": 1993,
    "genre": "Horror|Sci-Fi|Thriller",
    "actors": [
      32,
      21
    ],
    "directorId": 25
  },
  {
    "movieId": 34,
    "title": "Buddy Buddy",
    "release": 2014,
    "genre": "Comedy",
    "actors": [
      18,
      17,
      13
    ],
    "directorId": 24
  },
  {
    "movieId": 35,
    "title": "Bee Season",
    "release": 1995,
    "genre": "Drama",
    "actors": [
      21,
      26,
      14,
      26,
      38
    ],
    "directorId": 9
  },
  {
    "movieId": 36,
    "title": "44 Minutes: The North Hollywood Shoot-Out",
    "release": 1981,
    "genre": "Action|Crime",
    "actors": [
      27,
      36,
      24,
      30
    ],
    "directorId": 8
  },
  {
    "movieId": 37,
    "title": "Barfi!",
    "release": 1956,
    "genre": "Comedy|Drama|Romance",
    "actors": [
      48,
      5,
      9,
      40,
      31
    ],
    "directorId": 15
  },
  {
    "movieId": 38,
    "title": "Buddy Boy",
    "release": 1979,
    "genre": "Drama|Thriller",
    "actors": [
      30,
      22,
      6,
      37
    ],
    "directorId": 26
  },
  {
    "movieId": 39,
    "title": "Clay Bird, The (Matir moina)",
    "release": 1959,
    "genre": "Drama",
    "actors": [
      5,
      27,
      32,
      25
    ],
    "directorId": 50
  },
  {
    "movieId": 40,
    "title": "Primary Colors",
    "release": 1964,
    "genre": "Comedy|Drama",
    "actors": [
      30,
      47,
      35,
      50,
      23
    ],
    "directorId": 30
  },
  {
    "movieId": 41,
    "title": "Margaret",
    "release": 1985,
    "genre": "Comedy|Drama|Romance",
    "actors": [
      14,
      34,
      32
    ],
    "directorId": 42
  },
  {
    "movieId": 42,
    "title": "Eerie Tales (Unheimliche Geschichten)",
    "release": 2016,
    "genre": "Fantasy|Horror|Mystery",
    "actors": [
      48,
      15,
      27,
      36
    ],
    "directorId": 40
  },
  {
    "movieId": 43,
    "title": "Pathetic Fallacy (Ajantrik)",
    "release": 1980,
    "genre": "Drama",
    "actors": [
      40,
      40,
      32,
      32
    ],
    "directorId": 38
  },
  {
    "movieId": 44,
    "title": "Every Stewardess Goes to Heaven (Todas las azafatas van al cielo)",
    "release": 1999,
    "genre": "Drama|Romance",
    "actors": [
      8,
      24,
      0
    ],
    "directorId": 43
  },
  {
    "movieId": 45,
    "title": "Mad Adventures of Rabbi Jacob, the (Les Aventures de Rabbi Jacob)",
    "release": 1959,
    "genre": "Comedy",
    "actors": [
      30,
      17,
      8,
      16
    ],
    "directorId": 8
  },
  {
    "movieId": 46,
    "title": "Kiss of the Damned",
    "release": 1964,
    "genre": "Horror|Romance|Thriller",
    "actors": [
      44,
      11
    ],
    "directorId": 41
  },
  {
    "movieId": 47,
    "title": "Close Encounters of the Third Kind",
    "release": 1966,
    "genre": "Adventure|Drama|Sci-Fi",
    "actors": [
      49,
      10,
      40,
      49
    ],
    "directorId": 36
  },
  {
    "movieId": 48,
    "title": "Hasty Heart, The",
    "release": 2001,
    "genre": "Drama",
    "actors": [
      3,
      36,
      15,
      48
    ],
    "directorId": 30
  },
  {
    "movieId": 49,
    "title": "Femme Nikita, La (Nikita)",
    "release": 1979,
    "genre": "Action|Crime|Romance|Thriller",
    "actors": [
      46,
      21,
      49,
      29
    ],
    "directorId": 6
  },
  {
    "movieId": 50,
    "title": "Tintin and I",
    "release": 2006,
    "genre": "Documentary",
    "actors": [
      47,
      20,
      31
    ],
    "directorId": 12
  }
];

// Array över skådespelare, respektive skådespelare innehåller:
//  - Ett ID
//  - Förnamn
//  - Efternamn
//  - Ålder
//  - Telefonnummer

const ACTORS = [
    {
    "actorId": 1,
    "firstName": "Wenonah",
    "lastName": "Patshull",
    "age": 23,
    "phone": "070 965 3218"
  },
  {
    "actorId": 2,
    "firstName": "Stevena",
    "lastName": "Clampett",
    "age": 24,
    "phone": "070 983 7318"
  },
  {
    "actorId": 3,
    "firstName": "Ashil",
    "lastName": "Mastrantone",
    "age": 62,
    "phone": "070 104 4838"
  },
  {
    "actorId": 4,
    "firstName": "Tamas",
    "lastName": "Kopman",
    "age": 51,
    "phone": null
  },
  {
    "actorId": 5,
    "firstName": "Aube",
    "lastName": "Diggin",
    "age": 24,
    "phone": "070 792 6196"
  },
  {
    "actorId": 6,
    "firstName": "Agretha",
    "lastName": "Luis",
    "age": 64,
    "phone": "070 156 1042"
  },
  {
    "actorId": 7,
    "firstName": "Winna",
    "lastName": "Cherrison",
    "age": 42,
    "phone": "070 251 8355"
  },
  {
    "actorId": 8,
    "firstName": "Zane",
    "lastName": "Battaille",
    "age": 32,
    "phone": "070 383 3982"
  },
  {
    "actorId": 9,
    "firstName": "Pedro",
    "lastName": "Macoun",
    "age": 38,
    "phone": "070 789 8610"
  },
  {
    "actorId": 10,
    "firstName": "Aldous",
    "lastName": "Swainston",
    "age": 22,
    "phone": "070 124 2709"
  },
  {
    "actorId": 11,
    "firstName": "Neysa",
    "lastName": "Boundy",
    "age": 42,
    "phone": "070 945 3208"
  },
  {
    "actorId": 12,
    "firstName": "Adah",
    "lastName": "Weakley",
    "age": 49,
    "phone": null
  },
  {
    "actorId": 13,
    "firstName": "Chevalier",
    "lastName": "Makey",
    "age": 37,
    "phone": "070 148 9169"
  },
  {
    "actorId": 14,
    "firstName": "Lazar",
    "lastName": "Goodger",
    "age": 62,
    "phone": "070 626 4210"
  },
  {
    "actorId": 15,
    "firstName": "Nevil",
    "lastName": "Milthorpe",
    "age": 54,
    "phone": "070 726 7279"
  },
  {
    "actorId": 16,
    "firstName": "Reilly",
    "lastName": "Renol",
    "age": 28,
    "phone": "070 722 7502"
  },
  {
    "actorId": 17,
    "firstName": "Kristos",
    "lastName": "Keaton",
    "age": 38,
    "phone": null
  },
  {
    "actorId": 18,
    "firstName": "Axel",
    "lastName": "Cuckoo",
    "age": 22,
    "phone": "070 247 9522"
  },
  {
    "actorId": 19,
    "firstName": "Giles",
    "lastName": "Crilly",
    "age": 35,
    "phone": "070 626 9083"
  },
  {
    "actorId": 20,
    "firstName": "Caresa",
    "lastName": "Jenno",
    "age": 49,
    "phone": "070 892 2620"
  },
  {
    "actorId": 21,
    "firstName": "Julieta",
    "lastName": "Killford",
    "age": 64,
    "phone": null
  },
  {
    "actorId": 22,
    "firstName": "Annalise",
    "lastName": "Penny",
    "age": 56,
    "phone": "070 356 2996"
  },
  {
    "actorId": 23,
    "firstName": "Jane",
    "lastName": "Tommen",
    "age": 51,
    "phone": "070 958 8019"
  },
  {
    "actorId": 24,
    "firstName": "Minta",
    "lastName": "SactorIdary",
    "age": 38,
    "phone": "070 746 6964"
  },
  {
    "actorId": 25,
    "firstName": "Roxy",
    "lastName": "FactorIddian",
    "age": 40,
    "phone": "070 588 3421"
  },
  {
    "actorId": 26,
    "firstName": "Inger",
    "lastName": "Beenham",
    "age": 41,
    "phone": "070 551 3307"
  },
  {
    "actorId": 27,
    "firstName": "Staford",
    "lastName": "Dagger",
    "age": 46,
    "phone": "070 613 7702"
  },
  {
    "actorId": 28,
    "firstName": "Tann",
    "lastName": "Leverage",
    "age": 55,
    "phone": "070 451 2628"
  },
  {
    "actorId": 29,
    "firstName": "Berrie",
    "lastName": "Wasylkiewicz",
    "age": 46,
    "phone": "070 200 2258"
  },
  {
    "actorId": 30,
    "firstName": "Crichton",
    "lastName": "Jeacock",
    "age": 62,
    "phone": "070 238 4242"
  },
  {
    "actorId": 31,
    "firstName": "Reina",
    "lastName": "McAllen",
    "age": 28,
    "phone": "070 838 2432"
  },
  {
    "actorId": 32,
    "firstName": "Lucita",
    "lastName": "Riccioppo",
    "age": 46,
    "phone": "070 546 9280"
  },
  {
    "actorId": 33,
    "firstName": "Irv",
    "lastName": "Glasscott",
    "age": 34,
    "phone": "070 753 4365"
  },
  {
    "actorId": 34,
    "firstName": "Corey",
    "lastName": "Conklin",
    "age": 59,
    "phone": null
  },
  {
    "actorId": 35,
    "firstName": "Stephan",
    "lastName": "Purches",
    "age": 60,
    "phone": "070 610 4699"
  },
  {
    "actorId": 36,
    "firstName": "Madelin",
    "lastName": "Thring",
    "age": 32,
    "phone": "070 288 7701"
  },
  {
    "actorId": 37,
    "firstName": "Milka",
    "lastName": "Lyston",
    "age": 64,
    "phone": "070 929 6598"
  },
  {
    "actorId": 38,
    "firstName": "Rodrique",
    "lastName": "Dolder",
    "age": 60,
    "phone": null
  },
  {
    "actorId": 39,
    "firstName": "Bernita",
    "lastName": "Lorrie",
    "age": 43,
    "phone": "070 960 5899"
  },
  {
    "actorId": 40,
    "firstName": "Torey",
    "lastName": "Stonehouse",
    "age": 41,
    "phone": "070 576 0350"
  },
  {
    "actorId": 41,
    "firstName": "Edmund",
    "lastName": "Bodham",
    "age": 36,
    "phone": "070 757 7417"
  },
  {
    "actorId": 42,
    "firstName": "Olva",
    "lastName": "Gorden",
    "age": 63,
    "phone": "070 267 7470"
  },
  {
    "actorId": 43,
    "firstName": "Inglis",
    "lastName": "Philpault",
    "age": 36,
    "phone": "070 699 7957"
  },
  {
    "actorId": 44,
    "firstName": "Grata",
    "lastName": "Donisthorpe",
    "age": 61,
    "phone": "070 931 1660"
  },
  {
    "actorId": 45,
    "firstName": "Batsheva",
    "lastName": "Sulter",
    "age": 50,
    "phone": "070 490 3680"
  },
  {
    "actorId": 46,
    "firstName": "Bevan",
    "lastName": "Kencott",
    "age": 31,
    "phone": "070 447 6832"
  },
  {
    "actorId": 47,
    "firstName": "Annetta",
    "lastName": "Grichukhin",
    "age": 26,
    "phone": "070 678 6219"
  },
  {
    "actorId": 48,
    "firstName": "Neysa",
    "lastName": "Vero",
    "age": 48,
    "phone": "070 635 5326"
  },
  {
    "actorId": 49,
    "firstName": "Alister",
    "lastName": "Flew",
    "age": 38,
    "phone": "070 880 3970"
  },
  {
    "actorId": 50,
    "firstName": "Whitaker",
    "lastName": "Whitefoot",
    "age": 49,
    "phone": "070 782 0197"
  }
];

// Objektet som funktionerna ska ta emot:
const dataset2 = { MOVIES, ACTORS };