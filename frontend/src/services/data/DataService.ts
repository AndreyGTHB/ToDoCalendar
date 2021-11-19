export default abstract class DataService<T> {
    private data
    private callbacks: ((d: T) => void)[] = []

    constructor(data: T) {
        this.data = data
    }

    public changeData(changed: T) {
        
    }
    public getData(): T { return this.data }

    public subscribe(cb: (d: T) => void): Subscription {
        this.callbacks.push(cb)
        const lastIndex = this.callbacks.length - 1
        cb(this.data)
        return new Subscription(this.callbacks, lastIndex)
    }
}


class Subscription {
    private readonly callbackIndex
    private callbacks

    constructor(cbs: ((_: any) => void)[], cbIndex: number) {
        this.callbacks = cbs
        this.callbackIndex = cbIndex
    }

    public unsubscribe() {
        this.callbacks.splice(this.callbackIndex, 1)
    }
}
