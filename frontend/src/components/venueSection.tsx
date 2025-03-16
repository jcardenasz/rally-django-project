import {FaMapMarkerAlt} from "react-icons/fa";
import {Venue} from "../types/venueType";

interface VenueSectionProps {
    venues: Venue[];
}

const VenueSection = ({venues}: VenueSectionProps) => {
    return (
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
    );
};

export default VenueSection;