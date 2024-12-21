import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost } from '../store';
import { addCar } from '../store';

const CarForm = () => {
    const dispatch = useDispatch();
    // const { name, cost } = useSelector((state) => {
    //     return {
    //         name: state.form.name,
    //         cost: state.form.cost,
    //     }
    // });
    const name = useSelector((state) => state.form.name);
    const cost = useSelector((state) => state.form.cost);
    console.log(name, cost);


    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value));
    }

    const handleCostChange = (e) => {
        const carCost = parseInt(e.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCar({
            name,
            cost
        }))
    }


    return (
        <div>
            <h4>Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input className='border outline-none' type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="">Cost</label>
                    <input className='border outline-none' type="number" value={cost || ""} onChange={handleCostChange} />
                </div>
                <div>
                    <button className='border'>Submit</button>
                </div>
            </form>
        </div>
    )
};
export default CarForm;