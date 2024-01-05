import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  addImage = async (imageUrl: string | undefined) => {
    let images = await this.loadImageJson();
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

    await Filesystem.writeFile({
        path: 'images.json',
        data: JSON.stringify(images),
        directory: Directory.External,
        encoding: Encoding.UTF8,
      });
    
  };

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
