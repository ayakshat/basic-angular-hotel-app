import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservation: Reservation[] = [];
  //CRUD
  getReservations(): Reservation[] {
    return this.reservation;
  }
  getReservation(id: string): Reservation | undefined {
    return this.reservation.find(r => r.id === id);
  }
  addReservation(reservation: Reservation): void {
    this.reservation.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservation));
  }
  deleteReservation(id: string): void {
    let index = this.reservation.findIndex(x => x.id === id);
    this.reservation.splice(index, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservation));
  }
  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservation.findIndex(x => x.id === updatedReservation.id);
    this.reservation[index] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservation));
  }
}
