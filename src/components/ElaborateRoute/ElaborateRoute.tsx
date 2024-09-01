import { Input, DatePicker } from 'antd';

import { TrashCan } from '../../assets/icons/SvgIcons';
import './ElaborateRoute.scss';

const ElaborateRoute = () => {
  return (
    <div className="elaborateRoute">
      <div className="field">
        <span className="label">ФИО</span>
        <Input placeholder="ФИО" />
      </div>
      <div className="field">
        <span className="label">Контакты</span>
        <Input placeholder="Контакты" />
      </div>
      <div className="field">
        <span className="label">Когда</span>
        <DatePicker
          // onChange={onChange}
          format={'DD.MM.YYYY'}
          showNow={false}
          placeholder="Когда"
        />
      </div>
      <TrashCan />
    </div>
  );
};

export default ElaborateRoute;
