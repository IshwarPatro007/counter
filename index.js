let count = 0;
document.getElementById("decreaseBtn").onclick = function () {
  count -= 1; //Math.floor(Math.random() * 99999999999) + 1;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = "No - Value";
};

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};
