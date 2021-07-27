import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(
        private eventService: EventService
    ) {

    }

    resolve() {
        const eventList = this.eventService.getEvents().pipe(map(events => events))
        return eventList;
    }
    
    /*
    Typically when we listen to an observable, we would call subscribe here instead of map
    but because this is in an resolver, we need to return the observable to Angular
    so that it can watch the observable and see when it finishes
    if we called subscribe here, the value returned would not be the observable
    Subscribe returns a subscription, not an observable hence why we are using map here.
    */
}
