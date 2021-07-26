import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from './../common/toastr.service';
import { IEvent } from './shared';
import { EventService } from './shared/index';



@Component({
    template: `  
    <header>  
        <h1>Upcoming Angular Event</h1>
    </header>
    <main>
        <div class="flex-container">
        <section *ngFor="let event of eventList">
            <event-thumbnail (keyup.enter)="onEnter(event)" [event]="event"> </event-thumbnail>
        </section>
        </div>
    </main>
    `,
    styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
    eventList!: IEvent[]

    constructor(
        private eventService: EventService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.eventList = this.route.snapshot.data['events']
    }

    onEnter(event: { id: any; }) {
        this.router.navigate(['/events', event?.id])
    }
}