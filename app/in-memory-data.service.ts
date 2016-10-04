import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
        { id: 11, name: 'Joaozinho' },
        { id: 12, name: 'Pedro' },
        { id: 13, name: 'Marcelo' },
        { id: 14, name: 'Gabriela' },
        { id: 15, name: 'Paulinho' },
        { id: 16, name: 'Maria' },
        { id: 17, name: 'Bruna' },
        { id: 18, name: 'Júlia' },
        { id: 19, name: 'Celso' },
        { id: 20, name: 'Juca' }
    ];
    return {users};
  }
}
