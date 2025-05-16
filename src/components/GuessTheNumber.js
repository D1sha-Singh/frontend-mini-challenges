import React, { useEffect, useState, useRef } from "react";

const GuessTheNumber = () => {
  const numRef = useRef();
  const [guesses, setGuesses] = useState([]);
  const [random, setRandom] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 101);
    console.log("Random Number: ", randomNum);
    setRandom(randomNum);
  }, []);

  const submit = () => {
    const userGuess = parseInt(numRef.current.value);
    if (isNaN(userGuess)) return alert("Please enter a valid number!");

    setGuesses((prev) => [...prev, userGuess]);

    if (userGuess === random) {
      setMessage("🎉 Congrats! Your guess is correct.");
    } else if (userGuess < random) {
      setMessage("📉 Too low!");
    } else {
      setMessage("📈 Too high!");
    }

    numRef.current.value = "";
  };

  return (
    <div>
      <h1>Guess The Number (0 - 100)</h1>
      <input placeholder="Enter a number" ref={numRef} />
      <button onClick={submit}>Submit</button>
      <h3>Your guesses: {guesses.join(", ")}</h3>
      <h2>{message}</h2>
       <h2>{guesses[guesses.length - 1]} is the random number.</h2>
    </div>
  );
};

export default GuessTheNumber;
