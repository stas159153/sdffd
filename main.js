let array = [1,2,3,4,5]
let scils = ['jump','sky','africa','before','fdsfgdf','case']
let sd = [2,1,3,2,3,3,4,5,,1,2,3,5,2,9,8,7,6,5,4,3,2,1]
let rr = array.reduce((acum,item) =>{
    return acum + item
})
console.log(rr,sd.sort())
console.log(scils.sort())
