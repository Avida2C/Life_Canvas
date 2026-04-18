/**
 * Injectable decorator marks a class as available to be provided and injected as a dependency.
 * @see {@link https://angular.io/api/core/Injectable|Angular Injectable}
 */
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

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

        if (!result.ok) {
            return [];
        }
        const data = await result.json();
        return Array.isArray(data?.data) ? data.data : [];
    }

    /**
     * Retrieves a list of affirmations from an API.
     * Uses API-Ninjas when {@link environment.apiNinjasKey} is set; otherwise fills from Quotable (no key).
     * @returns {Promise<any[]>} - A promise that resolves to an array of `{ quote, author }` items.
     */
    async GetAffirmations(): Promise<any[]> {
        const affirmations: any[] = [];
        const key = environment.apiNinjasKey?.trim();

        if (key) {
            for (let i = 0; i < 10; i++) {
                const row = await this.fetchApiNinjasInspirationalQuote(key);
                if (row) {
                    affirmations.push(row);
                }
            }
        }

        const need = 10 - affirmations.length;
        if (need > 0) {
            const fallback = await this.fetchZenQuotesBatch(need);
            affirmations.push(...fallback);
        }

        return affirmations;
    }

    private async fetchApiNinjasInspirationalQuote(apiKey: string): Promise<{ quote: string; author: string } | null> {
        try {
            const result = await fetch(
                'https://api.api-ninjas.com/v1/quotes?category=inspirational',
                { headers: { 'X-Api-Key': apiKey } }
            );
            if (!result.ok) {
                return null;
            }
            const data = await result.json();
            const item = Array.isArray(data) ? data[0] : null;
            return item?.quote ? item : null;
        } catch {
            return null;
        }
    }

    /** ZenQuotes — no API key; returns up to `count` items shaped like API-Ninjas quote rows. */
    private async fetchZenQuotesBatch(count: number): Promise<{ quote: string; author: string }[]> {
        try {
            const n = Math.min(Math.max(count, 1), 10);
            const result = await fetch(`https://zenquotes.io/api/random/${n}`);
            if (!result.ok) {
                return [];
            }
            const data = await result.json();
            if (!Array.isArray(data)) {
                return [];
            }
            return data
                .filter((x: { q?: string }) => x?.q)
                .map((x: { q: string; a?: string }) => ({ quote: x.q, author: x.a ?? '' }));
        } catch {
            return [];
        }
    }

}

