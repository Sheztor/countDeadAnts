function CountDeaAnts(ants) {
  if(ants !== null) ants = ants.replace(/ant/g, "") // Delete all ants

  if(ants === null || ants.trim() === "") return 0


  const heads = ants.split(/a/g).length - 1
  const bodies = ants.split(/n/g).length - 1
  const butt = ants.split(/t/g).length - 1

  console.log({heads})
  console.log({bodies})
  console.log({butt})


  return 5
}

let result = CountDeaAnts("ant anantt aantnt")
console.log(result)