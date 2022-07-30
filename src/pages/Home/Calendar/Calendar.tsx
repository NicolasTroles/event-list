import React, { useEffect, useState } from 'react';
import { EventType } from 'src/types/event';

// Components
import FullCalendar, { EventSourceInput } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

// Styles
import * as Styled from './Styled';

// Helpers
import { statusColor } from '../helpers';

type Props = {
  events: EventType[] | undefined;
};

export default function Calendar({ events }: Props) {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    setCalendarEvents(
      events.map((event: EventType) => {
        return {
          id: event.id,
          title: event.title,
          start: event.start_time,
          end: event.end_time,
          color: statusColor[event.status], //@todo: bonus! Change color based on status!
        };
      }),
    );
  }, [events]);

  return (
    <Styled.Wrapper>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={calendarEvents as EventSourceInput} />
    </Styled.Wrapper>
  );
}
