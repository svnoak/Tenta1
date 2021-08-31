// Array över hundar, respektive hund innehåller:
//  - Ett ID
//  - Namn
//  - Hundras
//  - Ålder
//  - Favoritmat
//  - Array över kompisar (varje siffra är ett `dogId`)

const DOGS = [
  {
    "dogId": 1,
    "name": "Bella",
    "breed": "French Bulldog",
    "age": 9,
    "favoriteFood": "Blueberries",
    "friends": [
      21
    ]
  },
  {
    "dogId": 2,
    "name": "Luna",
    "breed": "Shiba Inu",
    "age": 10,
    "favoriteFood": "Avocado",
    "friends": [
      46,
      70,
      51
    ]
  },
  {
    "dogId": 3,
    "name": "Lucy",
    "breed": "Tolling Retreiver",
    "age": 14,
    "favoriteFood": "Chicken",
    "friends": [
      89,
      91,
      2
    ]
  },
  {
    "dogId": 4,
    "name": "Daisy",
    "breed": "Boston Terrier",
    "age": 14,
    "favoriteFood": "Fish",
    "friends": [
      59
    ]
  },
  {
    "dogId": 5,
    "name": "Lola",
    "breed": "Pitbull",
    "age": 2,
    "favoriteFood": "Apples",
    "friends": [
      36
    ]
  },
  {
    "dogId": 6,
    "name": "Sadie",
    "breed": "Dobermann",
    "age": 2,
    "favoriteFood": "Peaches",
    "friends": [
      84
    ]
  },
  {
    "dogId": 7,
    "name": "Molly",
    "breed": "Poodle",
    "age": 4,
    "favoriteFood": null,
    "friends": [
      5,
      51,
      88,
      48
    ]
  },
  {
    "dogId": 8,
    "name": "Bailey",
    "breed": "Pitbull",
    "age": 9,
    "favoriteFood": "Pineapple",
    "friends": [
      42,
      97,
      37,
      25
    ]
  },
  {
    "dogId": 9,
    "name": "Stella",
    "breed": "Pug",
    "age": 1,
    "favoriteFood": null,
    "friends": [
      53,
      78
    ]
  },
  {
    "dogId": 10,
    "name": "Maggie",
    "breed": "Corgi",
    "age": 10,
    "favoriteFood": "Peaches",
    "friends": [
      27,
      71
    ]
  },
  {
    "dogId": 11,
    "name": "Chloe",
    "breed": "Poodle",
    "age": 9,
    "favoriteFood": "Oranges",
    "friends": [
      9,
      37,
      80
    ]
  },
  {
    "dogId": 12,
    "name": "Penny",
    "breed": "Border Collie",
    "age": 8,
    "favoriteFood": "Strawberries",
    "friends": [
      53,
      15
    ]
  },
  {
    "dogId": 13,
    "name": "Nala",
    "breed": "Corgi",
    "age": 2,
    "favoriteFood": "Ham",
    "friends": [
      51,
      5,
      30,
      8
    ]
  },
  {
    "dogId": 14,
    "name": "Zoey",
    "breed": "Australian Shepherd",
    "age": 10,
    "favoriteFood": "Tomato",
    "friends": [
      31,
      19
    ]
  },
  {
    "dogId": 15,
    "name": "Lily",
    "breed": "French Bulldog",
    "age": 9,
    "favoriteFood": "Ham",
    "friends": [
      97
    ]
  },
  {
    "dogId": 16,
    "name": "Coco",
    "breed": "Weimaraner",
    "age": 2,
    "favoriteFood": "Tomato",
    "friends": [
      73,
      93,
      75,
      69
    ]
  },
  {
    "dogId": 17,
    "name": "Sophie",
    "breed": "Tolling Retreiver",
    "age": 12,
    "favoriteFood": "Tomato",
    "friends": [
      54
    ]
  },
  {
    "dogId": 18,
    "name": "Rosie",
    "breed": "Australian Shepherd",
    "age": 12,
    "favoriteFood": "Avocado",
    "friends": [
      65,
      79
    ]
  },
  {
    "dogId": 19,
    "name": "Ellie",
    "breed": "Tolling Retreiver",
    "age": 9,
    "favoriteFood": "Blackberries",
    "friends": [
      29
    ]
  },
  {
    "dogId": 20,
    "name": "Ruby",
    "breed": "Alaskan Malamute",
    "age": 9,
    "favoriteFood": "Oranges",
    "friends": [
      60,
      19,
      69,
      80
    ]
  },
  {
    "dogId": 21,
    "name": "Piper",
    "breed": "Australian Shepherd",
    "age": 4,
    "favoriteFood": "Bananas",
    "friends": [
      69,
      58
    ]
  },
  {
    "dogId": 22,
    "name": "Mia",
    "breed": "Alaskan Malamute",
    "age": 4,
    "favoriteFood": "Strawberries",
    "friends": [
      72,
      55
    ]
  },
  {
    "dogId": 23,
    "name": "Roxy",
    "breed": "French Bulldog",
    "age": 7,
    "favoriteFood": "Pineapple",
    "friends": [
      9
    ]
  },
  {
    "dogId": 24,
    "name": "Gracie",
    "breed": "Pitbull",
    "age": 6,
    "favoriteFood": "Limes",
    "friends": [
      2,
      62,
      42,
      26
    ]
  },
  {
    "dogId": 25,
    "name": "Millie",
    "breed": "Poodle",
    "age": 7,
    "favoriteFood": "Blueberries",
    "friends": [
      9,
      80,
      97
    ]
  },
  {
    "dogId": 26,
    "name": "Willow",
    "breed": "Australian Shepherd",
    "age": 7,
    "favoriteFood": "Pasta",
    "friends": [
      58,
      12,
      56,
      62
    ]
  },
  {
    "dogId": 27,
    "name": "Lulu",
    "breed": "Great Dane",
    "age": 5,
    "favoriteFood": "Oranges",
    "friends": [
      53
    ]
  },
  {
    "dogId": 28,
    "name": "Pepper",
    "breed": "Pug",
    "age": 10,
    "favoriteFood": "Apples",
    "friends": [
      50,
      33
    ]
  },
  {
    "dogId": 29,
    "name": "Ginger",
    "breed": "Poodle",
    "age": 3,
    "favoriteFood": "Blackberries",
    "friends": [
      3,
      42,
      13
    ]
  },
  {
    "dogId": 30,
    "name": "Harley",
    "breed": "Australian Shepherd",
    "age": 8,
    "favoriteFood": "Tomato",
    "friends": [
      56,
      55
    ]
  },
  {
    "dogId": 31,
    "name": "Abby",
    "breed": "Australian Shepherd",
    "age": 9,
    "favoriteFood": null,
    "friends": [
      30
    ]
  },
  {
    "dogId": 32,
    "name": "Winnie",
    "breed": "Shiba Inu",
    "age": 8,
    "favoriteFood": "Blueberries",
    "friends": [
      22,
      97
    ]
  },
  {
    "dogId": 33,
    "name": "Nova",
    "breed": "Pitbull",
    "age": 10,
    "favoriteFood": "Pears",
    "friends": [
      26,
      27,
      31,
      43
    ]
  },
  {
    "dogId": 34,
    "name": "Kona",
    "breed": "Shiba Inu",
    "age": 11,
    "favoriteFood": "Rice",
    "friends": [
      30
    ]
  },
  {
    "dogId": 35,
    "name": "Riley",
    "breed": "French Bulldog",
    "age": 8,
    "favoriteFood": "Rice",
    "friends": [
      58
    ]
  },
  {
    "dogId": 36,
    "name": "Zoe",
    "breed": "Pug",
    "age": 13,
    "favoriteFood": "Fish",
    "friends": [
      6,
      71
    ]
  },
  {
    "dogId": 37,
    "name": "Lilly",
    "breed": "Pitbull",
    "age": 12,
    "favoriteFood": "Grapefruit",
    "friends": [
      23,
      73,
      90
    ]
  },
  {
    "dogId": 38,
    "name": "Dixie",
    "breed": "Bulldog",
    "age": 4,
    "favoriteFood": null,
    "friends": [
      41,
      15,
      44
    ]
  },
  {
    "dogId": 39,
    "name": "Lady",
    "breed": "Poodle",
    "age": 6,
    "favoriteFood": "Ham",
    "friends": [
      11,
      42,
      60
    ]
  },
  {
    "dogId": 40,
    "name": "Izzy",
    "breed": "Weimaraner",
    "age": 7,
    "favoriteFood": "Grapefruit",
    "friends": [
      85,
      41
    ]
  },
  {
    "dogId": 41,
    "name": "Hazel",
    "breed": "Corgi",
    "age": 11,
    "favoriteFood": null,
    "friends": [
      44,
      71,
      51
    ]
  },
  {
    "dogId": 42,
    "name": "Layla",
    "breed": "Dobermann",
    "age": 9,
    "favoriteFood": "Pasta",
    "friends": [
      76,
      16
    ]
  },
  {
    "dogId": 43,
    "name": "Olive",
    "breed": "Australian Shepherd",
    "age": 4,
    "favoriteFood": "Lemons",
    "friends": [
      72,
      28,
      40,
      41
    ]
  },
  {
    "dogId": 44,
    "name": "Charlie",
    "breed": "Siberian Husky",
    "age": 6,
    "favoriteFood": "Grapefruit",
    "friends": [
      99,
      37,
      87,
      0
    ]
  },
  {
    "dogId": 45,
    "name": "Sasha",
    "breed": "Poodle",
    "age": 1,
    "favoriteFood": "Chicken",
    "friends": [
      37,
      35,
      21
    ]
  },
  {
    "dogId": 46,
    "name": "Maya",
    "breed": "Golden Retreiver",
    "age": 6,
    "favoriteFood": "Blueberries",
    "friends": [
      22,
      34,
      75,
      33
    ]
  },
  {
    "dogId": 47,
    "name": "Honey",
    "breed": "Shiba Inu",
    "age": 6,
    "favoriteFood": "Meat",
    "friends": [
      74,
      12,
      100,
      36
    ]
  },
  {
    "dogId": 48,
    "name": "Athena",
    "breed": "Golden Retreiver",
    "age": 7,
    "favoriteFood": "Avocado",
    "friends": [
      89,
      49
    ]
  },
  {
    "dogId": 49,
    "name": "Lexi",
    "breed": "Pug",
    "age": 6,
    "favoriteFood": null,
    "friends": [
      12,
      24,
      96
    ]
  },
  {
    "dogId": 50,
    "name": "Cali",
    "breed": "Pitbull",
    "age": 14,
    "favoriteFood": "Blackberries",
    "friends": [
      95,
      46,
      68,
      42
    ]
  },
  {
    "dogId": 51,
    "name": "Annie",
    "breed": "Shiba Inu",
    "age": 13,
    "favoriteFood": null,
    "friends": [
      22
    ]
  },
  {
    "dogId": 52,
    "name": "Belle",
    "breed": "Alaskan Malamute",
    "age": 14,
    "favoriteFood": "Blueberries",
    "friends": [
      59,
      59,
      70
    ]
  },
  {
    "dogId": 53,
    "name": "Princess",
    "breed": "Boston Terrier",
    "age": 5,
    "favoriteFood": "Avocado",
    "friends": [
      89,
      51
    ]
  },
  {
    "dogId": 54,
    "name": "Phoebe",
    "breed": "Boston Terrier",
    "age": 11,
    "favoriteFood": "Lemons",
    "friends": [
      39,
      5,
      61,
      58
    ]
  },
  {
    "dogId": 55,
    "name": "Emma",
    "breed": "Australian Shepherd",
    "age": 4,
    "favoriteFood": "Grapefruit",
    "friends": [
      33,
      23,
      88
    ]
  },
  {
    "dogId": 56,
    "name": "Ella",
    "breed": "Golden Retreiver",
    "age": 5,
    "favoriteFood": "Blackberries",
    "friends": [
      42,
      34
    ]
  },
  {
    "dogId": 57,
    "name": "Cookie",
    "breed": "Border Collie",
    "age": 14,
    "favoriteFood": "Meat",
    "friends": [
      7,
      55,
      36
    ]
  },
  {
    "dogId": 58,
    "name": "Marley",
    "breed": "Dobermann",
    "age": 12,
    "favoriteFood": "Ham",
    "friends": [
      1
    ]
  },
  {
    "dogId": 59,
    "name": "Callie",
    "breed": "Siberian Husky",
    "age": 1,
    "favoriteFood": "Pears",
    "friends": [
      80,
      10
    ]
  },
  {
    "dogId": 60,
    "name": "Scout",
    "breed": "Golden Retreiver",
    "age": 2,
    "favoriteFood": "Pineapple",
    "friends": [
      87,
      85,
      49
    ]
  },
  {
    "dogId": 61,
    "name": "Roxie",
    "breed": "Dobermann",
    "age": 12,
    "favoriteFood": null,
    "friends": [
      45
    ]
  },
  {
    "dogId": 62,
    "name": "Remi",
    "breed": "Great Dane",
    "age": 2,
    "favoriteFood": "Oranges",
    "friends": [
      44,
      98,
      84,
      65
    ]
  },
  {
    "dogId": 63,
    "name": "Minnie",
    "breed": "Alaskan Malamute",
    "age": 7,
    "favoriteFood": null,
    "friends": [
      80,
      33,
      29
    ]
  },
  {
    "dogId": 64,
    "name": "Maddie",
    "breed": "Great Dane",
    "age": 2,
    "favoriteFood": "Lemons",
    "friends": [
      74,
      26,
      83,
      72
    ]
  },
  {
    "dogId": 65,
    "name": "Dakota",
    "breed": "Shiba Inu",
    "age": 2,
    "favoriteFood": "Oranges",
    "friends": [
      34
    ]
  },
  {
    "dogId": 66,
    "name": "Leia",
    "breed": "Siberian Husky",
    "age": 12,
    "favoriteFood": "Chicken",
    "friends": [
      56
    ]
  },
  {
    "dogId": 67,
    "name": "Poppy",
    "breed": "French Bulldog",
    "age": 3,
    "favoriteFood": "Strawberries",
    "friends": [
      34,
      0
    ]
  },
  {
    "dogId": 68,
    "name": "Josie",
    "breed": "Pug",
    "age": 13,
    "favoriteFood": "Blueberries",
    "friends": [
      46,
      2
    ]
  },
  {
    "dogId": 69,
    "name": "Harper",
    "breed": "Shiba Inu",
    "age": 11,
    "favoriteFood": "Oranges",
    "friends": [
      95,
      59
    ]
  },
  {
    "dogId": 70,
    "name": "Mila",
    "breed": "Australian Shepherd",
    "age": 3,
    "favoriteFood": "Meat",
    "friends": [
      95,
      96,
      65
    ]
  },
  {
    "dogId": 71,
    "name": "Angel",
    "breed": "Tolling Retreiver",
    "age": 12,
    "favoriteFood": "Limes",
    "friends": [
      41,
      89,
      29,
      46
    ]
  },
  {
    "dogId": 72,
    "name": "Holly",
    "breed": "Corgi",
    "age": 8,
    "favoriteFood": null,
    "friends": [
      80,
      20,
      79,
      66
    ]
  },
  {
    "dogId": 73,
    "name": "Ava",
    "breed": "Weimaraner",
    "age": 11,
    "favoriteFood": "Apples",
    "friends": [
      11,
      28,
      76
    ]
  },
  {
    "dogId": 74,
    "name": "Ivy",
    "breed": "Dobermann",
    "age": 7,
    "favoriteFood": "Apples",
    "friends": [
      91
    ]
  },
  {
    "dogId": 75,
    "name": "Mocha",
    "breed": "Boston Terrier",
    "age": 12,
    "favoriteFood": "Chicken",
    "friends": [
      91,
      100
    ]
  },
  {
    "dogId": 76,
    "name": "Gigi",
    "breed": "Tolling Retreiver",
    "age": 12,
    "favoriteFood": "Blueberries",
    "friends": [
      3,
      87
    ]
  },
  {
    "dogId": 77,
    "name": "Paisley",
    "breed": "Great Dane",
    "age": 2,
    "favoriteFood": "Meat",
    "friends": [
      78,
      55,
      75
    ]
  },
  {
    "dogId": 78,
    "name": "Koda",
    "breed": "Golden Retreiver",
    "age": 6,
    "favoriteFood": "Ham",
    "friends": [
      76,
      68
    ]
  },
  {
    "dogId": 79,
    "name": "Cleo",
    "breed": "Alaskan Malamute",
    "age": 9,
    "favoriteFood": "Strawberries",
    "friends": [
      3,
      8,
      67,
      50
    ]
  },
  {
    "dogId": 80,
    "name": "Penelope",
    "breed": "Shiba Inu",
    "age": 11,
    "favoriteFood": "Fish",
    "friends": [
      87,
      3,
      75
    ]
  },
  {
    "dogId": 81,
    "name": "Bonnie",
    "breed": "Golden Retreiver",
    "age": 11,
    "favoriteFood": "Ham",
    "friends": [
      80,
      15,
      76,
      86
    ]
  },
  {
    "dogId": 82,
    "name": "Missy",
    "breed": "French Bulldog",
    "age": 13,
    "favoriteFood": "Fish",
    "friends": [
      82
    ]
  },
  {
    "dogId": 83,
    "name": "Frankie",
    "breed": "Pug",
    "age": 14,
    "favoriteFood": "Tomato",
    "friends": [
      22
    ]
  },
  {
    "dogId": 84,
    "name": "Sugar",
    "breed": "Boston Terrier",
    "age": 12,
    "favoriteFood": "Blackberries",
    "friends": [
      28,
      19,
      4
    ]
  },
  {
    "dogId": 85,
    "name": "Aspen",
    "breed": "Pug",
    "age": 2,
    "favoriteFood": "Pineapple",
    "friends": [
      100,
      65,
      23
    ]
  },
  {
    "dogId": 86,
    "name": "Xena",
    "breed": "Border Collie",
    "age": 9,
    "favoriteFood": "Blueberries",
    "friends": [
      9,
      66,
      88
    ]
  },
  {
    "dogId": 87,
    "name": "Shelby",
    "breed": "French Bulldog",
    "age": 14,
    "favoriteFood": null,
    "friends": [
      38,
      18
    ]
  },
  {
    "dogId": 88,
    "name": "Fiona",
    "breed": "Alaskan Malamute",
    "age": 1,
    "favoriteFood": "Peaches",
    "friends": [
      95,
      8,
      76,
      57
    ]
  },
  {
    "dogId": 89,
    "name": "Dolly",
    "breed": "French Bulldog",
    "age": 13,
    "favoriteFood": "Chicken",
    "friends": [
      81,
      72,
      5,
      14
    ]
  },
  {
    "dogId": 90,
    "name": "Georgia",
    "breed": "Tolling Retreiver",
    "age": 13,
    "favoriteFood": "Fish",
    "friends": [
      5,
      65,
      73
    ]
  },
  {
    "dogId": 91,
    "name": "Shadow",
    "breed": "Shiba Inu",
    "age": 13,
    "favoriteFood": "Grapefruit",
    "friends": [
      57,
      29
    ]
  },
  {
    "dogId": 92,
    "name": "Delilah",
    "breed": "Border Collie",
    "age": 14,
    "favoriteFood": "Pears",
    "friends": [
      40,
      4,
      46,
      50
    ]
  },
  {
    "dogId": 93,
    "name": "Peanut",
    "breed": "Siberian Husky",
    "age": 6,
    "favoriteFood": "Fish",
    "friends": [
      8,
      61,
      13,
      93
    ]
  },
  {
    "dogId": 94,
    "name": "Grace",
    "breed": "Shiba Inu",
    "age": 6,
    "favoriteFood": "Carrot",
    "friends": [
      71,
      52,
      52
    ]
  },
  {
    "dogId": 95,
    "name": "Rose",
    "breed": "Golden Retreiver",
    "age": 5,
    "favoriteFood": "Bananas",
    "friends": [
      52,
      50,
      61
    ]
  },
  {
    "dogId": 96,
    "name": "Skye",
    "breed": "Tolling Retreiver",
    "age": 11,
    "favoriteFood": null,
    "friends": [
      14,
      27,
      50
    ]
  },
  {
    "dogId": 97,
    "name": "Pearl",
    "breed": "Tolling Retreiver",
    "age": 2,
    "favoriteFood": "Pasta",
    "friends": [
      82,
      62
    ]
  },
  {
    "dogId": 98,
    "name": "Jasmine",
    "breed": "Poodle",
    "age": 4,
    "favoriteFood": "Strawberries",
    "friends": [
      33,
      41,
      53,
      83
    ]
  },
  {
    "dogId": 99,
    "name": "Juno",
    "breed": "Corgi",
    "age": 14,
    "favoriteFood": "Grapefruit",
    "friends": [
      86,
      94
    ]
  },
  {
    "dogId": 100,
    "name": "Trixie",
    "breed": "Shiba Inu",
    "age": 2,
    "favoriteFood": "Lemons",
    "friends": [
      60,
      44
    ]
  }
];


// Objektet som funktionerna ska ta emot
const dataset1 = { DOGS };