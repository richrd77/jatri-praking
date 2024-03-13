export class ObserverConstants {
    static Observer<T>(fn: (d: T) => void): any {
        return {
            next: (f: T) => fn(f),
            error: (e: any) => alert('something went wrong!!!')
        };
    }
}