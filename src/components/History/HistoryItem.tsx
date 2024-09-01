import React from 'react';

import { Task } from '../../models/Task';
// import { RESULT_OPTIONS_MAP } from '../../../task/TaskComponent';
import TimelineItem from 'antd/lib/timeline/TimelineItem';
import dayjs from 'dayjs';
import { Typography } from 'antd';
import {
  CompleteTimeClockIcon,
  CreatedTimeClockIcon,
} from '../../assets/icons/SvgIcons';

export interface HistoryItemProps {
  item: Task;
}

const cancelResult = ['DECLINE', 'CANCEL'];

const HistoryItem = (item: Task) => {
  const variables = item?.variables
    ? JSON.parse(item.variables)[item.name]
    : {};
  const result = variables?.result;
  // const resultLabel = result
  //   ? RESULT_OPTIONS_MAP[item.name].find((option) => option.value === result)
  //       ?.label || ''
  //   : '';

  const resultLabel = '';

  return (
    <TimelineItem
      key={item.id}
      label={
        <div className={'time-container'}>
          {dayjs(item.createdTime).format('DD.MM.YYYY')}{' '}
          <CreatedTimeClockIcon /> {dayjs(item.createdTime).format('HH:mm')}
        </div>
      }
      color={
        cancelResult.includes(result)
          ? 'red'
          : item?.completeDate && result
          ? 'green'
          : 'gray'
      }
    >
      <div style={{ paddingTop: '1px' }}>
        {item?.completeDate && (
          <div className={'time-container'}>
            {dayjs(item.completeDate).format('DD.MM.YYYY')}{' '}
            <CompleteTimeClockIcon isOverDue={item.isOverdue} />{' '}
            {item?.completeDate &&
              dayjs(item.completeDate || null).format('HH:mm')}
          </div>
        )}
        <Typography.Title level={5}> {item.description} </Typography.Title>
        {item.assignee}: {variables?.description}
        {result && item?.completeDate && (
          <>
            <br />
            {`Результат: ${resultLabel}`}
          </>
        )}
      </div>
    </TimelineItem>
  );
};

export default HistoryItem;
