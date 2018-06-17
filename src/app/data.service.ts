import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService{
  createDb() {
    const users = [
      {id: 1, name: 'Paweł', surname: 'Mazur', email: 'mazur@gmail.com'},
      {id: 2, name: 'Jan', surname: 'Kowalski', email: 'kowalski@gmail.com'},
      {id: 3, name: 'Joanna', surname: 'Nowak', email: 'nowak@gmail.com'},
      {id: 4, name: 'Anna', surname: 'Nowak', email: 'a.nowak@gmail.com'}
  ];
  return {users};
  }
}
