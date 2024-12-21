import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name:"car",
    initialState:{
        cars:[],
        searchTerm: "",
    },
    reducers:{

        changeSearchTerm(state,action){
            state.searchTerm = action.payload;
        },

        addCar(state, action){
            state.cars.push({
                ...action.payload,
                id: nanoid()
            });
        },
        removeCar(state, action){
            const updateCars = state.cars.filter((car)=>{
                return car.id !== action.payload;
            })
            state.cars = updateCars;
        }
    }
});

export const carsReducer = carsSlice.reducer;
export const {
    changeSearchTerm,
    addCar,
    removeCar,
} = carsSlice.actions;
