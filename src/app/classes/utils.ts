export class Utils {
  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  static removeSpecialCharacter(dirtyString): string {
    try {
      return dirtyString.replace(/[/\|&;$%@"<>()+,]/g, "");
    }
    catch{
      return dirtyString
    }
  }
  static isEmpty(data) {
    if (typeof (data) == 'number' || typeof (data) == 'boolean') {
      return false;
    }
    if (typeof (data) == 'undefined' || data === null) {
      return true;
    }
    if (typeof (data.length) != 'undefined') {
      return data.length == 0;
    }
    var count = 0;
    for (var i in data) {
      if (data.hasOwnProperty(i)) {
        count++;
      }
    }
    return count == 0;
  }
  static cloneObject(obj: object) {
    try {
      if (typeof obj == "object") return JSON.parse(JSON.stringify(obj))
      else return obj
    } catch (err) {
      return obj
    }
  }
}
