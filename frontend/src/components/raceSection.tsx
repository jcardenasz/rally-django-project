import {FaFlagCheckered} from "react-icons/fa";
import {Race} from "../types/raceType";

interface RaceSectionProps {
    races: Race[];
}

const RaceSection = ({races}: RaceSectionProps) => {
    return (
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
    );
};

export default RaceSection;