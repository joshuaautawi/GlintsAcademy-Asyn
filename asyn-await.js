function rendam() {
    return new Promise ((resolve,reject)=>{setTimeout(function() { 
      resolve(console.log("Mulai rendam. Setelah ini kucek"))
    }, 3000)
  });}
  
  function kucek() {
    return new Promise ((resolve,reject) => {
        setTimeout(function() {
            resolve(console.log("Sedang kucek. Setelah ini bilas"))
          }, 2000);
    })
  }
  
  function bilas() {
    return new Promise ((resolve,reject) => {
        setTimeout(function() {
            resolve(console.log("Sedang bilas. Setelah ini jemur"))
          }, 1000);
    })
  }
  
  function jemur() {
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve(console.log("Sedang jemur. Setelah ini setrika"))
          }, 5000);
    })
  
  }
  
  function setrika() {
    return new Promise((resolve,reject)=>{
      setTimeout(function() {
        console.log("Sedang setrika. Setelah ini selesai")
      }, 4000);
    })
    }
  

  async function aturanMencuciBaju (){
      await rendam()
      await kucek()
      await bilas()
      await jemur()
      await setrika()
  }

  aturanMencuciBaju()

  
  // Ekspektasi:
  // Mulai rendam. Setelah ini kucek
  // Sedang kucek. Setelah ini bilas
  // Sedang bilas. Setelah ini jemur
  // Sedang jemur. Setelah ini setrika
  // Sedang setrika. Setelah ini selesai