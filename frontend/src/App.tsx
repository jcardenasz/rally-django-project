import {useEffect, useState} from "react";
import {fetchDrivers, fetchCars, fetchVenues, fetchRaces} from "./services/api";
import {FaCar, FaMapMarkerAlt, FaFlagCheckered, FaUser} from "react-icons/fa";
import * as Toast from "@radix-ui/react-toast";
import "./App.css";

interface Driver {
    id: number;
    name: string;
    nationality: string;
    car: number;
}

interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
    price: number;
    description: string;
    photo: string;
}

interface Venue {
    id: number;
    placeName: string;
    country: string;
    location: string;
}

interface Race {
    id: number;
    name: string;
    date: string;
    venue: number;
    drivers: Driver[];
}

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
        const car = cars.find((car) => car.id === carId);
        if (car) {
            setSelectedCar(car);
            setOpen(true);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-auto">
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

            <main className="container mx-auto p-6 overflow-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-3">
                            <FaUser className="text-yellow-400 text-2xl"/>
                            <h2 className="text-xl font-semibold">Drivers</h2>
                        </div>
                        <ul className="mt-4 space-y-2">
                            {drivers.slice(0, 5).map((driver) => (
                                <li
                                    key={driver.id}
                                    className="border-b py-2 cursor-pointer hover:text-yellow-400"
                                    onClick={() => handleShowCar(driver.car)}
                                >
                                    {driver.name} ({driver.nationality})
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-3">
                            <FaCar className="text-blue-400 text-2xl"/>
                            <h2 className="text-xl font-semibold">Cars</h2>
                        </div>
                        <ul className="mt-4 space-y-2">
                            {cars.slice(0, 5).map((car) => (
                                <li key={car.id} className="border-b py-2">
                                    {car.brand} {car.model} ({car.year})
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-3">
                            <FaMapMarkerAlt className="text-red-400 text-2xl"/>
                            <h2 className="text-xl font-semibold">Venues</h2>
                        </div>
                        <ul className="mt-4 space-y-2">
                            {venues.slice(0, 5).map((venue) => (
                                <li key={venue.id} className="border-b py-2">
                                    {venue.placeName} ({venue.country})
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-3">
                            <FaFlagCheckered className="text-green-400 text-2xl"/>
                            <h2 className="text-xl font-semibold">Races</h2>
                        </div>
                        <ul className="mt-4 space-y-2">
                            {races.slice(0, 5).map((race) => (
                                <li key={race.id} className="border-b py-2">
                                    {race.name} ({race.date})
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="scroll-auto">
                    <Toast.Provider swipeDirection="up">
                        {selectedCar && (
                            <Toast.Root
                                className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex max-w-sm max-h-96 overflow-y-auto flex flex-col items-center"
                                open={open}
                                onOpenChange={setOpen}
                            >
                                <Toast.Title className="text-lg font-bold">
                                    {selectedCar.brand} {selectedCar.model}
                                </Toast.Title>
                                <img
                                    src={selectedCar.photo}
                                    alt={`${selectedCar.brand} ${selectedCar.model}`}
                                    className="w-full h-40 object-cover mt-2 rounded-lg"
                                />
                                <Toast.Close className="mt-2 bg-yellow-400 px-3 py-1 rounded text-black cursor-pointer">
                                    Close
                                </Toast.Close>
                            </Toast.Root>
                        )}
                        <Toast.Viewport/>
                    </Toast.Provider>
                </div>
            </main>
        </div>
    );
};

export default App;