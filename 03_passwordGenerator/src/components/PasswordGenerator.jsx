import { useCallback, useEffect, useState, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassword = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  };

  const passwordGenerator = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let tempPassword = "";

    if (numbers) chars += "0123456789";
    if (characters) chars += "~!@#$%^&*()_+{}:";

    for (let i = 1; i <= length; i++) {
      let char = Math.round(Math.random() * chars.length + 1);
      tempPassword += chars.charAt(char);
    }
    setPassword(tempPassword);
  }, [length, numbers, characters]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters]);
  return (
    <div className="w-[700px] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 rounded-lg flex flex-col justify-center p-2 items-center ">
      <h2 className="text-[1.2rem] my-4">Random Password Generator</h2>
      <div className="p-2 flex items-center justify-center">
        <input
          className="p-1 text-orange-600 text-lg rounded-tl-lg rounded-bl-lg outline-none font-medium"
          type="text"
          value={password}
          readOnly
          placeholder="Password"
          ref={passwordRef}
        />
        <button
          className="p-1 text-white bg-blue-700 text-lg rounded-tr-lg rounded-br-lg font-medium"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
      <div className="p-2 flex flex-col justify-center">
        <div className="p-2">
          <label htmlFor="range" className="text-orange-600">
            Length : {length}{" "}
          </label>
          <input
            type="range"
            min={10}
            max={99}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>
        <div className="p-2">
          <label htmlFor="Numbers" className="text-orange-600">
            Numbers:{" "}
          </label>
          <input
            type="checkbox"
            value={numbers}
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
        </div>
        <div className="p-2">
          <label htmlFor="special-characters" className="text-orange-600">
            Special Characters:{" "}
          </label>
          <input
            type="checkbox"
            value={characters}
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
