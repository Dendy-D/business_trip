import { Input, DatePicker } from 'antd';

import './SimpleRoute.scss';

const SimpleRoute = () => {
  return (
    <div className="route">
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
      <div className="field">
        <span className="label">Обратно</span>
        <DatePicker
          // onChange={onChange}
          format={'DD.MM.YYYY'}
          showNow={false}
          placeholder="Обратно"
        />
      </div>
    </div>
  );
};

export default SimpleRoute;
