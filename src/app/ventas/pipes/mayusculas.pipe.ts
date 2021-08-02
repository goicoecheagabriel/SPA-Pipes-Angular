import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    transform( arg: string, mayuscula: boolean = true ): string {
    return mayuscula?arg.toUpperCase():arg.toLowerCase();
    }
}