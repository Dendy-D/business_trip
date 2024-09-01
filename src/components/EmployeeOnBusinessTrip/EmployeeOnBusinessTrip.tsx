import { Input } from 'antd';
import { Typography } from 'antd';

import './EmployeeOnBusinessTrip.scss';

type Props = {
  index: number;
  deleteEmployee: () => void;
};

const EmployeeOnBusinessTrip = ({ index, deleteEmployee }: Props) => {
  return (
    <div className="employeeOnBusinessTrip">
      <Typography.Title level={5}> Командируемый {index + 1} </Typography.Title>
      <div className="grid">
        <div className="field">
          <span className="label">ФИО</span>
          <Input placeholder="ФИО" style={{ width: '100%' }} />
        </div>
        <div className="field">
          <span className="label">Контакты</span>
          <Input placeholder="Контакты" style={{ width: '100%' }} />
        </div>
        <div className="field">
          <span className="label">Подразделение</span>
          <Input placeholder="Подразделение" style={{ width: '100%' }} />
        </div>
        <div className="field">
          <span className="label">Должность</span>
          <Input placeholder="Должность" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeOnBusinessTrip;
