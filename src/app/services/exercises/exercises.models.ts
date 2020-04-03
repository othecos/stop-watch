export type ExerciseEvents = 'add' | 'remove' | 'replace' | 'clear' | 'load' | 'updated'
export interface ExerciseListItem {
    name: string
    group: string
}
export interface ExerciseStatesInterface {
    running: boolean
    finished: boolean,
    initiated: boolean,

}
export interface ExerciseInterface {
    id: string;
    duration: number
    name: string;
    delay: number;
    controller:{
        isEditing: boolean
    }
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
export class ExerciseList{
    items:Array<ExerciseListItem>
    constructor(exercises:Array<ExerciseListItem>){
        this.items = exercises.map((exercise)=>{
            return Object.freeze(exercise)
        })
    }
}
export class Exercise implements ExerciseInterface {
    readonly id: string;
    
    
    private _duration: number = 60;
    private _name: string = '';
    private _delay: number = 0;

    public get duration(): number {
        return this._duration;
    }
    public set duration(value: number) {
        if(value < 1) return;
        this._duration = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get delay(): number {
        return this._delay;
    }
    public set delay(value: number) {
        if(value < 1) return;
        this._delay = value;
    }
    progress?: {
        initiated: boolean
        lastProgress: number
        finished: boolean
        stage: {
            delay: ExerciseStatesInterface
            exercise: ExerciseStatesInterface
        }
    }
    controller:{
        isEditing: boolean
    }
    counter: number = 0;
    generateId?: () => string = () => { return `exercise_${Math.random()}` }
    constructor(name, duration = 30, delay = 0) {
        this.id = this.generateId();
        this._duration = duration;
        this._name = name;
        this._delay = delay;
        this.counter = delay;
        this.controller = {
            isEditing: false
        }
        this.progress = {
            initiated: false,
            lastProgress: 0,
            finished: false,
            stage: {
                delay: {
                    running: false,
                    finished: false,
                    initiated: false
                },
                exercise: {
                    running: false,
                    finished: false,
                    initiated: false
                }
            }
        }
    }
}