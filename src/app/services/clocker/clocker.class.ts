import { timer, Subscription } from 'rxjs'
import { Exercise } from '../exercises/exercises.models'
import * as uuid from 'uuid';
import { EventEmitter } from '@angular/core';
export interface ClockerInterface {
    stages: {
        delay: {
            isRunning: boolean
            isFinished: boolean
        },
        exercise: {
            isRunning: boolean
            isFinished: boolean
        },
    }
    isRunning: boolean,
    isFinished: boolean,
    isRefreshing: boolean,
}
export class Clock {
    timer: ClockerInterface = {
        isRunning: false,
        stages: {
            delay: {
                isRunning: false,
                isFinished: false
            },
            exercise: {
                isRunning: false,
                isFinished: false
            },
        },
        isFinished: false,
        isRefreshing: false
    }
    counters: Array<{ id: string, counter: Subscription, exercise: Exercise }> = []

    runningExercises: Array<Exercise> = []

    public eventsEmitter:EventEmitter<'running'> = new EventEmitter()
    constructor() {

    }
    async run(exercise) {
        this.timer.isRunning = true
        await this.runDelay(exercise)
        await this.runExercise(exercise)
        this.timer.isRunning = false
    }
    async runDelay(exercise: Exercise) {
        return new Promise((resolve, reject) => {
            if (this.isAlreadyRunning(exercise)) reject({ counter: this.findCounterId(exercise), message: 'Exercise already running' })

            exercise.counter = JSON.parse(JSON.stringify(exercise.delay))

            let id = this.generateClockId()
            let firsTimeRunning = true
            let counter = timer(1000, 1000).subscribe((timer) => {

                if (exercise.progress.stage.delay.running) {
                    this.setRunning('delay')
                    if ( exercise.counter > 0) {
                         exercise.counter--
                    } else {
                        this.setFinished('delay', counter)
                        resolve({ counter: id, message: 'Regular Stop' })
                    }
                } else if (exercise.progress.stage.delay.finished) {
                    this.setFinished('delay', counter)
                    reject({ counter: id, message: 'Force stop' })
                } else {
                    this.setPaused('delay')
                }
                if (firsTimeRunning) {
                    this.counters.push({ id, counter, exercise })
                    firsTimeRunning = false
                }
            })
        })

    }

    async runExercise(exercise: Exercise) {
        return new Promise((resolve, reject) => {
            if (this.isAlreadyRunning(exercise)) reject({ counter: this.findCounterId(exercise), message: 'Exercise already running' })
            exercise.counter = JSON.parse(JSON.stringify(exercise.duration))
            let id = this.generateClockId()
            let firsTimeRunning = true
            let counter = timer(1000, 50).subscribe((timer) => {
                if (exercise.progress.stage.exercise.running) {
                    this.setRunning('exercise')
                    if ( exercise.counter > 0) {
                         exercise.counter--
                    } else {
                        this.setFinished('exercise', counter)
                        resolve({ counter: id, message: 'Regular Stop' })
                    }
                } else if (exercise.progress.stage.exercise.finished) {
                    this.setFinished('exercise', counter)
                    reject({ counter: id, message: 'Force stop' })
                } else {
                    this.setPaused('exercise')
                }
                if (firsTimeRunning) {
                    this.counters.push({ id, counter, exercise })
                    firsTimeRunning = false
                }

            })
        })

    }
    public async onDestroy() {
        try {
            delete this.eventsEmitter
            await this.counters.forEach(async (element) => { element.counter.unsubscribe() })
        } catch (err) {
            console.warn(err);
        }
    }
    private generateClockId() {
        return uuid.v4()
    }
    storeRunningExercise(exercise) {
        this.runningExercises.push(exercise)
    }
    isAlreadyRunning(exercise) {
        return this.runningExercises.some((ex) => ex.id == exercise.id)
    }
    findCounterId(exercise) {
        try { return this.counters.find((element) => element.exercise.id == exercise.id).id }
        catch{ return '' }
    }
    setRunning(type: 'delay' | 'exercise') {
        // this.timer.isRunning = true
        // console.log("Running", this.timer.isRunning);
        this.eventsEmitter.emit('running')
        switch (type) {
            case 'delay':
                this.timer.stages.delay.isRunning = true
                break;
            case 'exercise':
                this.timer.stages.exercise.isRunning = true
                break;
        }
    }
    setFinished(type: 'delay' | 'exercise', counter?: Subscription) {
        this.timer.isFinished = true;
        // this.eventsEmitter.emit('running')
        switch (type) {
            case 'delay':
                this.timer.stages.delay.isRunning = false
                this.timer.stages.delay.isFinished = true
                break;
            case 'exercise':
                this.timer.stages.exercise.isRunning = false
                this.timer.stages.exercise.isFinished = true
                break;
        }
        if (counter) counter.unsubscribe()
    }
    setPaused(type: 'delay' | 'exercise') {
        // this.timer.isRunning = false
        console.log(this.counters);
        // this.eventsEmitter.emit('running')
        switch (type) {
            case 'delay':
                this.timer.stages.exercise.isRunning = false
                break;
            case 'exercise':
                this.timer.stages.exercise.isRunning = false
                break;
        }
    }
}