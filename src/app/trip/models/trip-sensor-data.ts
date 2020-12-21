import { SensorData } from "./sensor-data.model";

export class TripSensorData {
    tripId: number;
    name: string;
    basicUserEmail: string;
    sensorData: SensorData[] 
}
