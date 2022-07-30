import moment from 'moment';
import { useEffect, useState } from 'react';
import { EventType } from 'src/types/event';

// Styles
import { Modal, Radio, Form, Input, DatePicker } from 'antd';
const { RangePicker }: any = DatePicker;

// Redux
import { addEvent, editEvent } from 'src/redux/events/events';
import { useDispatch } from 'react-redux';

// Helpers
import { statuses } from '../../helpers';

type IModalEvent = {
  showModal: boolean;
  event: EventType | null;
  closeModal: () => void;
};

const titleDefault = 'Add Event';

export default function ModalEvent({ showModal, closeModal, event }: IModalEvent) {
  const [title, setTitle] = useState(titleDefault);

  const [form] = Form.useForm();

  const dispatch = useDispatch();
  useEffect(() => {
    if (event) {
      let newTitle = '';
      if (event) {
        newTitle = `Edit ${event.title}`;
      }
      setTitle(newTitle || titleDefault);

      form.setFieldsValue({
        title: event.title,
        address: event.address,
        status: event.status,
        date: [moment(new Date(event.start_time)), moment(new Date(event.end_time))],
      });
    } else {
      form.resetFields();
    }
  }, [event]);

  if (!showModal) {
    return <></>;
  }

  const handleSubmit = (ev) => {
    const newEvent = {
      title: ev.title,
      address: ev.address,
      status: ev.status,
      start_time: moment(ev.date[0]).format(),
      end_time: moment(ev.date[1]).format(),
    };
    if (event) {
      dispatch(editEvent({ id: event.id, ...newEvent }));
    } else {
      dispatch(addEvent({ id: new Date().getTime(), ...newEvent }));
    }
  };
  return (
    <Modal title={title} visible={true} okText="Submit" onOk={form.submit} onCancel={closeModal}>
      <Form labelCol={{ span: 4 }} name="events" onFinish={handleSubmit} form={form} autoComplete="off">
        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input your title!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input your address!' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please select the date!' }]}>
          <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please select one option!' }]}>
          <Radio.Group>
            {statuses.map((status) => (
              <Radio key={status.value} value={status.value}>
                {status.label}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
}
