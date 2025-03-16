import { Driver } from './driverType';

export interface Race {
    id: number;
    name: string;
    date: string;
    venue: number;
    drivers: Driver[];
}