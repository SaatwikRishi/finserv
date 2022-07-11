const express = require("express");

const app = express();

app.use(express.json());
app.use(express.text());
function charIsLetter(char) {
  if (typeof char !== "string") {
    return false;
  }

  return char.toLowerCase() !== char.toUpperCase();
}

function isNum(val) {
  return !isNaN(val);
}
app.post("/challenge", (req, res) => {
  try {
    const body = req.body;

    const arr = body.data;
    //const arr = [];

    const numCount = [];
    const letterCount = [];
    let alphaNumericCount = 0;
    arr.forEach((e) => {
      if (isNum(e) || charIsLetter(e)) {
        alphaNumericCount++;
      }
      if (isNum(e)) {
        numCount.push(e);
      } else if (charIsLetter(e)) {
        letterCount.push(e);
      }
    });
    const ans = {
      is_success: true,
      user_id: "utkarsh_26072000",
      count: toString(alphaNumericCount),
      numbers: numCount,
      alphabets: letterCount,
      roll_number: "1906449",
      email: "utkarsh.popli26@gmail.com",
    };
    res.send(ans);
  } catch (err) {
    console.log(err);
    const ans = {
      is_success: false,
      user_id: "utkarsh_26072000",
      //  count: alphaNumericCount,
      // numbers: numCount,
      // alphabets: letterCount,
      roll_number: "1906449",
      email: "utkarsh.popli26@gmail.com",
    };
    res.send(ans);
  }
});

app.listen(process.env.PORT || 5000, (e) => {
  console.log("Started");
});
