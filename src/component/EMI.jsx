import { useState } from "react";
import "./emi.css";

const EMI = () => {

    const [principal, setPrincipal] = useState(0);
    const [interest, setInterest] = useState(0);
    const [tenure, setTenure] = useState(0);
    const [emi, setEMI] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalAmount, setAmount] = useState(0);

    const handlePrincipalChange = (event) => {
        setPrincipal(event.target.value);
    }

    const handleInterestChange = (event) => {
        setInterest(event.target.value);
    }

    const handleTenureChange = (event) => {
        setTenure(event.target.value);
    }

    const calculateLoan = (event) => {
        let p = parseFloat(principal);
        let r = parseFloat(interest);
        let t = parseFloat(tenure);

        let actualRate = parseFloat(r / 12 / 100);
        let calculateEmi = p * actualRate * (Math.pow(1 + actualRate, t) / (Math.pow(1 + actualRate, t) - 1));

        setEMI(Math.round(calculateEmi));
        setTotalInterest(Math.round(calculateEmi) * t - p);
        setAmount(Math.round(calculateEmi) * t);
    }

  return (
    <div className='loan-calculator'>
        <div className="top">
            <h2>Loan Calculator</h2>
            <form>
                <div className='group'>
                    <div className="title">Amount</div>
                    <input onChange={handlePrincipalChange} type='text' value={principal} className='loan-amount' />
                </div>
                <div className='group'>
                    <div className="title">Interest Rate</div>
                    <input onChange={handleInterestChange} type='text' value={interest} className='interest-rate' />
                </div>
                <div className='group'>
                    <div className="title">Tenure (in months)</div>
                    <input onChange={handleTenureChange} type='text' value={tenure} className='loan-tenure' />
                </div>
            </form>
        </div>
        <div className='result'>
            <div className="left">
                <div className="loan-emi">
                    <h3>Loan EMI</h3>
                    <div className="value">{emi}</div>
                </div>
                <div className="total-interest">
                    <h3>Total Interest Payable</h3>
                    <div className="value">{totalInterest}</div>
                </div>
                <div className="total-amount">
                    <h3>Total Amount</h3>
                    <div className="value">{totalAmount}</div>
                </div>
                <button onClick={calculateLoan} className='calculate-btn'>Calculate</button>
            </div>
            <div className="right">
                Chart
            </div>
        </div>
    </div>
  )
}

export default EMI