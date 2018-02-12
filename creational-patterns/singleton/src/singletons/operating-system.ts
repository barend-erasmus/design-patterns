export class OperatingSystemSingleton {

    private static instance: OperatingSystemSingleton;

    private constructor() {

    }

    public static getInstance(): OperatingSystemSingleton {
        if (!OperatingSystemSingleton.instance) {
            OperatingSystemSingleton.instance = new OperatingSystemSingleton();
        }

        return OperatingSystemSingleton.instance;
    }

    public toString(): string {
        return `Ubuntu 17.10`;
    }
}
