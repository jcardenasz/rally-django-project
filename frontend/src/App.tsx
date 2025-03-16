import {useEffect, useState} from "react";
import {fetchDrivers, fetchCars, fetchVenues, fetchRaces} from "./services/api";
import {Driver} from "./types/driverType";
import {Car} from "./types/carType";
import {Venue} from "./types/venueType";
import {Race} from "./types/raceType";
import DriverSection from "./components/driverSection";
import CarSection from "./components/CarSection";
import VenueSection from "./components/VenueSection";
import RaceSection from "./components/RaceSection";
import ToastNotification from "./components/ToastNotification";
import "./App.css";


const App = () => {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [cars, setCars] = useState<Car[]>([]);
    const [venues, setVenues] = useState<Venue[]>([]);
    const [races, setRaces] = useState<Race[]>([]);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchDrivers().then(setDrivers);
        fetchCars().then(setCars);
        fetchVenues().then(setVenues);
        fetchRaces().then(setRaces);
    }, []);

    const handleShowCar = (carId: number) => {
        // @ts-ignore
        const car = cars.find((car) => car.id === carId);
        if (car) {
            setSelectedCar(car);
            setOpen(true);
        }
    };

    return (

        <div className="min-h-screen bg-gray-900 text-white overflow-auto">
            {/* Navbar */}
            <nav className="bg-gray-800 p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">🏎️ Rally Sport Dashboard</h1>
                    <ul className="flex space-x-4">
                        <li className="hover:text-yellow-400 cursor-pointer">Drivers</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Cars</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Venues</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Races</li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto p-6 overflow-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <DriverSection drivers={drivers} onShowCar={handleShowCar}/>
                    <CarSection cars={cars}/>
                    <VenueSection venues={venues}/>
                    <RaceSection races={races}/>
                </div>
                <ToastNotification selectedCar={selectedCar} open={open} setOpen={setOpen}/>
            </main>
        </div>
    );
};

export default App;