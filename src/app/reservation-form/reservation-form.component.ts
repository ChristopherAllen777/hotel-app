import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

  reservationForm: FormGroup = new FormGroup({});

  // A constructor - Gets built when there is an instance of a class
  // This is an example of dependency injection
  // Once injected into a constructor you can use in the entire component
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService) {

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.reservationForm.valid) {

      let reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);
    }
  }

}
