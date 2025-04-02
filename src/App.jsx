import { useEffect, useState } from "react";

const CurrencySelect = ({ selectedCurrency, handleCurrency, flagUrl }) => (
  <div className="currency-select">
    <img src={flagUrl} alt="flag" />
    <select
      className="currency-dropdown"
      value={selectedCurrency}
      onChange={handleCurrency}
    >
      <option value="AED">AED</option>
      <option value="AFN">AFN</option>
      <option value="ALL">ALL</option>
      <option value="AMD">AMD</option>
      <option value="ANG">ANG</option>
      <option value="AOA">AOA</option>
      <option value="ARS">ARS</option>
      <option value="AUD">AUD</option>
      <option value="AWG">AWG</option>
      <option value="AZN">AZN</option>
      <option value="BAM">BAM</option>
      <option value="BBD">BBD</option>
      <option value="BDT">BDT</option>
      <option value="BGN">BGN</option>
      <option value="BHD">BHD</option>
      <option value="BIF">BIF</option>
      <option value="BMD">BMD</option>
      <option value="BND">BND</option>
      <option value="BOB">BOB</option>
      <option value="BRL">BRL</option>
      <option value="BSD">BSD</option>
      <option value="BTN">BTN</option>
      <option value="BWP">BWP</option>
      <option value="BYN">BYN</option>
      <option value="BZD">BZD</option>
      <option value="CAD">CAD</option>
      <option value="CDF">CDF</option>
      <option value="CHF">CHF</option>
      <option value="CLP">CLP</option>
      <option value="CNY">CNY</option>
      <option value="COP">COP</option>
      <option value="CRC">CRC</option>
      <option value="CUP">CUP</option>
      <option value="CVE">CVE</option>
      <option value="CZK">CZK</option>
      <option value="DJF">DJF</option>
      <option value="DKK">DKK</option>
      <option value="DOP">DOP</option>
      <option value="DZD">DZD</option>
      <option value="EGP">EGP</option>
      <option value="ERN">ERN</option>
      <option value="ETB">ETB</option>
      <option value="EUR">EUR</option>
      <option value="FJD">FJD</option>
      <option value="FKP">FKP</option>
      <option value="FOK">FOK</option>
      <option value="GBP">GBP</option>
      <option value="GEL">GEL</option>
      <option value="GGP">GGP</option>
      <option value="GHS">GHS</option>
      <option value="GIP">GIP</option>
      <option value="GMD">GMD</option>
      <option value="GNF">GNF</option>
      <option value="GTQ">GTQ</option>
      <option value="GYD">GYD</option>
      <option value="HKD">HKD</option>
      <option value="HNL">HNL</option>
      <option value="HRK">HRK</option>
      <option value="HTG">HTG</option>
      <option value="HUF">HUF</option>
      <option value="IDR">IDR</option>
      <option value="ILS">ILS</option>
      <option value="IMP">IMP</option>
      <option value="INR">INR</option>
      <option value="IQD">IQD</option>
      <option value="IRR">IRR</option>
      <option value="ISK">ISK</option>
      <option value="JEP">JEP</option>
      <option value="JMD">JMD</option>
      <option value="JOD">JOD</option>
      <option value="JPY">JYP</option>
      <option value="KES">KES</option>
      <option value="KGS">KGS</option>
      <option value="KHR">KHS</option>
      <option value="KID">KID</option>
      <option value="KMF">KMF</option>
      <option value="KRW">KRW</option>
      <option value="KWD">KWD</option>
      <option value="ZAR">ZAR</option>
      <option value="NGN">NGN</option>
      <option value="MXN">MXN</option>
      <option value="MWK">MWK</option>
      <option value="MVR">MVR</option>
      <option value="MRU">MRU</option>
      <option value="MOP">MOP</option>
      <option value="MNT">MNT</option>
      <option value="MKK">MKK</option>
      <option value="MKD">MKD</option>
      <option value="MGA">MGA</option>
      <option value="MDL">MDL</option>
      <option value="MAD">MAD</option>
      <option value="LSL">LSL</option>
      <option value="LRD">LRD</option>
      <option value="LKR">LKR</option>
      <option value="LAK">LAK</option>
      <option value="KZT">KZT</option>
      <option value="KYD">KYD</option>

      {/* Add more currencies as needed */}
    </select>
  </div>
);

const App = () => {
  const [amount, setAmount] = useState(1000); // Default amount
  const [fromCurrency, setFromCurrency] = useState("AED"); // Default from currency
  const [toCurrency, setToCurrency] = useState("NGN"); // Default to currency
  const [result, setResult] = useState(""); // Conversion result
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Function to get flag URL based on currency code
  const getFlagUrl = (currency) => `https://flagsapi.com/${currency.slice(0, 2)}/flat/64.png`;

  // Swap currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Fetch exchange rate from API
  const getExchangeRate = async () => {
    const API_KEY = `1ae8888299818a65c46eefdb`;   // Replace with your actual API key
    const API_URL = ` https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    if (isLoading || !amount) return; // Avoid fetch if loading or amount is empty
    setIsLoading(true);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch exchange rate!");
      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
    } catch (error) {
      setResult("Error: Could not fetch exchange rate!");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  // Fetch exchange rate on initial render or when dependencies change
  useEffect(() => {
    getExchangeRate();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="currency-converter">
      <h2 className="converter-title">Currency Converter</h2>
      <form className="converter-form" onSubmit={handleFormSubmit}>
        {/* Amount Input */}
        <div className="form-group">
          <label className="form-label">Enter Amount</label>
          <input
            type="number"
            className="form-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="0.01"
            required
          />
        </div>

        {/* Currency Selection and Swap */}
        <div className="form-group form-currency-group">
          <div className="form-section">
            <label className="form-label">From</label>
            <CurrencySelect
              selectedCurrency={fromCurrency}
              handleCurrency={(e) => setFromCurrency(e.target.value)}
              flagUrl={getFlagUrl(fromCurrency)}
            />
          </div>

          <div className="swap-icon" onClick={handleSwapCurrencies} title="Swap currencies">
            <svg width="16" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                fill="#000"
              />
            </svg>
          </div>

          <div className="form-section">
            <label className="form-label">To</label>
            <CurrencySelect
              selectedCurrency={toCurrency}
              handleCurrency={(e) => setToCurrency(e.target.value)}
              flagUrl={getFlagUrl(toCurrency)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`${isLoading ? "loading" : ""} submit-button`}
          disabled={isLoading}
        >
          {isLoading ? "Fetching..." : "Get Exchange Rate"}
        </button>

        {/* Result Display */}
        <p className="exchange-rate-result">
          {isLoading ? "Getting exchange rate..." : result || "Enter amount and select currencies"}
        </p>
      </form>
    </div>
  );
};

export default App;