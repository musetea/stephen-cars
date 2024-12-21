import { useSelector } from 'react-redux';

const CarValue = () => {

    const totalCost = useSelector(({ car: { cars, searchTerm } }) => {

        const filterCars = cars.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        console.log(filterCars);
        // let cost = 0;
        // for (let car of filterCars) {
        //     cost += car.cost;
        // }
        // return cost;
        // reduce 사용방식 
        return filterCars.reduce((acc, car) => {
            return acc + car.cost
        }, 0);

    })



    return (
        <div className='text-right text-[2rem]'>
            Total Cost - ${totalCost}
        </div>
    )
};
export default CarValue;
