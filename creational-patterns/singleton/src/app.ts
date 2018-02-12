import { OperatingSystemSingleton } from './singletons/operating-system';

const operatingSystemSingleton: OperatingSystemSingleton = OperatingSystemSingleton.getInstance();

console.log(operatingSystemSingleton.toString());
