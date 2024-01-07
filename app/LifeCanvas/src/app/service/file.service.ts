/**
 * Injectable class that provides file system functionality using Capacitor's Filesystem API.
 * @requires {@link Injectable} from '@angular/core'
 * @requires {@link Filesystem} from '@capacitor/filesystem'
 * @requires {@link Directory} from '@capacitor/filesystem'
 * @requires {@link Encoding} from '@capacitor/filesystem'
 * @requires {@link _} from 'underscore'
 */
import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})

/**
 * A class that provides file-related operations.
 */
export class FileService {
    constructor() { }

    /**
     * Saves a note to a JSON file.
     * @param {string} data - The content of the note.
     * @param {string} title - The title of the note.
     * @param {string | null} id - The ID of the note. If null, a new note will be created.
     * @returns None
     */
    saveNote = async (data: string, title: string, id: string | null) => {
      let notes = await this.readNotes();
      let content;
      /**
       * Checks if the 'notes' array is not empty and assigns its value to the 'content' variable.
       */
      if(notes && notes.length > 0){
        content = notes;
        /**
         * Updates the content array with the provided data and title. If the id is null, a new object
         * with a unique id is added to the content array. If the id is not null, the object with the
         * matching id in the content array is updated with the provided data and title.
         * @param {string | null} id - The id of the object to update. If null, a new object is added.
         * @param {string} data - The new data to update or add.
         * @param {string} title - The new title to update or add.
         */
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
      /**
       * Writes the given data to a JSON file named 'notes.json' in the external directory.
       * If the file already exists, the data will be appended to it. If not, a new file will be created.
       * @param {any} data - The data to be written to the file.
       * @param {string} title - The title of the data.
       */
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

    /**
     * Reads the contents of a JSON file asynchronously and returns the parsed JSON data.
     * @returns {Promise<Object|null>} A promise that resolves to the parsed JSON data if the file exists, or null if the file does not exist or an error occurs.
     */
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

    /**
     * Deletes a note with the specified ID from the notes.json file.
     * @param {string} id - The ID of the note to delete.
     * @returns None
     * @throws {Error} If there is an error writing to the notes.json file.
     */
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

    /**
     * Saves a task to the tasks.json file.
     * @param {any | null} taskList - The task list object to save.
     * @returns None
     */
    saveTask = async (taskList: any | null) => {
      let tasks = await this.readTasks();
      /**
       * Updates the task list based on the given taskList object.
       * If the task list already exists in the tasks array, it updates the tasks property of that task list.
       * If the task list does not exist in the tasks array, it assigns a new ID to the task list and adds it to the tasks array.
       * If the tasks array is empty, it assigns an ID of 0 to the task list and initializes the tasks array with the taskList object.
       * @param {Array} tasks - The array of existing task lists.
       * @param {Object} taskList - The task list object to update or add.
       */
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

      /**
       * Writes the given data to a file with the specified path and encoding.
       * @param {object} options - The options object containing the file path, data, directory, and encoding.
       * @param {string} options.path - The path of the file to write.
       * @param {string} options.data - The data to write to the file.
       * @param {Directory} options.directory - The directory where the file should be written.
       * @param {Encoding} options.encoding - The encoding to use when writing the file.
       */
      await Filesystem.writeFile({
          path: 'tasks.json',
          data: JSON.stringify(tasks),
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });   
    };

    /**
     * Reads the contents of a JSON file asynchronously and returns the parsed JSON data.
     * @returns {Promise<Object|null>} A promise that resolves to the parsed JSON data if the file is successfully read, or null if an error occurs.
     */
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

    /**
     * Deletes a task with the given ID from the tasks.json file.
     * @param {string} id - The ID of the task to delete.
     * @returns None
     * @throws {Error} If there is an error writing to the tasks.json file.
     */
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

    /**
     * Saves a journal entry to a JSON file.
     * @param {string} data - The content of the journal entry.
     * @param {string} title - The title of the journal entry.
     * @param {string | null} id - The ID of the journal entry. If null, a new entry will be created.
     * @returns None
     */
    saveJournal = async (data: string, title: string, id: string | null) => {
      let journal = await this.readJournal();
      let content;
      let date = new Date();
      /**
       * Updates the content of a journal entry with the given data, title, and date.
       * If the journal entry does not exist, a new entry is created.
       * @param {boolean} journal - Indicates whether the content is a journal entry.
       * @param {Array} content - The array of journal entries.
       * @param {string} id - The ID of the journal entry to update. If null, a new entry is created.
       * @param {string} data - The updated data for the journal entry.
       * @param {string} title - The updated title for the journal entry.
       * @param {Date} date - The updated date for the journal entry.
       * */
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

      /**
       * Writes the given content to a file in the external directory with the specified path and encoding.
       * @param {string} path - The path of the file to write.
       * @param {any} content - The content to write to the file.
       * @param {Directory} directory - The directory where the file should be written.
       * @param {Encoding} encoding - The encoding to use for writing the file.
       * */
      await Filesystem.writeFile({
          path: 'journal.json',
          data: JSON.stringify(content),
          directory: Directory.External,
          encoding: Encoding.UTF8,
        });
    };

    /**
     * Reads the contents of a journal file asynchronously.
     * @returns {Promise<Object|null>} - A promise that resolves to the parsed JSON contents of the journal file, or null if an error occurs.
     */
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

    /**
     * Deletes a journal entry with the specified ID from the journal file.
     * @param {string} id - The ID of the journal entry to delete.
     * @returns {Promise<void>} - A promise that resolves when the deletion is complete.
     * @throws {Error} - If there is an error while deleting the journal entry.
     */
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

    /**
     * Reads the contents of a JSON file asynchronously and returns the parsed JSON data.
     * @returns {Promise<Object|null>} A promise that resolves to the parsed JSON data if the file exists, or null if the file does not exist or an error occurs.
     */
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

    /**
     * Saves a quote and its author to a JSON file.
     * @param {string} quote - The quote to save.
     * @param {string} author - The author of the quote.
     * @returns {Promise<void>} - A promise that resolves when the quote is saved.
     */
    saveQuote = async (quote: string, author: string) => {
      let quotes = await this.readQuotes();
      /**
       * Adds a new quote to the existing list of quotes, or creates a new list if none exists.
       * @param {Array} quotes - The existing list of quotes.
       * @param {string} quote - The new quote to add.
       * @param {string} author - The author of the new quote.
       */
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

      /**
       * Writes the given data to a file in the specified directory with the specified encoding.
       * @param {object} options - The options for writing the file.
       * @param {string} options.path - The path of the file to write.
       * @param {string} options.data - The data to write to the file.
       * @param {Directory} options.directory - The directory where the file should be written.
       * @param {Encoding} options.encoding - The encoding to use for writing the file.
       * */
      await Filesystem.writeFile({
          path: 'quotes.json',
          data: JSON.stringify(quotes),
          directory: Directory.External,
          encoding: Encoding.UTF8,
      });
    };

    /**
     * Deletes a quote from the quotes.json file.
     * @param {string} quote - The quote to be deleted.
     * @returns None
     * @throws {Error} If there is an error writing to the quotes.json file.
     */
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

    /**
     * Reads the contents of the 'affirmations.json' file from the external directory.
     * @returns {Promise<Array<string> | null>} - A promise that resolves to an array of affirmations
     * if the file is successfully read, or null if there is an error.
     */
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

    /**
     * Saves an affirmation to the affirmations.json file.
     * @param {string} affirmation - The affirmation to save.
     * @returns {Promise<void>} - A promise that resolves when the affirmation is saved.
     */
    saveAffirmation = async (affirmation: string) => {
      let affirmations = await this.readAffirmations();
      /**
       * Adds an affirmation object to the affirmations array if it exists, otherwise creates a new array with the affirmation object.
       * @param {Array} affirmations - The array of affirmations.
       * @param {string} affirmation - The affirmation to add to the array.
       * @returns None
       */
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

    /**
     * Deletes an affirmation from the affirmations.json file.
     * @param {string} affirmation - The affirmation quote to delete.
     * @returns None
     * @throws {Error} If there is an error writing to the affirmations.json file.
     */
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