export default class Timer {
    constructor() {
        this.time = 0;
    }

    get() {
        return this.time;
    }

    up() {
        this.time++;
    }

    down() {
        this.time--;
    }
}