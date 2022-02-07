function isLeapYear(year){
    if ((year %4 == 0) && (year %100 != 0) || (year %400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2098;
const isMyLeapYear = isLeapYear(myYear);
console.log('is my leap year',isMyLeapYear );

const myNewLeapYear = 2224;
const isNewLeapYear = isLeapYear(myNewLeapYear);
console.log('is new lwap year', isNewLeapYear);

const myAgainLeap = 2229;
const isAgainLeapYear = isLeapYear(myAgainLeap);
console.log('is my new leap year',isAgainLeapYear);