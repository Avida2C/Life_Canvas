/**
 * Injectable decorator marks a class as available to be provided and injected as a dependency.
 * @see {@link https://angular.io/api/core/Injectable|Angular Injectable}
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * A service class that provides APIs for interacting with external services.
 * This class can be used to make HTTP requests, handle authentication, and perform other operations related to external APIs.
 * @class ApisService
 */
export class ApisService {
    constructor() { }

    /**
     * Fetches a list of quotes from an API.
     * @returns {Promise<Array<Object>>} - A promise that resolves to an array of quote objects.
     */
    async getQuotes(){ 
        /**
         * Fetches data from the specified URL using the GET method and returns the result.
         * @param {string} url - The URL to fetch data from.
         * */
        const result = await fetch(
          'https://quote-garden.onrender.com/api/v3/quotes/random?' + new URLSearchParams({
            'count': '15'
            }),
          {
            method:'GET',
          }
        );
    
        const data = await result.json();
        return data.data;
    }

    /**
     * Retrieves a list of affirmations from an API.
     * @returns {Promise<any[]>} - A promise that resolves to an array of affirmations.
     */
    async GetAffirmations() {
        var affirmations: any[] = [];
        /**
         * Fetches data from a specified URL and appends the first element of the response data
         * to an array called affirmations. This process is repeated 10 times.
         */
        for(var i=0; i < 10; i++) {
            const result = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
                headers: {
                  'X-Api-Key':'LiI1YpaTqdcjYiSHKA3/2g==63myfgziDs7lkH2B'
                }
              }
            );
            const data = await result.json();
            affirmations.push(data[0]);
        }
        return affirmations;
    }
    
}

