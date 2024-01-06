import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
    constructor() { }

    async getQuotes(){ 
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

    async GetAffirmations() {
        var affirmations: any[] = [];
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

