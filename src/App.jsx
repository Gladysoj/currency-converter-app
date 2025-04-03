import { useEffect, useState } from "react";

const CurrencySelect = ({ selectedCurrency, handleCurrency, flagUrl }) => (
  <div className="currency-select">
    <img src={flagUrl} alt="flag" />
    <select
      className="currency-dropdown"
      value={selectedCurrency}
      onChange={handleCurrency}
    >
      <option value="AED">AED - Emirati Dirham</option>
      <option value="AFN">AFN - Afghan Afghani</option>
      <option value="ALL">ALL - Albanian Lek</option>
      <option value="AMD">AMD - Armenian Dram</option>
      <option value="ANG">ANG - Dutch Guilder</option>
      <option value="AOA">AOA - Angola Kwanza</option>
      <option value="ARS">ARS - Argentine Peso</option>
      <option value="AUD">AUD - Australian Dollar</option>
      <option value="AWG">AWG - Aruban or Dutch Guilder</option>
      <option value="AZN">AZN - Azerbaijan Manat</option>
      <option value="BAM">BAM - Bosnian Convertible Mark</option>
      <option value="BBD">BBD - Barbadian or Bajan Dollar</option>
      <option value="BDT">BDT - Bangladeshi Taka</option>
      <option value="BGN">BGN - Bulgarian Lev</option>
      <option value="BHD">BHD - Bahraini Dinar</option>
      <option value="BIF">BIF - Burundian Franc</option>
      <option value="BMD">BMD - Bermudian Dollar</option>
      <option value="BND">BND - Bruneian Dollar</option>
      <option value="BOB">BOB - Bolivian Boliviano</option>
      <option value="BRL">BRL - Brazilian Real</option>
      <option value="BSD">BSD - Bahamian Dollar</option>
      <option value="BTN">BTN - Bhutanese Ngultrum</option>
      <option value="BWP">BWP - Botswana Pula</option>
      <option value="BYN">BYN - Belarusian Ruble</option>
      <option value="BZD">BZD - Belizean Dollar</option>
      <option value="CAD">CAD - Canadian Dollar</option>
      <option value="CDF">CDF - Congolese Franc</option>
      <option value="CHF">CHF - Swiss Franc</option>
      <option value="CLP">CLP - Chilean Peso</option>
      <option value="CNY">CNY - Chinese Yuan Renminbi</option>
      <option value="COP">COP - Colombian Peso</option>
      <option value="CRC">CRC - Costa Rican Colon</option>
      <option value="CUP">CUP - Cuban Peso</option>
      <option value="CVE">CVE - Cape Verdean Escudo</option>
      <option value="CZK">CZK - Czech Koruna</option>
      <option value="DJF">DJF - Djiboutian Franc</option>
      <option value="DKK">DKK - Danish Krone</option>
      <option value="DOP">DOP - Dominican Peso</option>
      <option value="DZD">DZD - Algerian Dinar</option>
      <option value="EGP">EGP - Egyptian Pound</option>
      <option value="ERN">ERN - Eritrean Nakfa</option>
      <option value="ETB">ETB - Ethopian Birr</option>
      <option value="EUR">EUR - Euro</option>
      <option value="FJD">FJD - Fijian Dollar</option>
      <option value="FKP">FKP - Falkland Island Pound</option>
      <option value="FOK">FOK - </option>
      <option value="GBP">GBP - British Pound</option>
      <option value="GEL">GEL - Georgian Lari</option>
      <option value="GGP">GGP - Guernesey Pound</option>
      <option value="GHS">GHS - Ghanaian Cedi</option>
      <option value="GIP">GIP - Gibraltar Pound</option>
      <option value="GMD">GMD - Gambian Dalasi</option>
      <option value="GNF">GNF - Guinean Franc</option>
      <option value="GTQ">GTQ - Guatemalan Quetzal</option>
      <option value="GYD">GYD - Guyanese Dollar</option>
      <option value="HKD">HKD - Hong Kong Dollar</option>
      <option value="HNL">HNL - Honduran Lempira</option>
      <option value="HRK">HRK - Croatian Kuna</option>
      <option value="HTG">HTG - Haitian Gourde</option>
      <option value="HUF">HUF - Hungarian Forint</option>
      <option value="IDR">IDR - Indonesian Rupiah</option>
      <option value="ILS">ILS - Isreali Shekel</option>
      <option value="IMP">IMP - Isle of Man Pound</option>
      <option value="INR">INR - Indian Rupee</option>
      <option value="IQD">IQD - Iraqi Dinar</option>
      <option value="IRR">IRR - Iranian Rial</option>
      <option value="ISK">ISK - Icelandic Krona</option>
      <option value="JEP">JEP - Jersey Pound</option>
      <option value="JMD">JMD - Jamaican Dollar</option>
      <option value="JOD">JOD - Jordanian Dinar</option>
      <option value="JPY">JYP - Japanese Yen</option>
      <option value="KES">KES - Kenyan Shilling</option>
      <option value="KGS">KGS - Krygyzstani Som</option>
      <option value="KHR">KHR - Cambodian Riel</option>
      <option value="KYD">KYD - Caymanian Dollar</option>
      <option value="KMF">KMF - Comorian Franc</option>
      <option value="KPW">KPW - North Korean Won</option>
      <option value="KRW">KRW - South Korean Won</option>
      <option value="KWD">KWD - Kuwaiti Dinar</option> 
      <option value="KZT">KZT - Kazakhstani Tenge</option>
      <option value="MXN">MXN - Mexican Peso</option>
      <option value="MWK">MWK - Malawian Kwacha</option>
      <option value="MVR">MVR - Maldivian Rufiyaa</option>
      <option value="MUR">MUR - Mauritian Rupee</option>
      <option value="MOP">MOP - Macau Pataca</option>
      <option value="MNT">MNT - Mongolian Tughrik</option>
      <option value="MMK">MMK - Burmese Kyat</option>
      <option value="MKD">MKD - Macedonian Denar</option>
      <option value="MGA">MGA - Malagasy Ariary</option>
      <option value="MDL">MDL - Moldovan Leu</option>
      <option value="MAD">MAD - Morroccan Dirham</option>
      <option value="MYR">MYR - Malaysian Ringgit</option>
      <option value="MZN">MZN - Mozambican Metical</option>
      <option value="MRU">MRU - Mauritianian Ouguiya</option>
      <option value="NAD">NAD - Namibian Dollar</option>
      <option value="NGN">NGN - Nigerian Naira</option>
      <option value="NIO">NIO - Nicaraguan Cordoba</option>
      <option value="NOK">NOK - Norwegian Krone</option>
      <option value="NPR">NPR - Nepalese Rupee</option>
      <option value="NZD">NZD - New Zealand Dollar</option>
      <option value="LTL">LTL - Lithuanian Litas</option>
      <option value="LINK">LINK - Chainlink</option>
      <option value="LTC">LTC - Litecoin </option>
      <option value="LAK">LAK - Lao Kip</option>
      <option value="LUNA">LUNA - Terra</option>
      <option value="LBP">LBP - Lebanese Pound</option>
      <option value="LKR">LKR - Sri Lankan Rupee</option>
      <option value="LRD">LRD - Liberian Dollar</option>
      <option value="LSL">LSL - Basotho Loti</option>
      <option value="LYD">LYD - Libyan Dinar</option>
      <option value="LVL">LVL - Latvian Dinar</option>
      <option value="OMR">OMR - Omani Rial</option>
      <option value="PAB">PAB - Panamanian Balboa</option>
      <option value="PEN">PEN - Peruvian Sol</option>
      <option value="PGK">PGK - Papua New Guinean Kina</option>
      <option value="PHP">PHP - Philippine Peso</option>
      <option value="PKR">PKR - Pakistani Rupee</option>
      <option value="PLN">PLN - Polish Zloty</option>
      <option value="PYG">PYG - Paraguayan Guarani</option>
      <option value="QAR">QAR - Qatari Riyal</option>
      <option value="RON">RON - Romanian Leu</option>
      <option value="RSD">RSD - Serbian Dinar</option>
      <option value="RUB">RUB - Russian Ruble</option>
      <option value="RWF">RWF - Rwandan Franc</option>
      <option value="SAR">SAR - Saudi Arabian Riyal</option>
      <option value="SBD">SBD - Solomon Islander Dollar</option>
      <option value="SCR">SCR - Seychellois Rupee</option>
      <option value="SDG">SDG - Sudanese Pound</option>
      <option value="SEK">SEK - Swedish Krona</option>
      <option value="SGD">SGD - Singapore Dollar </option>
      <option value="SHP">SHP - Saint Helenian Pound</option>
      <option value="SLE">SLE - Sierra Leonean Leone</option>
      <option value="SLL">SLL - Sierra Leonean Leone</option>
      <option value="SOS">SOS - Somali Shilling</option>
      <option value="SRD">SRD - Surinamese Dollar</option>
      <option value="SPL">SPL - Seborgan Luigino</option>
      <option value="STN">STN - Sao Tomean Dobra</option>
      <option value="SYP">SYP - Syrian Pound</option>
      <option value="SVC">SVC - Salvadoran Colon</option>
      <option value="SZL">SZL - Swazi Lilangeni</option>
      <option value="THB">THB - Thai Baht</option>
      <option value="TJS">TJS - Tajikistani Somoni</option>
      <option value="TMT">TMT - Turkmenistani Manat</option>
      <option value="TND">TND - Tunisian Dinar</option>
      <option value="TOP">TOP - Tongan Pa'anga</option>
      <option value="TRY">TRY - Turkish Lira</option>
      <option value="TTD">TTD - Trinidadian Dollar</option>
      <option value="TVD">TVD - Tuvaluan Dollar</option>
      <option value="TWD">TWD - Taiwan New Dollar</option>
      <option value="TZS">TZS - Tanzanian Shilling</option>
      <option value="UAH">UAH - Ukraianian Hryvnia</option>
      <option value="UGX">UGX - Ugandan Shilling</option>
      <option value="UYU">UYU - Uruguayan Peso</option>
      <option value="UNI">UNI - Uniswap</option>
      <option value="USD">USD - US Dollar</option>
      <option value="UZS">UZS - Ubekistani Som</option>
      <option value="VEF">VEF - Venezuelan Bolivar</option>
      <option value="VES">VES - Venezuelan Bolivar</option>
      <option value="VND">VND - Vietnamese Dong</option>
      <option value="VUV">VUV - NiVanuatu Vatu</option>
      <option value="WST -Samoan Tala">WST - Samoan Tala</option>
      <option value="XAF">XAF - Central African CFA Franc BEAC</option>
      <option value="XAG">XAG - Silver Ounce</option>
      <option value="XAU">XAU - Gold Ounce</option>
      <option value="XCD">XCD - East Caribbean Dollar</option>
      <option value="XCG">XCG - Caribbean Guilder</option>
      <option value="XDR">XDR - IMF Special Drawing Rights</option>
      <option value="XLM">XML - Stellar Lumen</option>
      <option value="XOF">XOF - CFA Franc</option>
      <option value="XPF">XPF - CFP Franc</option>
      <option value="XPT">XPT - Platinum Ounce</option>
      <option value="XRP">XRP - Ripple</option>
      <option value="YER">YER - Yemeni Rial</option>
      <option value="ZAR">ZAR - South African Rand</option>
      <option value="ZMK">ZMK - Zambian Kwacha</option>
      <option value="ZMW">ZMW - Zambian Kwacha</option>
      <option value="ZWD">ZWD - Zimbabwean Dollar</option>
      <option value="ZWG">ZWG - Zimbabwean Dollar</option>
      <option value="ZWL">ZWL -Zimbabwean Dollar</option>
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