document.addEventListener('DOMContentLoaded', ()=> {
    let futureDate = new Date().getTime() + 8 * 24 * 60 * 60 * 1000;

    let day = document.querySelector('.days');
    let hour = document.querySelector('.hours');
    let minute = document.querySelector('.minutes');
    let second = document.querySelector('.seconds');

    let intervalId = setInterval(()=> {

        let currentDate = new Date().getTime();
        let diff = futureDate - currentDate;

        let dayDifference = Math.floor((futureDate - currentDate) / (24 * 60 * 60 * 1000));
        let hourDifference = Math.floor(((futureDate - currentDate) / (60 * 60 * 1000)) % 24);
        let minuteDifference = Math.floor(((futureDate - currentDate) / (60 * 1000)) % 60);
        let secondDifference = Math.floor(((futureDate - currentDate) / 1000) % 60);

        hourDifference = hourDifference < 9 ? '0' + hourDifference : hourDifference;
        minuteDifference = minuteDifference < 9 ? '0' + minuteDifference : minuteDifference;
        secondDifference = secondDifference < 9 ? '0' + secondDifference : secondDifference;

        day.innerHTML = '0' + dayDifference;
        hour.innerHTML = hourDifference;
        minute.innerHTML = minuteDifference;
        second.innerHTML = secondDifference;

        if(diff < 0) {
            clearInterval(intervalId);
        }
    },1000);

}, false)

