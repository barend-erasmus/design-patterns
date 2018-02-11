export class OperatingSystem {

    private static instance: OperatingSystem;

    private constructor() {

    }

    public static getInstance(): OperatingSystem {
        if (!OperatingSystem.instance) {
            OperatingSystem.instance = new OperatingSystem();
        }

        return OperatingSystem.instance;
    }

    public toString(): string {
        return `Ubuntu 17.10`;
    }
}
