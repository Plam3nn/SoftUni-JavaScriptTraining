function getDaysInAMonth(month, year){         
    let days = new Date(year, month, 0)
    .getDate();
    
    console.log(days);
}

getDaysInAMonth(2, 2024);