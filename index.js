function updateTime() {
  let seoulElement = document.querySelector("#Seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment.tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format(" Do MMMM  YYYY ");
    seoulTimeElement.innerHTML = seoulTime.format(
      " h:mm:ss[<small>]A[</small>]"
    );
  }
  let johannesburgElement = document.querySelector("#Johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgTime = moment().tz("Africa/Johannesburg");

    johannesburgDateElement.innerHTML = johannesburgTime.format("Do MMMM YYYY");
    johannesburgTimeElement.innerHTML = johannesburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);
