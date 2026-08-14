class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
    const cars = [];
    for (let i = 0; i < position.length; i++) {
      const time = (target - position[i]) / speed[i];
      cars.push({ position: position[i], time });
    }
    cars.sort((a, b) => b.position - a.position);

    let fleet = 0;
    let slowestTime = 0;

    for (const car of cars) {
      if (car.time > slowestTime) {
        fleet++;
        slowestTime = car.time;
      }
    }
    return fleet;
    }
}
