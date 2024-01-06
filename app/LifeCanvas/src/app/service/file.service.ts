import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})

export class FileService {
    constructor() { }

    saveNote = async (data: string, title: string, id: string | null) => {
      let notes = await this.readNotes();
      let content;
      if(notes && notes.length > 0){
        content = notes;
        if(id == null) {
          let maxID = parseInt(_.max(content, function(c){ return c.id; }).id);
          maxID++;
          content.push({
            "id": maxID,
            "data": data,
            "title": title
          });
        } else {
          content.forEach((note: {
            data: string;
            title: string; id: string; 
          }) => {
            if(note.id == id) {
              note.data = data;
              note.title = title;
            }
          });
        }
      } else{
        content = [{
          "id": 0,
          "data": data,
          "title": title
        }]
      }

      await Filesystem.writeFile({
          path: 'notes.json',
          data: JSON.stringify(content),
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
      
    };

    readNotes = async () => {
      try{
        const contents = await Filesystem.readFile({
          path: 'notes.json',
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
        return JSON.parse(contents.data.toString());
      } catch(e) {
        return null;
      }
        
    };

    deleteNote = async (id: string) => {
      var contents = await this.readNotes();
      contents = _.reject(contents, function(c) {
        return c.id == id;
      })
      try{
        await Filesystem.writeFile({
          path: 'notes.json',
          data: JSON.stringify(contents),
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
      } catch(e) {
          console.error(e);
      }
        
    };

    saveTask = async (taskList: any | null) => {
      let tasks = await this.readTasks();
      if(tasks && tasks.length > 0) {
        if(taskList.id == null) {
          let maxID = parseInt(_.max(tasks, function(c){ return c.id; }).id);
          maxID++;
          taskList.id = maxID
          tasks.push(taskList);
        } else {
          tasks.forEach((task: any) => {
            if(task.id == taskList.id) {
              task.tasks = taskList.tasks;
            }
          });
        }
      } else{
        taskList.id = 0;
        tasks = [taskList];
      }

      await Filesystem.writeFile({
          path: 'tasks.json',
          data: JSON.stringify(tasks),
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
      
    };

    readTasks = async () => {
      try{
        const contents = await Filesystem.readFile({
          path: 'tasks.json',
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
        return JSON.parse(contents.data.toString());
      } catch(e) {
        return null;
      }
    };

    deleteTask = async (id: string) => {
      var contents = await this.readTasks();
      contents = _.reject(contents, function(c) {
        return c.id == id;
      })
      try{
        await Filesystem.writeFile({
          path: 'tasks.json',
          data: JSON.stringify(contents),
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
      } catch(e) {
          console.error(e);
      }
        
    };

    saveJournal = async (data: string, title: string, id: string | null) => {
      let journal = await this.readJournal();
      let content;
      let date = new Date();
      if(journal){
        content = journal;
        if(id == null) {
          let maxID = parseInt(_.max(content, function(c){ return c.id; }).id);
          maxID++;
          content.push({
            "id": maxID,
            "data": data,
            "title": title,
            "date": date
          });
        } else {
          content.forEach((note: {
            data: string;
            title: string; id: string; 
            date: Date;
          }) => {
            if(note.id == id) {
              note.data = data;
              note.title = title;
              note.date = date;
            }
          });
        }
      } else{
        content = [{
          "id": 0,
          "data": data,
          "title": title,
          "date": date
        }]
      }

      await Filesystem.writeFile({
          path: 'journal.json',
          data: JSON.stringify(content),
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
      
    };

    readJournal = async () => {
      try{
        const contents = await Filesystem.readFile({
          path: 'journal.json',
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
        return JSON.parse(contents.data.toString());
      } catch(e) {
        return null;
      } 
    };

    deleteJournal = async (id: string) => {
      var contents = await this.readJournal();
      contents = _.reject(contents, function(c) {
        return c.id == id;
      })
      try{
        await Filesystem.writeFile({
          path: 'journal.json',
          data: JSON.stringify(contents),
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
      } catch(e) {
          console.error(e);
      }
        
    };

    readQuotes = async () => {
      try{
        const contents = await Filesystem.readFile({
          path: 'quotes.json',
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
        return JSON.parse(contents.data.toString());
      } catch(e) {
        return null;
      } 
    };

    saveQuote = async (quote: string, author: string) => {
      let quotes = await this.readQuotes();
      if(quotes && quotes.length > 0){
          quotes.push({
            quote,
            author
          });
      } else{
        quotes = [{
          quote,
          author
        }]
      }

      await Filesystem.writeFile({
          path: 'quotes.json',
          data: JSON.stringify(quotes),
          directory: Directory.External,
          encoding: Encoding.UTF8,
      });
    };

    deleteQuotes = async (quote: string) => {
      var contents = await this.readQuotes();
      contents = _.reject(contents, function(c) {
        return c.quote == quote;
      })
      try{
        await Filesystem.writeFile({
          path: 'quotes.json',
          data: JSON.stringify(contents),
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
      } catch(e) {
          console.error(e);
      }
    };

    readAffirmations = async () => {
      try{
        const contents = await Filesystem.readFile({
          path: 'affirmations.json',
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
        return JSON.parse(contents.data.toString());
      } catch(e) {
        return null;
      } 
    };

    saveAffirmation = async (affirmation: string) => {
      let affirmations = await this.readAffirmations();
      if(affirmations && affirmations.length > 0){
          affirmations.push({
            affirmation
          });
      } else{
        affirmations = [{
          affirmation
        }]
      }

      await Filesystem.writeFile({
          path: 'affirmations.json',
          data: JSON.stringify(affirmations),
          directory: Directory.External,
          encoding: Encoding.UTF8,
      });
    };

    deleteAffirmation = async (affirmation: string) => {
      var contents = await this.readAffirmations();
      contents = _.reject(contents, function(c) {
        return c.affirmation.quote == affirmation;
      })
      try{
        await Filesystem.writeFile({
          path: 'affirmations.json',
          data: JSON.stringify(contents),
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
      } catch(e) {
          console.error(e);
      }
    };
}