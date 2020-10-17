export default function filter(arr1,arr2,key1,key2){
    let test = []
    let test2 = []

    arr1.forEach(item=>test.push(item[key1]))
    arr2.forEach(item=>{
        if(!test.includes(item[key2])){
            test2.push(item)
        }
    })
    return test2
}