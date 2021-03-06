import { timer, Subscription } from 'rxjs';
import { Exercise } from '../exercises/exercises.models';
import * as uuid from 'uuid';
import { EventEmitter } from '@angular/core';
import { AudioService } from '../audio/audio.service';
export interface ClockerInterface {
    stages: {
        delay: {
            isRunning: boolean
            isInitiated: boolean,
            isFinished: boolean,

        },
        exercise: {
            isRunning: boolean
            isFinished: boolean,
            isInitiated: boolean,
        },
    };
    isRunning: boolean;
    isInitiated: boolean;
    isFinished: boolean;
    isRefreshing: boolean;
}
export class Clock {
    timer: ClockerInterface = {
        isRunning: false,
        isInitiated: false,
        stages: {
            delay: {
                isRunning: false,
                isFinished: false,
                isInitiated: false,

            },
            exercise: {
                isRunning: false,
                isFinished: false,
                isInitiated: false,
            },
        },
        isFinished: false,
        isRefreshing: false
    };
    counters: Array<{ id: string, counter: Subscription, exercise: Exercise }> = [];

    runningExercises: Array<Exercise> = [];

    public eventsEmitter: EventEmitter<'running'> = new EventEmitter();
    constructor(private audioService: AudioService) {

    }
    async run(exercise) {
        this.timer.isRunning = true;
        this.timer.stages.delay.isInitiated = true;
        await this.runDelay(exercise);
        this.timer.stages.exercise.isInitiated = true;
        await this.runExercise(exercise);
    }
    async runDelay(exercise: Exercise) {
        return new Promise((resolve, reject) => {
            if (this.isAlreadyRunning(exercise)) { reject({ counter: this.findCounterId(exercise), message: 'Exercise already running' }); }

            exercise.counter = JSON.parse(JSON.stringify(exercise.delay));
            exercise.progress.stage.delay.initiated = true;
            const id = this.generateClockId();
            let firsTimeRunning = true;
            this.setRunning('delay');
            const counter = timer(1000, 1000).subscribe(() => {
                if (exercise.progress.stage.delay.running) {
                    this.playDelaySounds(exercise.counter - 1);
                    if (exercise.counter > 0) {
                        exercise.counter--;
                    } else {
                        this.setFinished('delay', counter);
                        resolve({ counter: id, message: 'Regular Stop' });
                    }
                } else if (exercise.progress.stage.delay.finished) {
                    this.setFinished('delay', counter);
                    reject({ counter: id, message: 'Force stop' });
                } else {
                    // this.setPaused('delay')
                }
                if (firsTimeRunning) {
                    this.counters.push({ id, counter, exercise });
                    firsTimeRunning = false;
                }
            });
        });

    }

    async runExercise(exercise: Exercise) {
        return new Promise((resolve, reject) => {
            if (this.isAlreadyRunning(exercise)) { reject({ counter: this.findCounterId(exercise), message: 'Exercise already running' }); }
            exercise.counter = JSON.parse(JSON.stringify(exercise.duration));
            exercise.progress.stage.exercise.initiated = true;
            const id = this.generateClockId();
            let firsTimeRunning = true;
            this.setRunning('exercise');
            const counter = timer(1000, 1000).subscribe(() => {

                if (exercise.progress.stage.exercise.running) {
                    this.playExerciseSounds(exercise.counter - 1);
                    if (exercise.counter > 0) {
                        exercise.counter--;
                    } else {
                        this.setFinished('exercise', counter);
                        resolve({ counter: id, message: 'Regular Stop' });
                    }
                } else if (exercise.progress.stage.exercise.finished) {

                    this.setFinished('exercise', counter);
                    reject({ counter: id, message: 'Force stop' });
                } else {
                    // this.setPaused('exercise')
                }
                if (firsTimeRunning) {
                    this.counters.push({ id, counter, exercise });
                    firsTimeRunning = false;
                }

            });
        });

    }
    public async onDestroy() {
        try {
            delete this.eventsEmitter;
            await this.counters.forEach(async (element) => { element.counter.unsubscribe(); });
        } catch (err) {
            console.warn(err);
        }
    }
    private generateClockId() {
        return uuid.v4();
    }
    storeRunningExercise(exercise) {
        this.runningExercises.push(exercise);
    }
    isAlreadyRunning(exercise) {
        return this.runningExercises.some((ex) => ex.id === exercise.id);
    }
    findCounterId(exercise) {
        try { return this.counters.find((element) => element.exercise.id === exercise.id).id; } catch { return ''; }
    }
    setRunning(type: 'delay' | 'exercise') {
        this.eventsEmitter.emit('running');
        switch (type) {
            case 'delay':
                this.timer.stages.delay.isRunning = true;
                break;
            case 'exercise':
                this.timer.stages.exercise.isRunning = true;
                break;
        }
    }
    setFinished(type: 'delay' | 'exercise', counter?: Subscription) {
        switch (type) {
            case 'delay':
                this.audioService.play('next');
                this.timer.stages.delay.isInitiated = false;
                this.timer.stages.delay.isRunning = false;
                this.timer.stages.delay.isFinished = true;
                break;
            case 'exercise':
                this.audioService.play('next');
                this.timer.stages.exercise.isInitiated = false;
                this.timer.stages.exercise.isRunning = false;
                this.timer.stages.exercise.isFinished = true;
                this.timer.isFinished = true;
                this.timer.isRunning = false;
                break;
        }
        if (counter) { counter.unsubscribe(); }
    }
    setPaused(type: 'delay' | 'exercise') {
        switch (type) {
            case 'delay':
                this.timer.stages.exercise.isRunning = false;
                break;
            case 'exercise':
                this.timer.stages.exercise.isRunning = false;
                break;
        }
    }
    playDelaySounds(counter: number) {
        if (counter <= 5 && counter >= 0) {
            this.audioService.play('beep');
        }
    }
    playExerciseSounds(counter: number) {
        console.log(counter);

        if ( (counter) % 10 === 0 && (counter) > 9) {
            this.audioService.play('half-way');
        }
        if ( counter <= 5 && counter >= 0) {
            this.audioService.play('beep');
        }
    }
}
