const A1 = (dataset = dataset1) => dataset.DOGS.filter( dog => dog.breed == "Siberian Husky" ).length;
console.log("A1:" + A1());

const A2 = (dataset = dataset1) => dataset.DOGS.filter( dog => dog.favoriteFood == null).length;
console.log("A2:" + A2());

const A3 = (dataset = dataset1) => dataset.DOGS.sort( (dog1, dog2) => dog1.age > dog2.age).slice(0,3).sort( (dog1,dog2) => dog1.name.toLowerCase() > dog2.name.toLowerCase() );
console.log(A3());

const A4 = (dataset = dataset2) => dataset.MOVIES.filter( movie => movie.release >= 1990 && movie.release < 2000 ).length;
console.log("A4:" + A4());

const A5 = (dataset = dataset2) => dataset.MOVIES.filter( movie => movie.actors.some( actor => actor == movie.directorId ) );

const A6 = (dataset = dataset2) => dataset.MOVIES.filter( movie => movie.genre.includes( "Comedy" ) ).length;
console.log("A6:" + A6());

const A7 = (dataset = dataset2) => dataset.MOVIES.filter( movie => movie.genre.includes( "Drama" ) ).sort( (m1, m2) => m1.release > m2.release ).slice(0,3);

const A8 = (dataset = dataset2) => dataset.ACTORS.filter( actor => actor.phone == null ).length;
console.log("A8:" + A8());

const B1 = (dataset = dataset1) => dataset.DOGS.filter( dog => dog.favoriteFood == "Oranges" ).sort( (dog1, dog2) => dog1.age > dog2.age )[0].name;
console.log("B1:" + B1());

const B2 = (dataset = dataset1) => dataset.DOGS.sort( (dog1, dog2) => dog1.dogId > dog2.dogId )[0].name;

const B3 = (dataset = dataset2) => {
    dataset.ACTORS.map( actor => actor.directedMovies = dataset.MOVIES.filter( movie => movie.directorId == actor.actorId ).length );
    let director = dataset.ACTORS.sort( (actor1, actor2) => actor1.directedMovies < actor2.directedMovies )[0].actorId;
    return director;
}

const B4 = (dataset = dataset2, title = "Kiss Me Goodbye") => dataset.MOVIES.find( movie => movie.title == title ).actors;

const B5 = (dataset = dataset2) => {    
    let actors = dataset.MOVIES.find( movie => movie.title == "Bee Season" ).actors;
    let numbers = dataset.ACTORS.filter( actor => actors.some( a => actor.actorId == a ) ).map( actor => actor.phone ).filter( num => num );
    return numbers;
}

const C1 = (dataset = dataset1) => { 
    breedAmount = [];
    let allBreeds = dataset.DOGS.map( dog => dog.breed );
    let breedNames = [...new Set(allBreeds)];
    breedNames.forEach( name => {
        let breed = {};
        breed.name = name;
        breed.amount = allBreeds.filter( breed => breed == name ).length;
        breedAmount.push(breed);
    })
    return breedAmount.sort( (b1, b2) => b1.amount < b2.amount )[0].name;
}

const C2 = (dataset = dataset1, friendName = "Tim") => {
    let friendId = dataset.DOGS.find( dog => dog.name == friendName ).dogId; // hitta ID på hunden
    let amountOfFriends = dataset.DOGS.filter( dog => dog.friends.some( friend => friend == friendId ) ).length; // hitta antal andra hundar som har id:et som vän
    return amountOfFriends;
    }

const C3 = (dataset = dataset2, amount = 5) => {
    dataset.ACTORS.map( actor => actor.actedMovies = dataset.MOVIES.filter( movie => movie.actors.some( ac => ac == actor.actorId ) ).length );
    let actors = dataset.ACTORS.sort( (a1, a2) => a1.actedMovies < a2.actedMovies ).slice(0, amount).map( actor => actor.lastName );
    return actors;
}

const C4 = (dataset = dataset2, firstName = "Torey", lastName = "Stonehouse") => {
    let actorId = dataset.ACTORS.find( actor => actor.firstName == firstName && actor.lastName == lastName ).actorId;
    let movies = dataset.MOVIES.filter( movie => movie.actors.some( actor => actor == actorId ) ).map( movie => movie.title );
    return movies;
}