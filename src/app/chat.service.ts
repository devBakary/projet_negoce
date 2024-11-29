import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://api.gemini.ai/v1/chat'; // URL de l'API Gemini
  private apiKey = 'VOTRE_CLE_API';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      prompt: message,
      max_tokens: 100,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
