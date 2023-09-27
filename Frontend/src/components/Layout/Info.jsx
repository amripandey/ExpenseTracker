import Divider from '@mui/material/Divider';
import { add } from '../controller/controller';


const Info = ({ income, expense }) => {
    return (
        <>
            <div className="mt-4">
                <h4>Your Balance: </h4>
                <h2>{add(income) - add(expense)}</h2>
            </div>
            <div className="box1 overflow-hidden">
                <div className='text-center text-success'>
                    <h4 >Income </h4>
                    <p>Rs. {add(income)}</p>
                </div>
                <Divider style={{ backgroundColor: "#000000" }} orientation="vertical" variant="middle" flexItem />
                <div className='text-center text-danger'>
                    <h4>Expense</h4>
                    <p>Rs. {add(expense)}</p>
                </div>
            </div>
        </>
    )
};


export default Info;

