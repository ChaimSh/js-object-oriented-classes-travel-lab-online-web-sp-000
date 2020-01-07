class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date( startDate );
  }
  yearsExperienceFromBeginningOf(year){
    // number of years since drivers startDate
    // currentYear - startDate or driver.startDate
    let currentDate = new Date(year, 1, 1)
    return currentDate - this.startDate
  }
}
