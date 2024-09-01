import React, { useEffect, useState } from 'react';
import { Task } from '../../models/Task';
import {
  getEntityList,
  ServiceUrlEnum,
} from '../../services/crud-service';
import { IHttpParameters } from '../../services/http-client';
import { Timeline, Typography } from 'antd';
import './History.scss';
import HistoryItem from './HistoryItem';

const History: React.FC = ({ applicationId }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (applicationId) {
      const params: IHttpParameters = {
        ['applicationId.equals']: applicationId,
        ['sort']: 'createdTime,asc',
        ['page']: '0',
        ['size']: '200',
      };
      getEntityList<Task>(ServiceUrlEnum.TASK, params).then((res) => {
        if (res && res?.data && res?.data?.content?.length) {
          setTasks(res.data.content);
        }
      });
    }
  }, [applicationId]);

  return (
    <>
      <div className="timeline-container">
        <Typography.Title
          style={{ marginBlock: '20px', marginLeft: '25px' }}
          level={4}
        >
          {' '}
          История процесса{' '}
        </Typography.Title>
        <Timeline mode={'left'}>
          {tasks.map((item) => HistoryItem(item))}
        </Timeline>
      </div>
    </>
  );
};

export default History;
