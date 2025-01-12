import { React, useId } from "react";

function InputBox({
  label,
  inputField = false,
  typeOfChange,
  amountNow,
  onAmountChange,
  selectOptions = [],
  selectCurrency,
  onCurrencyChange,
}) {
  const amountInputId = useId();

  return (
    <div className="w-full h-[100px] bg-blue-600 flex items-center justify-evenly rounded-lg">
      <div className="text-white text-lg">
        <label htmlFor={amountInputId}>{label}</label>
      </div>
      <div>
        <input
          id={amountInputId}
          type="number"
          className="outline-none rounded-md text-white text-lg p-2 text-semibold bg-black"
          disabled={inputField}
          value={amountNow}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div>
        <select
          className="outline-none p-2 bg-slate-950 text-lg rounded-lg cursor-pointer"
          value={typeOfChange}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {/* <option value={typeOfChange} selected>{typeOfChange}</option> */}
          {selectOptions.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
