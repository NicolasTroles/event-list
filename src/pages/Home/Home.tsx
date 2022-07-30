import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { eventsSelector } from 'src/redux/events/selectors';
import { getEvents } from 'src/redux/events/events';

// Components
import EventList from './EventList/EventList';
import Calendar from './Calendar/Calendar';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

// Styles
import * as Styled from './Styled';

const tabs = {
  eventList: {
    value: '1',
    label: 'Event List',
  },
  calendar: {
    value: '2',
    label: 'Calendar',
  },
};

export function HomePage() {
  const [currentTab, setCurrentTab] = useState(tabs.eventList.value);
  const { events } = useSelector(eventsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const onChangeTab = (key: string) => {
    setCurrentTab(key);
  };

  return (
    <Styled.Wrapper>
      <Tabs defaultActiveKey={currentTab} type="card" onChange={onChangeTab}>
        <TabPane tab={tabs.eventList.label} key={tabs.eventList.value}>
          <EventList events={events} />
        </TabPane>
        <TabPane tab={tabs.calendar.label} key={tabs.calendar.value}>
          <Calendar events={events} />
        </TabPane>
      </Tabs>
    </Styled.Wrapper>
  );
}
