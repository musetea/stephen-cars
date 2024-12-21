import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';
const CarList = () => {
    const dispatch = useDispatch();

    // const cars = useSelector((state) => {
    //     return state.car.cars;
    // });
    const { cars, name } = useSelector(({ form, car: { cars, searchTerm } }) => {

        const filterCars = cars.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log("filterCars", filterCars);


        return {
            cars: filterCars,
            name: form.name,
        }
    });

    console.log(cars);

    const handleDeleteCar = (car) => {
        console.log(car);
        dispatch(removeCar(car.id));
    }

    const renderCars = cars.map((car) => {

        const blod = name && car.name.toLowerCase().includes(name.toLowerCase());
        console.log("blod: ", blod);



        return (
            <div key={car.id} className={`flex items-center gap-2  ${blod && "bg-red-500"}  `}>
                <div>
                    {car.name} = ${car.cost}
                </div>
                <button
                    className='text-red-500'
                    onClick={() => { handleDeleteCar(car) }}
                >
                    Delete
                </button>
            </div>
        )
    })


    return (
        <div className='flex flex-col'>
            {renderCars}
            <hr className='my-1 mx-0' />
        </div>
    );
};
export default CarList;