import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Booking {
  id?: string;
  task: string;
  priority: number;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingsCollection: AngularFirestoreCollection<Booking>;
 
  private bookings: Observable<Booking[]>;
 
  constructor(db: AngularFirestore) {
    this.bookingsCollection = db.collection<Booking>('bookings');
 
    this.bookings = this.bookingsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getBookings() {
    return this.bookings;
  }
 
  getBooking(id) {
    return this.bookingsCollection.doc<Booking>(id).valueChanges();
  }
 
  updateBooking(booking: Booking, id: string) {
    return this.bookingsCollection.doc(id).update(booking);
  }
 
  addBooking(booking: Booking) {
    return this.bookingsCollection.add(booking);
  }
 
  removeBooking(id) {
    return this.bookingsCollection.doc(id).delete();
  }
}
