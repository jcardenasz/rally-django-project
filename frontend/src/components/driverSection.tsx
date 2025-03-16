import {FaUser} from "react-icons/fa";
import {Driver} from "../types/driverType";

interface DriverSectionProps {
    drivers: Driver[];
    onShowCar: (carId: number) => void;
}

const DriverSection = ({drivers, onShowCar}: DriverSectionProps) => {
    return (
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
                        onClick={() => onShowCar(driver.car)}
                    >
                        {driver.name} ({driver.nationality})
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default DriverSection;