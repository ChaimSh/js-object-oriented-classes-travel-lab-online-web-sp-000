class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date( startDate );
  }
  yearsExperienceFromBeginningOf(year){
    // number of years since drivers startDate
    // currentYear - startDate or driver.startDate
    let endDate = new Date(year, 1, 1)

    let calculation = ((endDate.getTime() - this.startDate.getTime()) / 31536000000).toFixed(0);

    return parseInt(calculation, 10)
  }
}
