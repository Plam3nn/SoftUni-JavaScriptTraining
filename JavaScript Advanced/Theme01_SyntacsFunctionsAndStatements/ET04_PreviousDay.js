function solve(year, month, day) {
    let currentDate = new Date(year, month - 1, day);

    currentDate.setDate(currentDate.getDate() - 1);

    let previousDateYear = currentDate.getFullYear();
    let previousDateMonth = currentDate.getMonth() + 1;
    let previousDateDay = currentDate.getDate();

    console.log(`${previousDateYear}-${previousDateMonth}-${previousDateDay}`);
}

solve(2016, 3, 1);
solve(2015, 5, 10);