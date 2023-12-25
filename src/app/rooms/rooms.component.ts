import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberofRooms = 10;

  hideRooms = false;

  selectedRoom!:RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];
  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'AC, WIFI, TV, BATHROOM, KITCHEN',
        price: 500,
        photos: 'NAhh fam',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'AC, WIFI, TV, BATHROOM, KITCHEN',
        price: 1000,
        photos: 'NAhh fam',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.6,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'AC, WIFI, TV, BATHROOM, KITCHEN',
        price: 15000,
        photos: 'NAhh fam',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.2,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room:RoomList){
    this.selectedRoom=room;
  }
}
