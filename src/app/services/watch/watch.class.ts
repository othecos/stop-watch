import { timer, Subscription } from 'rxjs'
import { Exercise } from '../pages/pages.models'
export interface ClockTimer{
    value: number,
    isRunning: boolean,
    isRunningDelay:boolean,
    isRunningExercise:boolean,
    isFinished: boolean,
    isRefreshing: boolean,
}
export class Clock {
    time:ClockTimer = {
        value: 0,
        isRunning: false,
        isRunningDelay: false,
        isRunningExercise: false,
        isFinished: false,
        isRefreshing: false
    }
    counters:Array<Subscription> = []
    constructor() {

    }
    async runDelay(exercise: Exercise) {
        return new Promise((resolve, reject) => {
            if(exercise.progress.stage.delay.finished || this.time.isFinished) return reject()
            this.time.value= JSON.parse(JSON.stringify(exercise.delay))
            this.time.isRunningDelay = this.time.isRunning = true
            exercise.progress.stage.delay.running = true
            
            let counter = timer(1000, 1000).subscribe(async (time) => {
                
                if (exercise.progress.stage.delay.running) {
                    if (this.time.value > 0) {
                        this.time.value--
                    } else {
                        counter.unsubscribe()
                        this.time.isRunningDelay = false
                        console.count("Stop delay counter by value");
                        return resolve()
                    }
                }else if(exercise.progress.stage.delay.finished){
                    if(counter) {
                        this.time.isRunningDelay = false
                        counter.unsubscribe()
                        console.count("Stop delay counter by finishing");
                        
                        return reject()
                    }
                }
            })
            this.counters.push(counter)
        })

    }

    async runExercise(exercise: Exercise) {
        return new Promise((resolve, reject) => {
            if(exercise.progress.stage.exercise.finished || this.time.isFinished) return reject();
            this.time.value = JSON.parse(JSON.stringify(exercise.duration))
            this.time.isRunningExercise = this.time.isRunning  = true
            exercise.progress.stage.exercise.running = true
            console.count("Init exercise counter");
            let counter = timer(1000, 50).subscribe((time) => {
                // console.log("Running exercise", time,this.time);
                if (exercise.progress.stage.exercise.running) {
                    if (this.time.value > 0) {
                        this.time.value--
                        exercise.progress.lastProgress = time
                    } else {
                        exercise.progress.finished = exercise.progress.stage.exercise.finished = false
                        this.time.isRunningExercise = false
                        console.count("Stop delay counter by value");
                        counter.unsubscribe()
                        return resolve()
                    }
                }else if(exercise.progress.stage.exercise.finished){
                    if(counter) {
                        this.time.isRunningExercise = false
                        counter.unsubscribe()
                        console.count("Stop exercise counter  by finishing");
                        return reject()
                    }
                }
            })
            this.counters.push(counter)
        })

    }
    onDestroy(){
        try{
            this.counters.forEach((counter)=>{ counter.unsubscribe()})
        }catch(err){
            console.warn(err);
            
        }
      
    }
}