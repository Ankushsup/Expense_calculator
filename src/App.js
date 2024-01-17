import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpenses/NewExpense';
import './App.css';
import React, { useEffect, useState, useCallback } from 'react'
import { Button, Divider, TextField, Typography} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// import PlanList from '../planList';
import {Select , MenuItem} from '@mui/material';
import { CircularProgress, Snackbar } from '@mui/material';
import MuiAlert from "@mui/material/Alert";
import Features from './Components/Features';

var features = {"ETFs":"Unlimited","IPOs":"Unlimited","Turnover":"10Cr","Trading Calls":"Unlimited","Wealth Baskets":"Unlimited","Stock Screeners":"Unlimited"}

const plan_duration = [
  'WEEK',
  'MONTH',
  'SEMI_ANUALLY',
  'YEAR'
]

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function App() {

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

// const [open, setOpen] = React.useState(false);
//     const [planDuration, setPlanDuration] = useState(" ");
//     const [isSubmitting , setIsSubmitting] = useState(false);   
//     const [showSnackbar, setShowSnackbar] = useState(false);
//     const [snackBarMessage, setSnackBarMessage] = useState("");
//     const [severity, setSeverity] = useState("success");
//     const [planAdded, setPlanAdded] = useState(false);

//     const [etfs, setEtfs] = useState();
//     const [iPOs, setIPOs] = useState();
//     const [turnover, setTurnover] = useState();
//     const [trading_Calls, setTrading_Calls] = useState();
//     const [wealth_Baskets, setWealth_Baskets] = useState();
//     const [stock_Screeners, setStock_Screeners] = useState();

// const defaultValues = {
//   planName:"test",
//   subscription_plan:"599",
//   features:{},
//   discounted_subscription_plan:"499",
//   offer_amount:"199",
//   description:"*This is an introductory offer. You will be charged Rs.499 from next month onwards.",
// };

// const schema = yup.object().shape(
//   {
//       subscription_plan: yup.string().required("required").matches(/^[0-9]+$/, "Only Numbers are allowed"),
//       discounted_subscription_plan : yup.string().required("required").matches(/^[0-9]+$/, "Only Numbers are allowed"),
//       offer_amount : yup.string().required("required").matches(/^[0-9]+$/, "Only Numbers are allowed"),
//       planName: yup.string().required("required"),
//       // features: yup.object().required("required"),
//       description: yup.string().required("required"),
//   })
// const { handleSubmit, reset, control, formState, formState: { isSubmitSuccessful } } = useForm({
//   mode: "onChange",
//   defaultValues,
//   resolver: yupResolver(schema),
// });

// const { isValid, dirtyFields, errors } = formState; 

// const getEtfs = useCallback((value) => {
//   setEtfs(value)
// })

// const getIpos = useCallback((value) => {
//   setIPOs(value)
// })
// const getTradingCalls = useCallback((value) => {
//   setTrading_Calls(value)
// })
// const getTurnOver = useCallback((value) => {
//   setTurnover(value)
// })
// const getWealthBasket = useCallback((value) => {
//   setWealth_Baskets(value)
// })
// const getStockScreeners = useCallback((value) => {
//   setStock_Screeners(value)
// })

// const handleClickOpen = () => {
//     setOpen(true);
// };

// const handleClose = () => {
//     setOpen(false);
//     reset({})
// };

// useEffect(() => {
//   if(formState.isSubmitSuccessful){
//       reset({})
//       setPlanDuration("")
//   }
// },[formState, reset]);

// const createFeatures = {
//     ETFs: etfs,
//     IPOs: iPOs,
//     Turnover: turnover,
//     Trading_Calls: trading_Calls,
//     Wealth_Baskets: wealth_Baskets,
//     Stock_Screeners: stock_Screeners
// }

// const createSubscriptionPlan = useCallback((data) => {
//   console.log(data)  
//   console.log(createFeatures)
// },[planDuration,iPOs,etfs,trading_Calls,turnover,wealth_Baskets,stock_Screeners])


  return (
    <>
    {/* <Button
                onClick={handleClickOpen}
                variant="contained"
                color="secondary"
                size="small"
                // sx={{ backgroundColor: lightPaletteText.stoxbox2}}
                >
                Create New Plan
                    {isSubmitting  ? <CircularProgress color="inherit" size="2.5rem"/> : "Create New Plan"}
            </Button> */}

    <div className="App">
       <NewExpense onAddExpense={addExpenseDataHandler}/>
      <Expenses items = {expenses}/>   
      {/* {Object.keys(features).map((key, i) => (
        <p key={i}>
        <span style={{margin:"2px"}}>{key}</span>
        <span style={{margin:"2px"}}> - {<TextField id="standard-basic" variant="standard" value={features[key]}/>}</span>
        </p>
      ))} */}
      {/* <Dialog
            open={open}
            onClose={handleClose}
        >
        <DialogTitle id="responsive-dialog-title">
                Create Subscription Plan
        </DialogTitle>
        <DialogContent>
            <Controller
                render={({ field }) => (
                    <TextField
                        {...field}
                        autoFocus
                        margin="dense"
                        id="planName"
                        label="Plan Name"
                        error={!!errors.planName}
                        helperText={errors?.planName?.message}
                        inputProps={{ maxLength: 10 }}
                        fullWidth
                        variant="outlined"
                    />
                )}
                name="planName"
                control={control}
            />    
            <Select
                className="w-full"
                margin="dense"
                style={{marginTop:"2px"}}
                value={planDuration}
                onChange={(event) => setPlanDuration(event.target.value)}
                variant='outlined'
                required
                fullWidth
            >
                {plan_duration.map((data) => (
                    <MenuItem key={data} value={data}>
                        {data}
                    </MenuItem>
                ))}
            </Select>
            <Features 
                getEtfs={(value) => getEtfs(value)} 
                getIpos={(value) => getIpos(value)} 
                getTurnOver={(value) => getTurnOver(value)} 
                getTradingCalls={(value) => getTradingCalls(value)} 
                getWealthBasket={(value) => getWealthBasket(value)}
                getStockScreeners={(value) => getStockScreeners(value)}
            />
            <Controller
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="dense"
                        rows={5}
                        multiline
                        id="features"
                        label="Features"
                        error={!!errors.features}
                        helperText={errors?.features?.message}
                        inputProps={{ maxLength: 200 }}
                        fullWidth
                        variant="outlined"
                    />
                )}
                name="features"
                control={control}
            />
            <Controller
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="dense"
                        id="subscription_plan"
                        label="Subscription Amount"
                        error={!!errors.subscription_plan}
                        helperText={errors?.subscription_plan?.message}
                        inputProps={{ maxLength: 10 }}
                        fullWidth
                        variant="outlined"
                    />
                )}
                name="subscription_plan"
                control={control}
            />
            <Controller
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="dense"
                        id="discounted_subscription_plan"
                        label="Discounted Subscription Amount"
                        error={!!errors.discounted_subscription_plan}
                        helperText={errors?.discounted_subscription_plan?.message}
                        inputProps={{ maxLength: 10 }}
                        fullWidth
                        variant="outlined"
                    />
                )}
                name="discounted_subscription_plan"
                control={control}
            />
            <Controller
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="dense"
                        id="offer_amount"
                        label="Offer Amount"
                        error={!!errors.offer_amount}
                        helperText={errors?.offer_amount?.message}
                        inputProps={{ maxLength: 30 }}
                        fullWidth
                        variant="outlined"
                    />
                )}
                name="offer_amount"
                control={control}
            />
            <Controller
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="dense"
                        id="description"
                        label="Plan Description"
                        error={!!errors.description}
                        helperText={errors?.description?.message}
                        inputProps={{ maxLength: 500 }}
                        fullWidth
                        variant="outlined"
                    />
                )}
                name="description"
                control={control}
            />
        </DialogContent>
        <DialogActions>

            <div className="mb-20 mr-10" >
                <Button
                    className="mx-8"
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                    size="large"
                >
                    Cancel
                </Button>
                <Button
                    className="mx-8"
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit((data) => createSubscriptionPlan(data))}
                    size="large"
                >
                    {isSubmitting  ? <CircularProgress color="inherit" size="2.5rem"/> : "Create"}
                </Button>
            </div>
        </DialogActions>
        <Snackbar
            autoHideDuration={4000}
            open={showSnackbar}
            onClose={() => setShowSnackbar(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setShowSnackbar(false)}
                    severity={severity}
                    sx={{ width: "100%" }}
                >
                    {snackBarMessage}
                </Alert>
        </Snackbar>
        </Dialog> */}
    </div>
    </>
  );
}

export default App;
