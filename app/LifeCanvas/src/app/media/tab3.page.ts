import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ImageService } from '../service/image.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  public gallery: Promise<any>;
  public imageModal: any;
  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.gallery = this.imageService.loadImageJson();
  }

  async takePhoto() {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
    
      await this.imageService.addImage(image.webPath);
      this.gallery = this.imageService.loadImageJson();
  }

  close() {
    this.modal.dismiss(null, 'cancel');
  }

  setModalImage(path: string) {
    this.imageModal = path;
    this.modal.present();
  }

  deleteImage(id: string) {
    this.imageService.deleteImage(id).then(() => {
      this.gallery = this.imageService.loadImageJson();
      this.close();
    })
  }
}
