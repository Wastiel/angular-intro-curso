import { Component } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { environment } from 'environments/environment';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent {
  files!: Set<File>;

  progress = 0;
  constructor(private service: UploadFileService) {}

  ngOnInit() {}

  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    const customFileLabel = document.getElementById('customFileLabel');
    if (customFileLabel) {
      customFileLabel.innerHTML = selectedFiles[0].name;
    }
    const fileNames = [];

    this.files = new Set();

    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      if (customFileLabel) {
        customFileLabel.innerHTML = fileNames.join(', ');
        this.files.add(selectedFiles[i]);
      }
    }
    this.progress = 0;
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service
        .upload(this.files, environment.BASE_URL + '/upload')
        .pipe(
          uploadProgress((progress) => {
            console.log(progress);
            this.progress = progress;
          }),
          filterResponse()
        )
        .subscribe((response) => console.log('Upload Concluido'));
      /*.subscribe((event: HttpEvent<Object>) => {
        //HttpEventType
        console.log(event);
        if(event.type === HttpEventType.Response){
          console.log('upload Concluído');
        }else if (event.type === HttpEventType.UploadProgress && event.total){
          const percentDone = Math.round((event.loaded * 100) / event.total);
          console.log('progresso', percentDone)
          this.progress = percentDone;
        }
        
      });*/
    }
  }

  onDownloadExcel() {
    this.service
      .download(environment.BASE_URL + '/downloadExcel')
      .subscribe((res: any) => {
        this.service.handleFiles(res, 'report.xlsx')       
      });
  }

  onDownloadPDF() {
    this.service
    .download(environment.BASE_URL + '/downloadExcel')
    .subscribe((res: any) => {
      this.service.handleFiles(res, 'report.pdf')       
    });
  }
}
