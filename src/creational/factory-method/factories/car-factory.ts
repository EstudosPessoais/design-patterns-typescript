import { Car } from "../vehicle/car";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-fectory";

export class CarFactory extends VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        return new Car(vehicleName);
    }
}