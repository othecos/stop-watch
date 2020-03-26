export interface ExerciseInterface {
    id?:string;
    duration: number
    name: string;
    delay: number;
    progress?: number
    generateId:() => string;
  }
export class Exercise implements ExerciseInterface{
    id?:string;
    duration:number = 60;
    name: string = ''
    delay:number = 0;
    progress?: number
    constructor(name,duration = 30,delay = 0){
        this.id = this.generateId();
        this.duration = duration;
        this.name = name;
        this.delay = delay
        this.progress = 0;
    }
    generateId(){
        return `exercise_${Math.random()}`
      }
}

interface PagesInterface{
    title: string
    url: string
    icon: string
}
export class Pages implements PagesInterface{
    title: string
    url: string
    icon: string
    constructor(title,url = '/folder',icon = 'images'){
        this.url = url;
        this.title = title;
        this.icon = icon
    }
}