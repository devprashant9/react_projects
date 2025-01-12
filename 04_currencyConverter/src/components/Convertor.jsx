import React from "react";
import InputBox from "./InputBox";
import { useState} from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function Convertor() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [currentAmount, setCurrentAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);


  const currencyDetails = useCurrencyInfo(from);
  const selectOptions = Object.keys(currencyDetails);

  // console.log(currentAmount);
  // console.log(convertedAmount);

  const swapConvertor = () => {
    setFrom(to);
    setTo(from);
    setCurrentAmount(convertedAmount);
    setConvertedAmount(currentAmount);
  };

  const calculateAmount = () => {
    setConvertedAmount(currentAmount * currencyDetails[to]);
  };

  return (
    <div className="w-[500px] h-[350px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl">
      <h2 className="text-center text-2xl p-2 text-white font-semibold">
        Currency Convertor
      </h2>
      <form
        className="flex flex-col justify-center p-2 relative"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="m-2">
          <InputBox
            label="from"
            inputField={false}
            typeOfChange={from}
            amountNow={currentAmount}
            onAmountChange={(current) => setCurrentAmount(current)}
            selectOptions={selectOptions}
            selectCurrency="usd"
            onCurrencyChange={(val) => {
              setFrom(val);
            }}
          />
        </div>
        <div>
          <button
            className="absolute bg-orange-600 text-lg text-white text-semibold p-1 rounded-lg border-2 left-[45%] top-[34%] cursor-pointer"
            onClick={swapConvertor}
          >
            swap
          </button>
        </div>
        <div className="m-2">
          <InputBox
            label="to"
            inputField={true}
            typeOfChange={to}
            amountNow={convertedAmount}
            selectOptions={selectOptions}
            selectCurrency="usd"
            onCurrencyChange={(val) => {
              setTo(val);
            }}
          />
        </div>
        <div className="m-2">
          <button
            className="w-full bg-orange-600 p-2 rounded-xl text-2xl cursor-pointer"
            onClick={calculateAmount}
          >
            Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Convertor;
