export interface ExerciseStatesInterface {
    running: boolean
    finished: boolean
}
export interface ExerciseInterface {
    id: string;
    duration: number
    name: string;
    delay: number;
    progress?: {
        initiated: boolean
        lastProgress: number
        finished: boolean
        stage: {
            delay: ExerciseStatesInterface
            exercise: ExerciseStatesInterface
        }
    }
    counter: number;
    generateId?: () => string;

}

export class Exercise implements ExerciseInterface {
    id: string;
    duration: number = 60;
    name: string = ''
    delay: number = 0;
    progress?: {
        initiated: boolean
        lastProgress: number
        finished: boolean
        stage: {
            delay: ExerciseStatesInterface
            exercise: ExerciseStatesInterface
        }
    }
    counter: number = 0;
    generateId?: () => string = () => { return `exercise_${Math.random()}` }
    constructor(name, duration = 30, delay = 0) {
        this.id = this.generateId();
        this.duration = duration;
        this.name = name;
        this.delay = delay;
        this.counter = 0
        this.progress = {
            initiated: false,
            lastProgress: 0,
            finished: false,
            stage: {
                delay: {
                    running: false,
                    finished: false
                },
                exercise: {
                    running: false,
                    finished: false
                }
            }
        }
    }
}