import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "serch"
})
export class SerchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    var result = value.filter(function(a) {
      var s = JSON.stringify(a);
      s = s.toLowerCase();

      if (s.indexOf(args) != -1) {
        return true;
      } else {
        return false;
      }
    });
    return result;
  }
}
