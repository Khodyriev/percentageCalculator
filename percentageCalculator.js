const percentageCalculator = function (incomingObj) {
  const result = _.cloneDeep(incomingObj);
  let total = 0;

  for (x in incomingObj) {
    total += incomingObj[x];
  }

  let toFindNearestToHalf = [];
  let helperArray = [];
  let checkForHundred = 0;

  for (x in result) {
    toFindNearestToHalf.push((result[x] * 100) / total);
    helperArray.push(0);
    result[x] = Math.round((result[x] * 100) / total);
    checkForHundred += result[x];
  }

  if (checkForHundred > 100) {
    let correction = -1;
    let nearestToHalf = toFindNearestToHalf.map((element) => {
      return (element % 1) - 0.5 > 0 ? (element % 1) - 0.5 : 1;
    });
    let indexOfMin = nearestToHalf.indexOf(Math.min(...nearestToHalf));
    helperArray[indexOfMin] = correction;
  }

  if (checkForHundred < 100 && checkForHundred) {
    let correction = 1;
    let nearestToHalf = toFindNearestToHalf.map((element) => {
      return (element % 1) - 0.5 < 0 ? -((element % 1) - 0.5) : 1;
    });
    let indexOfMin = nearestToHalf.indexOf(Math.min(...nearestToHalf));
    helperArray[indexOfMin] = correction;
  }

  let counter = 0;
  for (x in result) {
    result[x] = `${result[x] + helperArray[counter]}%`;
    counter++;
  }

  return result;
};
