import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from 'antd';

// import DraftPurchaseLayout from '../applications/purchase/DraftPurchaseLayout';
import { Task } from '../../models/Task';
// import { getEntity, ServiceUrlEnum } from '../../services/crud-service';
// import TaskComponent, { TASK_NAME } from '../../components/task/TaskComponent';
// import { FormProvider } from '../../contexts/form-context';
// import { PurchaseApplication } from '../../models/PurchaseApplication';
// import { SupplierLink } from '../../models/SupplierLink';
import StatusBar from '../../components/StatusBar';
import { ApplicationClass } from '../../models/ApplicationModel';
import MainApplicationLayout from '../../layouts/Applications';

const TaskLayout: React.FC = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task>(null);
  const [application, setApplication] = useState<PurchaseApplication>(null);
  const [supplierLongList, setSupplierLongList] = useState<SupplierLink[]>([]);
  const [supplierShortList, setSupplierShortList] = useState<SupplierLink[]>(
    []
  );

//   useEffect(() => {
//     if (id) {
//       getEntity<Task>(ServiceUrlEnum.TASK, id).then((res) => {
//         if (res && res.data) {
//           setTask(res.data);
//         }
//       });
//     }
//   }, [id]);

  const MainSection = () => {
    // return (
    //   <>
    //     <DraftPurchaseLayout
    //       isEmbedded={true}
    //       applicationId={task.applicationId}
    //       isDisabled={task.name !== TASK_NAME.CREATE_APPLICATION}
    //       setTaskApplication={setApplication}
    //       setTaskLongList={setSupplierLongList}
    //       taskName={task.name}
    //     />
    //     <TaskComponent
    //       task={task}
    //       application={application}
    //       longList={supplierLongList}
    //       shortList={supplierShortList}
    //       setLongList={setSupplierLongList}
    //       setShortList={setSupplierShortList}
    //     />
    //   </>
    // );
  };

  return (
    <>
      {task && (
        <>
          <Typography.Title level={4}>
            {' '}
            Заявка на закуп № {application?.number}{' '}
          </Typography.Title>
          <StatusBar
            applicationClass={ApplicationClass.PURCHASE}
            currentStatus={application?.applicationStatus}
          />
          <MainApplicationLayout
            mainSection={MainSection()}
            applicationId={application?.id}
          />
        </>
      )}
    </>
  );
};

export default TaskLayout;
