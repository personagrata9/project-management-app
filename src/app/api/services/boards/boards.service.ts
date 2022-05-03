import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoardItem } from 'src/app/workspace/models/board-item.model';
import { BASE_URL } from '../../consts';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(private http: HttpClient) {}

  getBoards(): Observable<IBoardItem[]> {
    return this.http.get<Array<IBoardItem>>(`${BASE_URL}boards`);
  }

  createBoard(title: string) {
    const options = {
      title,
    };
    this.http.post(`${BASE_URL}boards`, options).subscribe({
      next: data => data,
      error: error => console.log(error.error.message),
    });
  }

  getBoardById(id: string) {
    this.http.get(`${BASE_URL}boards/${id}`).subscribe({
      next: data => data,
      error: error => console.log(error.error.message),
    });
  }

  deleteBoard(id: string) {
    this.http.delete(`${BASE_URL}boards/${id}`).subscribe({
      next: data => data,
      error: error => console.log(error.error.message),
    });
  }

  updateBoard(id: string, title: string) {
    const options = {
      title,
    };
    this.http.put(`${BASE_URL}boards/${id}`, options).subscribe({
      next: data => data,
      error: error => console.log(error.error.message),
    });
  }
}
