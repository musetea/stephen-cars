import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

const CarSearch = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => {
        return state.car.searchTerm;
    });

    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    }

    return (
        <div className='p-3'>
            <h3>My Cars</h3>
            <div className='flex flex-row items-center'>
                <label htmlFor="">Search</label>
                <input type="text"
                    className='border p-1'
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>
        </div>
    )
};

export default CarSearch;