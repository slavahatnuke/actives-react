export default class TimerService {
    constructor(Timer) {
        this.timer = Timer;
        this.interval = undefined;
        this.go();
    }

    isWorking() {
        return !!this.interval;
    }

    go() {
        if(!this.isWorking()) {
            this.interval = setInterval(() => this.timer.up(), 1000)
        }
    }

    toggle() {
        if(this.isWorking()) {
            this.stop();
        } else {
            this.go();
        }
    }
    stop() {
        if(this.isWorking()) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }

}
