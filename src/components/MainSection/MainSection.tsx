import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TaskLayout from '../../layouts/TaskLayout';
import BusinessTripProcess from '../../layouts/BusinessTripProcess';
// import StartedLayout from '../../layouts/started-layout/StartedLayuot';
// import IncomingLayout from '../../layouts/incoming-layout/IncomingLayout';
// import TaskLayout from '../../layouts/task-layout/TaskLayout';
// import { FormProvider } from '../../contexts/form-context';
// import CompletedLayout from '../../layouts/completed-layout/CompletedLayout';
// import FullPurchaseLayout from '../../layouts/applications/purchase/FullPurchaseLayout';
// import AdminSuppliersLayout from '../../layouts/admin/suppliers-layuot/AdminSuppliersLayout';
// import AdminCalendarTypesLayout from '../../layouts/admin/calendar-layout/AdminCalendarTypesLayout';
// import AdminCalendarLayout from '../../layouts/admin/calendar-layout/AdminCalendarLayout';
// import FileTemplateLayout from '../../layouts/admin/file-template-layout/FileTemplateLayout';

const MainSection: React.FC = () => {
  return (
    <Routes>
      <Route path={'/'}></Route>
      {/* <Route path={'/started'} element={<StartedLayout />}></Route>
      <Route path={'/incoming'} element={<IncomingLayout />}></Route>
      <Route path={'/completed'} element={<CompletedLayout />}></Route>
      <Route
        path="/purchase/:id"
        element={
          <FormProvider>
            <FullPurchaseLayout isDisabled={true} />
          </FormProvider>
        }
      /> */}
      {/* <Route path="/task/:id" element={<TaskLayout />} /> */}
      <Route path="/task" element={<TaskLayout />} />
      <Route path="/business-trip-process" element={<BusinessTripProcess />} />
      {/* <Route path="/admin/supplier" element={<AdminSuppliersLayout />} />
      <Route path="/admin/calendar" element={<AdminCalendarTypesLayout />} />
      <Route path="/admin/calendar/:id" element={<AdminCalendarLayout />} />
      <Route path="/admin/file-template" element={<FileTemplateLayout />} />  */}
    </Routes>
  );
};

export default MainSection;
