import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  // CRUD Methods

  // You can specify the return type of a method as seen here below - Returns a type of Array of Reservation Class
  getReservations(): Reservation[] {
    return this.reservations;
  }

  // Using a pipe to also say return the class object instance or if not found it will return undefined
  getReservation(id: string): Reservation | undefined{
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1);
  }

  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
  }
}
