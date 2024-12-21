import { configureStore } from '@reduxjs/toolkit';
import { formReducer, changeName, changeCost } from './slices/FormSlice';
import { carsReducer, addCar, changeSearchTerm, removeCar } from './slices/CarSlice';


const store = configureStore({
    reducer:{
        form: formReducer,
        car: carsReducer,
    },
});

export {
    store
};
export {
    changeName,
    changeCost,
};

export {
    changeSearchTerm,
    addCar,
    removeCar,
}