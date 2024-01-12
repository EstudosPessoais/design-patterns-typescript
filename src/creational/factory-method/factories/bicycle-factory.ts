import { Bicycle } from "../vehicle/bicycle";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-fectory";

export class BicycleFactory extends VehicleFactory {
    getVehicle(vehicleName: string): Bicycle {
        return new Bicycle(vehicleName);
    }
}