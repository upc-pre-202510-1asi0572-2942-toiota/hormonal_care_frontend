import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cf-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: false
})
export class ChatComponent implements OnInit {
  searchControl = new FormControl('');
  chats = [
    { name: 'Doctor 1', lastMessage: 'Hola, ¿cómo estás?' },
    { name: 'Doctor 2', lastMessage: '¿Tienes alguna consulta?' },
    { name: 'Doctor 3', lastMessage: 'Revisaré tus resultados.' }
  ];
  constructor() { }
  ngOnInit(): void { }

  onChatClick(chat: any): void {
    console.log('Chat seleccionado:', chat);
  }
}
