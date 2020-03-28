

interface PagesInterface {
    title: string
    url: string
    icon: string
}
export class Pages implements PagesInterface {
    title: string
    url: string
    icon: string
    constructor(title, url = '/folder', icon = 'images') {
        this.url = url;
        this.title = title;
        this.icon = icon
    }
}