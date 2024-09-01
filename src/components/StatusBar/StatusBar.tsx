import { useEffect, useState } from 'react';
import { ApplicationStatus } from '../../models/ApplicationStatus';
import {
  getEntityList,
  ServiceUrlEnum,
} from '../../services/crud-service';
import { IHttpParameters } from '../../services/http-client';
import { Steps } from 'antd';
const { Step } = Steps;
import { StepProps } from 'antd/es/steps';
import './StatusBar.scss';

const StatusBar = ({ currentStatus, applicationClass }) => {
  const [statusList, setStatusList] = useState<ApplicationStatus[]>([]);
  const [steps, setSteps] = useState<StepProps[]>([]);

  useEffect(() => {
    const params: IHttpParameters = {
      ['applicationClass.equals']: applicationClass,
    };
    getEntityList<ApplicationStatus>(
      ServiceUrlEnum.APPLICATION_STATUS,
      params
    ).then((res) => {
      if (res && res.data && res.data.content) {
        setStatusList(res.data.content);
      }
    });
  }, [applicationClass]);

  useEffect(() => {
    setSteps(() =>
      statusList
        .filter((item) => item.step !== undefined && item.step !== null)
        .sort((a, b) => a.step - b.step)
        .map((item) => {
          const step: StepProps = {
            title: item.name,
          };
          return step;
        })
    );
  }, [statusList]);

  return (
    <>
      {currentStatus?.step && (
        <div className={'steps-container'}>
          <Steps
            progressDot
            current={currentStatus.step - 1}
            labelPlacement={'vertical'}
          >
            {steps.map((step, index) => (
              <Step
                key={index}
                title={step.title}
                description={step.description}
                className={
                  index % 2 === 0 ? 'step-label-bottom' : 'step-label-top'
                }
              />
            ))}
          </Steps>
        </div>
      )}
    </>
  );
};

export default StatusBar;
