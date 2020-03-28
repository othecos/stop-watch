export class Utils {
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    static removeSpecialCharacter(dirtyString){
        try{
            return dirtyString.replace(/[/\|&;$%@"<>()+,]/g, "");
        }
        catch{
            return dirtyString
        }
    }
}
