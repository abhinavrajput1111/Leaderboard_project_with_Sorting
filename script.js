window.addEventListener("load", () => {
  showData(scores);

  document.getElementById("scoreform").addEventListener("submit", (e) => {
    // stop the screen reload

    e.preventDefault();

    // get data from input values

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let country = document.getElementById("country").value;
    let score = parseInt(document.getElementById("score").value);

    addData(fname, lname, score, country);
  });
});

var scores = [
  {
    firstName: "Abhinav",
    lastName: "Rajput",
    country: "India",
    score: 55,
  },
  {
    firstName: "Shivani",
    lastName: "Rajput",
    country: "India",
    score: 65,
  },
  {
    firstName: "Naman",
    lastName: "Pratap Singh",
    country: "India",
    score: 85,
  },
  {
    firstName: "Urmila",
    lastName: "Devi",
    country: "India",
    score: 95,
  },
];

function showData(data) {
  let output = document.getElementById("info");
  //1. clear the old results
  output.innerHTML = "";

  //2. sort data
  data.sort(comparatorT);

  // 3. for showing new Data
  data.forEach((item, index) => {
    // div
    let box = document.createElement("div");
    box.classList.add("row");

    // name
    let div1 = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = item.firstName + " " + item.lastName;
    name.classList.add("name");
    div1.classList.add("div");
    div1.classList.add("div-first");
    div1.append(name);

    // country
    let div2 = document.createElement("div");
    let country = document.createElement("p");
    country.innerText = item.country;
    country.classList.add("country");
    div2.classList.add("div");
    div2.append(country);

    // score

    let div3 = document.createElement("div");
    let score = document.createElement("p");
    score.innerText = item.score;
    score.classList.add("score");
    div3.classList.add("div");
    div3.append(score);

    // delete
    let div4 = document.createElement("div");
    let deleteElement = document.createElement("button");
    deleteElement.classList.add("deleteElements");
    deleteElement.innerText = "Delete";
    deleteElement.addEventListener("click", () => deleteScore(index));
    // div4.classList.add("div");
    div4.classList.add("div-btn");
    div4.append(deleteElement);

    // incrementing 5 marks
    let div5 = document.createElement("div");
    let increase5 = document.createElement("button");
    increase5.classList.add("increase5");
    increase5.innerText = "+5";
    increase5.addEventListener("click", () => incrementScore(index));
    // div5.classList.add("div");
    div5.classList.add("div-btn");

    div5.append(increase5);

    // decrementing 5 marks
    let div6 = document.createElement("div");
    let decrease5 = document.createElement("button");
    decrease5.classList.add("decrease5");
    decrease5.innerText = "-5";
    // div6.classList.add("div");
    div6.classList.add("div-btn");
    div6.append(decrease5);

    decrease5.addEventListener("click", () => decrementScore(index));

    // append all elements

    // box.append(name, country, score, deleteElement, increase5, decrease5);
    box.append(div1, div2, div3, div4, div5, div6);
    // append div in the ifo box
    output.append(box);
  });
}

function deleteScore(index) {
  scores.splice(index, 1);
  showData(scores);
}

function incrementScore(index) {
  scores[index]["score"] += 5;
  showData(scores);
}
function decrementScore(index) {
  scores[index]["score"] -= 5;
  showData(scores);
}

function addData(fname, lname, score, country) {
  let obj = {
    firstName: fname,
    lastName: " " + lname,
    score,
    country,
  };
  scores.push(obj);
  showData(scores);
}

function comparatorT(a, b) {
  if (a["score"] > b["score"]) {
    return -1;
  } else if (b["score"] > a["score"]) {
    return 1;
  } else {
    return 0;
  }
}
