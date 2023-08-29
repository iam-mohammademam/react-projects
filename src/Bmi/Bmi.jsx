import { useState, useMemo } from "react";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("__");

  const showResult = () => {
    if (height && weight) {
      const calcHeight = height / 100;
      setResult((weight / (calcHeight * calcHeight)).toFixed(1));
    } else {
      alert("Enter Height & Weight first");
    }
  };
  return (
    <>
      <main className="h-screen w-full flex items-center justify-center ">
        <div className="w-400  px-10 py-6 bg-slate-100 rounded-md flex flex-column justify-center ">
          <h1 className="text-2xl text-center mb-6 capitalize font-bold">
            BMI Calculator
          </h1>
          <div className="flex items-center justify-evenly">
            <h1 className="text-md capitalize font-bold">height:</h1>
            <input
              onChange={(e) => setHeight(e.target.value)}
              className="w-40 mx-3 text-md p-3 rounded-md bg-slate-200"
              placeholder="Enter your height"
            />
            <h1 className="font-mediam">cm</h1>
          </div>
          <div className="flex mt-3 items-center justify-evenly">
            <h1 className="text-md capitalize font-bold">weight:</h1>
            <input
              onChange={(e) => setWeight(e.target.value)}
              className="w-40 mr-3 ml-1 text-md p-3 rounded-md bg-slate-200"
              placeholder="Enter your weight"
            />
            <h1 className="font-mediam">kg</h1>
          </div>
          <h1 className="my-5 text-center font-bold text-xl">BMI : {result}</h1>
          <button
            onClick={showResult}
            className="capitalize w-3/4 mx-auto text-center text-lg p-2 rounded-md bg-black text-white"
          >
            Calculate
          </button>
        </div>
      </main>
    </>
  );
};
export default Bmi;
