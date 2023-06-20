import React, {useEffect, useRef, useState} from 'react';
import { Block } from './Block';
import './index.css';

function App() {

    // const [rate, setRate] = useState({})
    const rate = useRef({"rates": {
            "EUR": 0.9147,
            "USD": 1,
            "JPY": 141.3244,
            "BGN": 1.7889,
            "CZK": 21.7287,
            "DKK": 6.8134,
            "GBP": 0.7839,
            "HUF": 340.7573,
            "PLN": 4.0669,
            "RON": 4.5394,
            "SEK": 10.7546,
            "CHF": 0.8971,
            "ISK": 136.3761,
            "NOK": 10.7157,
            "TRY": 23.5697,
            "AUD": 1.4744,
            "BRL": 4.7906,
            "CAD": 1.3238,
            "CNY": 7.1766,
            "HKD": 7.8258,
            "IDR": 15009.7046,
            "ILS": 3.606,
            "INR": 82.0932,
            "KRW": 1286.3167,
            "MXN": 17.1034,
            "MYR": 4.64,
            "NZD": 1.6202,
            "PHP": 55.5776,
            "SGD": 1.3435,
            "THB": 34.7398,
            "ZAR": 18.268
        }})

    const [fromCurrency, setFromCurrency] = useState('PLN')
    const [toCurrency, setToCurrency] = useState('USD')

    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(1)

    /*useEffect(() => {
        fetch('https://anyapi.io/api/v1/exchange/rates')
            .then(res => res.json())
            .then(json => {
                setRate(json)
                console.log(json);
            })
            .catch(err => {
                console.log(err)
                alert('Cant get info')
            })
    }, [])*/


    const onChangeFromPrice = (value) => {
        const price = value / rate.current.rates[fromCurrency]
        const result = price * rate.current.rates[toCurrency]
        setToPrice(result.toFixed(4))
        setFromPrice(value)
    }

    const onChangeToPrice = (value) => {
        const result = (rate.current.rates[fromCurrency] / rate.current.rates[toCurrency]) * value
        setFromPrice(result.toFixed(4))
        setToPrice(value)
    }

     useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrency, fromPrice])

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toCurrency, toPrice])

    return (
        <div className="App">
            <Block
                value={fromPrice}
                currency={fromCurrency}
                onChangeValue={onChangeFromPrice}
                onChangeCurrency={setFromCurrency}
            />
            <Block
                value={toPrice}
                currency={toCurrency}
                onChangeValue={onChangeToPrice}
                onChangeCurrency={setToCurrency}
            />
        </div>
    );
}

export default App;