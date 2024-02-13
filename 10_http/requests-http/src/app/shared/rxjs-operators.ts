import { HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http";
import { pipe } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

export function filterResponse<T>(){
    return pipe(
        filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
        map((res: any) => res.body)
    );
}

export function uploadProgress(cb: (progress: number) => void) {
    return tap((event: any) => {
        if(event.type === HttpEventType.UploadProgress){
            cb(Math.round((event.loaded * 100) / event.total!))
        }
    });
}