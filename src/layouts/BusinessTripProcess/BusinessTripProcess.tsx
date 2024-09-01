import React, { useState } from 'react';
import { Button, Form, Typography } from 'antd';
import { useForm } from 'antd/lib/form/Form';

import FormItem from 'antd/lib/form/FormItem';
import TextArea from 'antd/lib/input/TextArea';
import { Select, Input } from 'antd';

import EmployeeOnBusinessTrip from '../../components/EmployeeOnBusinessTrip';
import SimpleRoute from '../../components/SimpleRoute';
import ElaborateRoute from '../../components/ElaborateRoute';
import { ElaborateRoute as ElaborateRouteIcon } from '../../assets/icons/SvgIcons';
import './BusinessTripProcess.scss';

// import UiField from '../../ui-kit/UiField';

type Employee = {
  id: number;
  element: JSX.Element;
};

const BusinessTripProcess = () => {
  const [isSimpleRoute, setSimpleRoute] = useState(true);

  const [routes, setRoutes] = useState<JSX.Element[]>([
    <ElaborateRoute key={0} />,
  ]);

  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 0,
      element: (
        <EmployeeOnBusinessTrip
          index={0}
          key={0}
          deleteEmployee={() => deleteEmployee(0)}
        />
      ),
    },
  ]);

  const addEmployee = () => {
    const newId = employees.length;
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      {
        id: newId,
        element: (
          <EmployeeOnBusinessTrip
            index={newId}
            key={newId}
            deleteEmployee={() => deleteEmployee(newId)}
          />
        ),
      },
    ]);
  };

  const addRoute = () => {
    setRoutes((prevRoutes) => [
      ...prevRoutes,
      <ElaborateRoute key={prevRoutes.length} />,
    ]);
  };

  const backToSimpleRoute = () => {
    setSimpleRoute(true);
    setRoutes([<ElaborateRoute key={0} />]);
  };

  const deleteEmployee = (id: number) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  return (
    <div className="component">
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
        {employees.map((employee) => employee.element)}
        <div className="buttonGroup">
          {employees.length > 1 && (
            <Button
              onClick={() => deleteEmployee(employees.length - 1)}
              className="deleteEmployee"
              type="primary"
              ghost
            >
              Удалить
            </Button>
          )}
          <Button onClick={addEmployee} className="addEmployee" type="primary">
            Добавить сотрудника
          </Button>
        </div>
      </div>
      <div className="block routes">
        <Typography.Title level={4}> Направление </Typography.Title>

        {isSimpleRoute ? (
          <>
            <SimpleRoute />
            <div
              className="elaborateRouteButton"
              onClick={() => setSimpleRoute(false)}
            >
              <ElaborateRouteIcon />
              <span>Сложный маршрут</span>
            </div>
          </>
        ) : (
          <>
            {routes.map((route, index) =>
              React.cloneElement(route, { key: index })
            )}
            <ElaborateRoute />
            <div className="bottomLine">
              <div className="elaborateRouteButton" onClick={backToSimpleRoute}>
                <ElaborateRouteIcon />
                <span>Вернуться к простому маршруту</span>
              </div>
              <Button onClick={addRoute} type="primary">
                Добавить направление
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="block expenses">
        <Typography.Title level={4}> Расходы </Typography.Title>
        <Input
          value="Вам нужно проживание во время командировки?"
          disabled
          style={{ color: 'black' }}
        />
        <div className="buttonGroup">
          <button className="button confirm">Да</button>
          <button className="button decline">Нет</button>
        </div>
        <p className="description">*Тревел менеджер просчитает сумму</p>
        <TextArea
          className="textArea"
          variant={'filled'}
          autoSize={{ minRows: 9 }}
          placeholder="Напишите доп информацию по расходам"
        />
      </div>
      <button className="sendButton">Отправить</button>
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
