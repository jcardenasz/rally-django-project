import {FaCar} from "react-icons/fa";
import {Car} from "../types/carType";

interface CarSectionProps {
    cars: Car[];
}

const CarSection = ({cars}: CarSectionProps) => {
    return (
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
    );
};

export default CarSection;