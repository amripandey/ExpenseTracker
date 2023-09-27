import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Layout/Nav'
import Expense from './components/Layout/Expense'
import Income from './components/Layout/Income'
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './components/Layout/Info'
import Model from './components/components/Model'
import { date } from './components/controller/controller'

const trialE = [
  // { item: "icecream", price: 20, time: date() }
];
const trialI = [
  // { item: "pocket money", price: 12400, time: date() }
]


//useeffect is not working
function App() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState({});
  const [expenseList, setexpenseList] = useState(trialE);
  const [incomeList, setincomeList] = useState(trialI);

  useEffect(() => {
    localStorage.setItem("ExpenseList", JSON.stringify(expenseList));
    localStorage.setItem("IncomeList", JSON.stringify(incomeList))
  }, [expenseList, incomeList]);




  // for initial opening of app.Important
  useEffect(() => {
    let exp = localStorage.getItem("ExpenseList");
    let inc = localStorage.getItem("IncomeList");

    if (exp && inc === true) {
      let obj1 = JSON.parse(exp);
      let obj2 = JSON.parse(inc);
      setexpenseList(obj1);
      setincomeList(obj2);
    }
  }, [])

  const handleClose = () => {
    setOpen(false);
  }

  const dataexp = {
    type: "Expense",
    cast: "Price"
  };
  const dataIn = {
    type: "Income",
    cast: "Amount"
  };

  return (
    <>
      <main className='d-flex flex-column main mt-1'>
        <Nav />
        <Info income={incomeList} expense={expenseList} />
        <aside className='d-flex flex-column justify-content-around mt-3'>
          <div onClick={() => { setTitle(dataexp); setOpen(true); }}><Expense data={dataexp} datas={expenseList} /></div>
          <div onClick={() => { setTitle(dataIn); setOpen(true); }}><Income data={dataIn} datas={incomeList} /></div>
        </aside>
        {(title.type === "Income") ?
          (<Model open={open} onClose={handleClose} data={title} datas={incomeList} setLists={setincomeList} />) :
          (<Model open={open} onClose={handleClose} data={title} datas={expenseList} setLists={setexpenseList} />)
        }

      </main>
    </>
  )
}

export default App
