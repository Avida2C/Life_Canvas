/**
 * Imports the necessary modules and components for using the camera and image service
 * in an Angular application.
 * @module CameraModule
 * @requires Component
 * @requires OnInit
 * @requires ViewChild
 * @requires Camera
 * @requires CameraResultType
 * @requires ImageService
 * @requires IonModal
 */
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

  /**
   * The ViewChild decorator is used to get a reference to the IonModal component
   * in the template and assign it to the 'modal' property.
   * @type {IonModal} modal - The reference to the IonModal component.
   * 
   * The 'gallery' property is a Promise that resolves to any type of value.
   * 
   * The 'imageModal' property is of type 'any' and can hold any value.
   */
  @ViewChild(IonModal) modal: IonModal;
  public gallery: Promise<any>;
  public imageModal: any;

  /**
   * Constructs a new instance of the class.
   * @param {ImageService} imageService - The image service to be used by the class.
   */
  constructor(private imageService: ImageService) {}

  /**
   * Initializes the component by loading the image JSON data and assigning it to the gallery property.
   * @returns None
   */
  ngOnInit() {
    this.gallery = this.imageService.loadImageJson();
  }

  /**
   * Takes a photo using the device's camera.
   * @returns {Promise<string>} A promise that resolves to the URI of the captured image.
   */
  async takePhoto() {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
    
      /**
       * Adds an image to the image service and updates the gallery.
       * @param {string} webPath - The web path of the image to add.
       */
      await this.imageService.addImage(image.webPath);
      this.gallery = this.imageService.loadImageJson();
  }

  /**
   * Closes the modal by dismissing it with a 'cancel' result.
   * @returns None
   */
  close() {
    this.modal.dismiss(null, 'cancel');
  }

  /**
   * Sets the path of the image to be displayed in the modal and presents the modal.
   * @param {string} path - The path of the image to be displayed.
   * @returns None
   */
  setModalImage(path: string) {
    this.imageModal = path;
    this.modal.present();
  }

  /**
   * Deletes an image with the specified ID.
   * @param {string} id - The ID of the image to delete.
   * @returns None
   */
  deleteImage(id: string) {
    this.imageService.deleteImage(id).then(() => {
      this.gallery = this.imageService.loadImageJson();
      this.close();
    })
  }
}
