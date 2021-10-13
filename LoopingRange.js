function range(start, end, step){ 
  var count = []
  

  if((start, end, step === undefined) || (start > end || step <= 0)){
    return count
  }

  else {

    for (let index = start;  index <= end; index += step) {
      count.push(index)
    }
    return count
  }

  
}

