

function rendam(callback) {
  setTimeout(function() { 
    callback(console.log("Mulai rendam. Setelah ini kucek"))
  }, 3000);
}

function kucek(callback) {
  setTimeout(function() {
    callback(console.log("Sedang kucek. Setelah ini bilas"))
  }, 2000);
}

function bilas(callback) {
  setTimeout(function() {
    callback(console.log("Sedang bilas. Setelah ini jemur"))
  }, 1000);
}

function jemur(callback) {
  setTimeout(function() {
    callback(console.log("Sedang jemur. Setelah ini setrika"))
    
  }, 5000);
}

function setrika() {
  setTimeout(function() {
    (console.log("Sedang setrika. Setelah ini selesai"))
  }, 4000);
}

const urutanMencuciBaju = rendam(()=>{
                            kucek(()=>{
                              bilas(()=>{
                                jemur(()=>{
                                  setrika()
                                })
                              })
                            })
                          })



// Ekspektasi:
// Mulai rendam. Setelah ini kucek
// Sedang kucek. Setelah ini bilas
// Sedang bilas. Setelah ini jemur
// Sedang jemur. Setelah ini setrika
// Sedang setrika. Setelah ini selesai