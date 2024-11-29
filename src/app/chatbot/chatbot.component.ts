import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  messages: { sender: string; text: string }[] = [];
  userInput = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {
    const userMessage = this.userInput.trim();
    if (!userMessage) return;

    // Ajouter le message utilisateur à la conversation
    this.messages.push({ sender: 'user', text: userMessage });
    this.userInput = '';

    // Envoyer le message à l'API
    this.chatService.sendMessage(userMessage).subscribe((response) => {
      const botMessage = response.choices[0].text.trim();
      this.messages.push({ sender: 'bot', text: botMessage });
    });
  }
}
