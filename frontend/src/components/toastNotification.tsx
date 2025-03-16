import * as Toast from "@radix-ui/react-toast";
import {Car} from "../types/carType";

interface ToastNotificationProps {
    selectedCar: Car | null;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ToastNotification = ({selectedCar, open, setOpen}: ToastNotificationProps) => {
    if (!selectedCar) return null;

    return (
        <Toast.Provider swipeDirection="up">
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
            <Toast.Viewport/>
        </Toast.Provider>
    );
};

export default ToastNotification;