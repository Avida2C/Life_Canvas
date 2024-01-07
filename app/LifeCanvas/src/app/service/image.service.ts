/**
 * Injectable class that provides file system operations using Capacitor's Filesystem API.
 * @requires {@link Injectable} from '@angular/core'
 * @requires {@link Directory} from '@capacitor/filesystem'
 * @requires {@link Encoding} from '@capacitor/filesystem'
 * @requires {@link Filesystem} from '@capacitor/filesystem'
 * @requires {@link _} from 'underscore'
 */
import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})

/**
 * A class that provides image-related functionality.
 */
export class ImageService {

  constructor() { }

  /**
   * Adds an image to the images.json file.
   * @param {string | undefined} imageUrl - The URL of the image to add.
   * @returns None
   */
  addImage = async (imageUrl: string | undefined) => {
    let images = await this.loadImageJson();
    /**
     * Adds an image object to the images array.
     * If the images array is empty, it creates a new array with the given image.
     * If the images array is not empty, it generates a new ID for the image and adds it to the array.
     * @param {Array} images - The array of image objects.
     * @param {string} imageUrl - The URL of the image to add.
     */
    if(!images){
      images = [{
        "id": 0,
        "imagePath": imageUrl,
      }]
    } else{
      let maxID = parseInt(_.max(images, function(c){ return c.id; }).id);
      maxID++;
      images.push({
        "id": maxID,
        "imagePath": imageUrl
      });
    }

    /**
     * Writes the given data to a file in the specified directory with the specified encoding.
     * @param {object} options - The options for writing the file.
     * @param {string} options.path - The path of the file to write.
     * @param {string} options.data - The data to write to the file.
     * @param {Directory} options.directory - The directory where the file should be written.
     * @param {Encoding} options.encoding - The encoding to use for writing the file.
     * */
    await Filesystem.writeFile({
        path: 'images.json',
        data: JSON.stringify(images),
        directory: Directory.External,
        encoding: Encoding.UTF8,
      });
    
  };

  /**
   * Loads the contents of the 'images.json' file from the external directory and returns
   * the parsed JSON data.
   * @returns {Promise<Object|null>} - A promise that resolves to the parsed JSON data if
   * the file is successfully read, or null if an error occurs.
   */
  loadImageJson = async () => {
    try {
      const contents = await Filesystem.readFile({
        path: 'images.json',
        directory: Directory.External,
        encoding: Encoding.UTF8,
      });
      return JSON.parse(contents.data.toString());
    } catch(e) {
      return null;
    }
      
  };

  /**
   * Deletes an image with the specified ID from the image JSON file.
   * @param {string} id - The ID of the image to delete.
   * @returns {Promise<void>} - A promise that resolves when the image is successfully deleted.
   * @throws {Error} - If there is an error writing to the image JSON file.
   */
  deleteImage = async (id: string) => {
    var contents = await this.loadImageJson();
    contents = _.reject(contents, function(c) {
      return c.id == id;
    })
    try{
      await Filesystem.writeFile({
        path: 'images.json',
        data: JSON.stringify(contents),
        directory: Directory.External,
        encoding: Encoding.UTF8,
      });
    } catch(e) {
        console.error(e);
    }
  };
}
