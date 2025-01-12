// https://latest.currency-api.pages.dev/v1/currencies/inr.json

import { useState } from "react";
import { useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
