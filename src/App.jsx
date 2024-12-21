import './App.css'
import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'

function App() {


    return (
        <>
            {/* <h1 className="text-3xl font-bold underline text-red-500">
                Hello world!
            </h1> */}
            <div>
                <CarForm />
                <CarSearch />
                <CarList />
                <CarValue />
            </div>
        </>
    )
}

export default App
