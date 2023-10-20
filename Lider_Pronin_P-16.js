const locations = [
    { name: "Остров 1", type: "остров сокровищ", safe: true, treasure: 15},
    { name: "болото 1", type: "болото без тресины", safe: true, treasure: Math.floor(Math.random()*10) },
    { name: "Остров 2", type: "остров без сокровищ", safe: true, treasure: 0 },
    { name: "Пещера 1", type: "пещера", safe: true, treasure: Math.floor(Math.random()*10) },
    { name: "Пещера 2", type: "пещера со змеями", safe: false, treasure: Math.floor(Math.random()*10) },
    { name: "болото 2", type: "болото с тресиной", safe: false, treasure: Math.floor(Math.random()*10) },
  ];

  function searchLocation(locations, type) {
   
    for (let i = 0; i < locations.length; i++) {
      let location = locations[i];
      
      
      if (location.type === type) {
        console.log("Название локации:", location.name);
        console.log("Количество сокровищ:", location.treasure);
        console.log("Безопасность:", location.safe ? "Безопосно" : "Опасно");
        
    }
  }
}
  searchLocation(locations, "остров без сокровищ");