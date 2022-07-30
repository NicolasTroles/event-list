import React, { useState, useEffect } from 'react';
import { EventType } from 'src/types/event';
import moment from 'moment';

// Components
import ModalEvent from './ModalEvent/ModalEvent';
import { List, Button, Popconfirm, Tag, Input } from 'antd';
import { PlusCircleFilled, DeleteFilled, EditFilled } from '@ant-design/icons';

// Styles
import * as Styled from './Styled';

// Redux
import { eventsSelector } from 'src/redux/events/selectors';
import { deleteEvent } from 'src/redux/events/events';
import { useDispatch, useSelector } from 'react-redux';
import { statusColor, statuses } from '../helpers';

type Props = {
  events?: EventType[] | undefined;
};

export default function EventList({ events }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');

  const { success } = useSelector(eventsSelector);

  const dispatch = useDispatch();

  const closeModalHandler = () => {
    setSelectedEvent(null);
    setShowModal(false);
  };

  useEffect(() => {
    if (success) {
      closeModalHandler();
    }
  }, [success]);

  const deleteEventHandler = (eventId: number) => {
    dispatch(deleteEvent(eventId));
  };

  const searchEventsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filterEventsHandler = () =>
    events.filter(
      (event) => event.title.toLowerCase().includes(search) || event.address.toLowerCase().includes(search),
    );

  return (
    <Styled.Wrapper>
      <Input placeholder="Find an Event" onChange={searchEventsHandler} />
      <Button type="primary" icon={<PlusCircleFilled />} onClick={() => setShowModal(true)}>
        Add Event
      </Button>
      <List
        itemLayout="horizontal"
        dataSource={filterEventsHandler()}
        renderItem={(item: EventType) => (
          <List.Item>
            <List.Item.Meta
              title={
                <>
                  {item.title}{' '}
                  <Tag color={statusColor[item.status]}>
                    {statuses.find((status) => status.value === item.status).label}
                  </Tag>
                </>
              }
              description={
                <>
                  {item.address} - {moment(item.start_time).format('LLLL')}
                  to {moment(item.end_time).format('LLLL')}
                </>
              }
            />

            <Styled.ButtonsWrapper>
              <Button
                style={{ margin: '0 10px 5px 0' }}
                type="primary"
                icon={<EditFilled />}
                ghost
                onClick={() => {
                  setSelectedEvent(item);
                  setShowModal(true);
                }}
              >
                Edit Event
              </Button>
              <Popconfirm
                title="Are you sure to delete this event?"
                onConfirm={() => deleteEventHandler(item.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" icon={<DeleteFilled />} danger>
                  Remove Event
                </Button>
              </Popconfirm>
            </Styled.ButtonsWrapper>
          </List.Item>
        )}
      />
      <ModalEvent showModal={showModal} event={selectedEvent} closeModal={closeModalHandler} />
    </Styled.Wrapper>
  );
}
