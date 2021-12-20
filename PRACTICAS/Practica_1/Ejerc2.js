'use strick;'

let hor = 15
let minut = '00'

while (true){

  console.log('\n' + hor + ':' + minut)

  minut = parseInt(minut)

  minut += 15

  if(minut == 60) {
    hor ++
    minut = '00'
  }

  if (hor == 17 && minut == '15') break
}
