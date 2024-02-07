import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  // Constructors get loaded before the ngOnInit lifecycle hook
  constructor(){
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  }

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

    reservation.id = Date.now().toString();

    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
}
