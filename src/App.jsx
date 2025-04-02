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
      <option value="KZT">KZT</option>
      <option value="LAK">LAK</option>
      <option value="LBP">LBP</option>
      <option value="LKR">LKR</option>
      <option value="LRD">LRD</option>
      <option value="LSL">LSL</option>
      <option value="LYD">LYD</option>
      <option value="MAD">MAD</option>
      <option value="MDL">MDL</option>
      <option value="MGA">MGA</option>
      <option value="MKD">MKD</option>
      <option value="MMK">MMK</option>
      <option value="MNT">MNT</option>
      <option value="MOP">MOP</option>
      <option value="MRU">MRU</option>
      <option value="MUR">MUR</option>
      <option value="MVR">MVR</option>
      <option value="MWK">MWK</option>
      <option value="MXN">MXN</option>
      <option value="MYR">MYR</option>
      <option value="MZN">MZN</option>
      <option value="NAD">NAD</option>
      <option value="NIO">NIO</option>
      <option value="NOK">NOK</option>
      <option value="NPR">NPR</option>
      <option value="NZD">NZD</option>
      <option value="OMR">OMR</option>
      <option value="PAB">PAB</option>
      <option value="PEN">PEN</option>
      <option value="PGK">PGK</option>
      <option value="PHP">PHP</option>
      <option value="PKR">PKR</option>
      <option value="PLN">PLN</option>
      <option value="PYG">PYG</option>
      <option value="QAR">QAR</option>
      <option value="RON">RON</option>
      <option value="RSD">RSD</option>
      <option value="RUB">RUB</option>
      <option value="RWF">RWF</option>
      <option value="SAR">SAR</option>
      <option value="SBD">SBD</option>
      <option value="SCR">SCR</option>
      <option value="SDG">SDG</option>
      <option value="SHP">SHP</option>
      <option value="SLE">SLE</option>
      <option value="SLL">SLL</option>
      <option value="SOS">SOS</option>
      <option value="SRD">SRD</option>
      <option value="SSP">SSP</option>
      <option value="STN">STN</option>
      <option value="SYP">SYP</option>
      <option value="SZL">SZL</option>
      <option value="THB">THB</option>
      <option value="TJS">TJS</option>
      <option value="TMT">TMT</option>
      <option value="TND">TND</option>
      <option value="TOP">TOP</option>
      <option value="TRY">TRY</option>
      <option value="TTD">TTD</option>
      <option value="TVD">TVD</option>
      <option value="TWD">TWD</option>
      <option value="TZS">TZS</option>
      <option value="UAH">UAH</option>
      <option value="UGX">UGX</option>
      <option value="UYU">UYU</option>
      <option value="UZS">UZS</option>
      <option value="VES">VES</option>
      <option value="VND">VND</option>
      <option value="VUV">VUV</option>
      <option value="WST">WST</option>
      <option value="XAF">XAF</option>
      <option value="XCD">XCD</option>
      <option value="XOF">XOF</option>
      <option value="XPF">XPF</option>
      <option value="YER">YER</option>
      <option value="ZAR">ZAR</option>
      <option value="ZMW">MDL</option>
      <option value="ZWL">MDL</option>
     
      
      

      {}
    </select>
  </div>
);

const App = () => {
  const [amount, setAmount] = useState(1000); 
  const [fromCurrency, setFromCurrency] = useState("AED"); 
  const [toCurrency, setToCurrency] = useState("NGN"); 
  const [result, setResult] = useState(""); 
  const [isLoading, setIsLoading] = useState(false);

  
  const getFlagUrl = (currency) => `https://flagsapi.com/${currency.slice(0, 2)}/flat/64.png`;

  
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  
  const getExchangeRate = async () => {
    const API_KEY = `1ae8888299818a65c46eefdb`;   
    const API_URL = ` https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    if (isLoading || !amount) return; 
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

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  
  useEffect(() => {
    getExchangeRate();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="currency-converter">
      <h2 className="converter-title">Currency Converter</h2>
      <form className="converter-form" onSubmit={handleFormSubmit}>
        
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

        
        <button
          type="submit"
          className={`${isLoading ? "loading" : ""} submit-button`}
          disabled={isLoading}
        >
          {isLoading ? "Fetching..." : "Get Exchange Rate"}
        </button>

        
        <p className="exchange-rate-result">
          {isLoading ? "Getting exchange rate..." : result || "Enter amount and select currencies"}
        </p>
      </form>
    </div>
  );
};

export default App;