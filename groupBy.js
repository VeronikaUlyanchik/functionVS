function groupBy(arr,key){
  if (!key || !arr) {
      return new Error('Please provide all arguments');
  }
  else{
    let newArr = arr.filter(item=>item[key])
        .reduce(function (obj, item) {
        obj[item[key]] = obj[item[key]] || [];
        obj[item[key]].push(item);
        return obj;
    }, {});
    
    return newArr;}
}

// const arr = [
//     { id: 1, universe: "marvel", name: "Spider Man" },
//     { id: 2, universe: "marvel", name: "Iron Man" },
//     { id: 3, universe: "dc", name: "Aqua Man" },
//     { id: 4, universe: "dc", name: "Bat Man" },
//     { id: 5, universe: "marvel", name: "Hulk" }
//     ]



