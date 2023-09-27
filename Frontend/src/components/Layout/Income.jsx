import Tables from "../components/Table";
import '../../App.css'
const Income = ({ datas, data }) => {


    return (
        <div className="d-flex flex-row Income m-2">
            <div className='d-flex flex-column m-2'>
                <h4 className='text-success'>Incomes</h4>
                {
                    (datas.length === 5) ?
                        (<Tables data={data} values={datas} />) :
                        (<Tables data={data} values={datas.slice(0, 4)} />)
                }
            </div>
        </div>
    )
};


export default Income;