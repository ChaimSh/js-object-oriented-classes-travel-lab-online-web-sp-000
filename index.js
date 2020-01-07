let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];


class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date( startDate );
  }
  yearsExperienceFromBeginningOf(year) {

    let endDate = new Date(year, 1, 1)

    let calculation = ((endDate.getTime() - this.startDate.getTime()) / 31536000000).toFixed(0);

    return parseInt(calculation, 10)
  }
}

  class Route{
    constructor( beginningLocation, endingLocation ) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
    blocksTravelled(){

    }
  }
