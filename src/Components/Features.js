
import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material';

const Features = (props) => {

    const [etfs, setEtfs] = useState();
    const [iPOs, setIPOs] = useState();
    const [turnover, setTurnover] = useState();
    const [trading_Calls, setTrading_Calls] = useState();
    const [wealth_Baskets, setWealth_Baskets] = useState();
    const [stock_Screeners, setStock_Screeners] = useState();

    useEffect(() => {
        props.getIpos(iPOs)
        props.getEtfs(etfs)
        props.getTurnOver(turnover)
        props.getTradingCalls(trading_Calls)
        props.getWealthBasket(wealth_Baskets)
        props.getStockScreeners(stock_Screeners)
    },[iPOs,etfs,turnover,trading_Calls,wealth_Baskets,stock_Screeners])

  return (
    <div>
        <TextField
            margin="dense"
            multiline
            id="features"
            label="etfs"
            inputProps={{ maxLength: 10 }}
            value={etfs}
            onChange={(e) => setEtfs(e.target.value)}
            variant="outlined"
        />
        <TextField
            margin="dense"
            multiline
            id="features"
            label="iPOs"
            inputProps={{ maxLength: 10 }}
            value={iPOs}
            onChange={(e) => setIPOs(e.target.value)}
            variant="outlined"
        />      
        <TextField
            margin="dense"
            multiline
            id="features"
            label="turnover"
            inputProps={{ maxLength: 10 }}
            value={turnover}
            onChange={(e) => setTurnover(e.target.value)}
            variant="outlined"
        />  
        <TextField
            margin="dense"
            multiline
            id="features"
            label="wealth_Baskets"
            inputProps={{ maxLength: 10 }}
            value={wealth_Baskets}
            onChange={(e) => setWealth_Baskets(e.target.value)}
            variant="outlined"
        />  
        <TextField
            margin="dense"
            multiline
            id="features"
            label="trading_Calls"
            inputProps={{ maxLength: 10 }}
            value={trading_Calls}
            onChange={(e) => setTrading_Calls(e.target.value)}
            variant="outlined"
        />  
        <TextField
            margin="dense"
            multiline
            id="features"
            label="stock_Screeners"
            inputProps={{ maxLength: 10 }}
            value={stock_Screeners}
            onChange={(e) => setStock_Screeners(e.target.value)}
            variant="outlined"
        />  
</div>
  )
}

export default Features