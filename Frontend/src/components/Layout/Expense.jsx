import '../../App.css'
import Tables from '../components/Table';


const Expense = ({ datas, data }) => {


    return (
        <div className='d-flex flex-column m-2'>
            <h4 className='text-danger'>Expenses</h4>
            {
                (datas.length === 5) ?
                    (<Tables data={data} values={datas} edit={false} />) :
                    (<Tables data={data} values={datas.slice(0, 4)} edit={false} />)
            }
        </div>
    )
};


export default Expense;