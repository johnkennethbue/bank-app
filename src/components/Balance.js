import { useState } from "react";
import {DepositModal} from "./Deposit.js"

export const Balance = () => {
    const [balanceState, setBalanceState] = useState('$1,000,000');
    return (
    <div className = "Parent">
          <DepositModal onChange = {balanceState => setBalanceState(balanceState)}/>
          {/* <DepositModal  /> */}
    </div>

    )}

export default Balance;