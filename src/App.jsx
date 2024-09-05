import { useState, useEffect } from "react";

function App() {
  const [buttonColors, setButtonColors] = useState([
    "bg-orange-600", 
    "bg-gray-300",
    "bg-gray-300",
  ]);

  const [allInOneBgColor, setAllInOneBgColor] = useState("bg-firstbg");
  const [textColor, setTextColor] = useState("text-white");
  const [answerBgColor, setAnswerBgColor] = useState("bg-bgthird");
  const [contentButtonColor, setContentButtonColor] = useState("bg-firstbuttonsbg");
  const [contentTextColor, setContentTextColor] = useState("text-inputbgthird");

  const [display, setDisplay] = useState("0"); 
  const [input, setInput] = useState(""); 

  useEffect(() => {
    handleChangeColor(0, "bg-orange-600", "bg-firstbg", "text-white", "bg-bgthird", "bg-firstbuttonsbg", "text-inputbgthird");
  }, []);

  const handleChangeColor = (index, buttonColor, containerBgColor, textColor, answerBg, buttonColorForContent, textContentButton) => {
    const newColors = ["bg-gray-300", "bg-gray-300", "bg-gray-300"];
    newColors[index] = buttonColor;
    setButtonColors(newColors);
    setAllInOneBgColor(containerBgColor);
    setTextColor(textColor);
    setAnswerBgColor(answerBg);
    setContentButtonColor(buttonColorForContent);
    setContentTextColor(textContentButton);
  };

  const handleButtonClick = (value) => {
    if (value === "DEL") {
      const newInput = input.slice(0, -1);
      setInput(newInput);
      setDisplay(newInput || "0");
    } else if (value === "RESET") {
      setInput("");
      setDisplay("0");
    } else if (value === "=") {
      try {
        const result = eval(input.replace(/x/g, "*")); 
        setDisplay(result.toString());
        setInput(result.toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      const newInput = input + value;
      setInput(newInput);
      setDisplay(newInput || "0");
    }
  };

  return (
    <div className={`allinone w-full h-[100vh] ${allInOneBgColor}`}>
      <div className="container w-[500px] mx-auto">
        <div className={`content-out flex justify-between ${textColor}`}>
          <h3 className="relative top-6">calc</h3>

          <div className="right--content flex gap-4">
            <h4 className="relative top-6">THEME</h4>

            <div className="block">
              <div className="flex w-24 justify-between px-2">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div className="content w-24 h-8 bg-gray-300 rounded-3xl flex justify-between items-center px-1 ">
                <button
                  className={`theme1 w-6 h-6 rounded-full ${buttonColors[0]}`}
                  onClick={() => handleChangeColor(0, "bg-orange-600", "bg-firstbg", "text-white", "bg-bgthird", "bg-firstbuttonsbg", "text-inputbgthird")}
                ></button>

                <button
                  className={`theme2 w-6 h-6 rounded-full ${buttonColors[1]}`}
                  onClick={() => handleChangeColor(1, "bg-orange-500", "bg-secondbg", "text-black", "bg-contentin", "bg-gray-300", "text-inputbgthird")}
                ></button>

                <button
                  className={`theme3 w-6 h-6 rounded-full ${buttonColors[2]}`}
                  onClick={() => handleChangeColor(2, "bg-blue-500", "bg-bgthird", "text-yellow-200", "bg-inputbgthird", "bg-purple-600", "text-yellow")}
                ></button>
              </div>
            </div>
          </div>
        </div>

        <div className={`answer w-full h-20 mt-10 rounded-lg p-4 ${answerBgColor}`}>
          <p className={`final w-full text-right text-4xl ${textColor}`}>
            {display}
          </p>
        </div>

        <div className={`content-buttons ${contentTextColor} grid grid-cols-4 gap-2 p-12 text-2xl ${answerBgColor} mt-10`}>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("7")}>7</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("8")}>8</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("9")}>9</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("DEL")}>DEL</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("4")}>4</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("5")}>5</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("6")}>6</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("+")}>+</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("1")}>1</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("2")}>2</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("3")}>3</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("-")}>-</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick(".")}>.</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("0")}>0</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("/")}>/</button>
          <button className={`h-16 flex justify-center items-center rounded-xl ${contentButtonColor}`} onClick={() => handleButtonClick("x")}>x</button>
          <button className={`w-full col-span-2 ${contentButtonColor} p-2 rounded-xl`} onClick={() => handleButtonClick("RESET")}>RESET</button>
          <button className={`w-full col-span-2 ${contentButtonColor} p-2 rounded-xl`} onClick={() => handleButtonClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
