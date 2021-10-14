let time
const carPassing = (cars = [ { time, speed } ], speed) => {
  cars.push( { time:Date.now(), speed } )
  return cars
}