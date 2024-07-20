function getAge(dob, dod){
    if (dod === undefined){
        dod = new Date().getFullYear();
    }
    return dod - dob
}

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (currentAge > oldestAge){
            return currentPerson
        }
        else {
            return oldest
        }
        });
};

// Do not edit below this line
module.exports = findTheOldest;
