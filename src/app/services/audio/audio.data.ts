
export type AccessMethods = 'play' | 'pause' | 'mute' | 'volume';
// tslint:disable-next-line: max-line-length
export type PlatformsName = 'desktop' | 'mobile' | 'ipad' | 'iphone' | 'ios' | 'android' | 'phablet' | 'tablet' | 'cordova' | 'capacitor' | 'electron' | 'pwa' | 'mobileweb' | 'hybrid';
export type AudiosAvailable = 'exercise-sounds'| 'beep'| 'resume'| 'pause'| 'finish'| 'next'| 'success'| 'half-way'| 'clap'| 'fireworks';
export interface AudioAccess {
    platform: PlatformsName;
    access: Array<AccessMethods>;
}
export const audioAccess: Array<AudioAccess> = [
    {platform: 'desktop', access: [ 'play', 'pause' , 'mute' , 'volume']},
    {platform: 'mobile', access: [ 'play', 'pause' , 'mute' ]},
];
