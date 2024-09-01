import React, { useState } from 'react';
import { Button, Form, Typography } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import TextArea from 'antd/lib/input/TextArea';
import { Select, Input } from 'antd';

import EmployeeOnBusinessTrip from '../../components/EmployeeOnBusinessTrip';
import Route from '../../components/Route';
import ElaborateRoute from '../../components/ElaborateRoute'
import { ElaborateRoute as ElaborateRouteIcon } from '../../assets/icons/SvgIcons';
import './BusinessTripProcess.scss';

// import UiField from '../../ui-kit/UiField';

const BusinessTripProcess: React.FC = () => {
  const [employees, setEmployees] = useState<JSX.Element[]>([
    <EmployeeOnBusinessTrip index={0} key={0} />,
  ]);

  const addEmployee = () => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      <EmployeeOnBusinessTrip
        index={prevEmployees.length}
        key={prevEmployees.length}
      />,
    ]);
  };

  return (
    <div>
      {/* <div className="project"> */}
      <div className="block project">
        <Typography.Title level={4}> Проект </Typography.Title>
        <div className="project-content">
          <div className="field">
            <span className="label">Тип</span>
            <Select placeholder="Тип" style={{ width: '100%' }} />
          </div>
          <div className="field">
            <span className="label">Проект</span>
            <Select placeholder="Проект" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      <div className="block information">
        <Typography.Title level={4}>
          {' '}
          Информация о командировке{' '}
        </Typography.Title>
        <div className="information-content">
          <div className="information-fields">
            <div className="field">
              <span className="label">Цель</span>
              <Input
                placeholder="Напишите цель командировки"
                style={{ width: '100%' }}
              />
            </div>
            <div className="field">
              <span className="label">Вид транспорта</span>
              <Select
                placeholder="Выберите вид транспорта"
                style={{ width: '100%' }}
                options={[
                  { value: 'plane', label: 'Самолет' },
                  { value: 'train', label: 'Поезд' },
                  { value: 'taxi', label: 'Такси' },
                  { value: 'ownTransport', label: 'На своем транспорте' },
                ]}
              />
            </div>
          </div>
          <div>
            <span className="label">Примечание</span>
            <TextArea
              className="textArea"
              variant={'filled'}
              autoSize={{ minRows: 9 }}
              placeholder="Напишите доп информацию о командировке"
            />
          </div>
        </div>
      </div>
      <div className="block employeeOnBusinessTrip">
        <Typography.Title level={4}> Командируемый/-ые </Typography.Title>
        {employees.map((employee, index) =>
          React.cloneElement(employee, { key: index })
        )}
        <Button onClick={addEmployee} className="addEmployee" type="primary">
          Добавить сотрудника
        </Button>
      </div>
      <div className="block routes">
        <Typography.Title level={4}> Направление </Typography.Title>
        <Route />
        <div className="elaborateRouteButton">
          <ElaborateRouteIcon />
          <span>Сложный маршрут</span>
        </div>

        <ElaborateRoute />

        {/* <Button className="addRoute" type="primary">
          Добавить направление
        </Button> */}
      </div>
      {/* //{' '} */}
      {/* </div> */}
    </div>
  );
};

export default BusinessTripProcess;

{
  /* <Typography.Title style={{ marginTop: '20px' }} level={5}>
        {' '}
        Описание заявки{' '}
      </Typography.Title>
      <FormItem
        // initialValue={initialValues.description}
        validateTrigger={'onBlur'}
        name={['application', 'description']}
      >
        <TextArea
          variant={'filled'}
          disabled={false}
          autoSize={{ minRows: 9 }}
          placeholder={'Напишите описание'}
        />
      </FormItem> */
}
