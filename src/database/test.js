const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db =>{
    //insert Database
    await saveOrphanage(db, {
    
      name: "Lar dos meninos",
      lat: "-29.452084",
      lng: "-51.978338",
      about:
        "Presta assistência a crianças de 06 a 15 anos que se encontre em situação e risco e/ou vulnerabilidade social.",
      whatsapp: "9898989898",
        images: [
        "https://images.unsplash.com/photo-1599003037886-f8b50bc290c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  
        "https://images.unsplash.com/photo-1600711725042-deb9fbaeb1e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      ],
      instructions:
        "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      opening_hours: "Horário de visitas das 18 até as 8h",
      open_on_weekends: "0"
    })

    //select Database
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="3"');
    console.log(orphanage);


    // delete database
    console.log(await db.run('DELETE FROM orphanages WHERE id="4"'))

})