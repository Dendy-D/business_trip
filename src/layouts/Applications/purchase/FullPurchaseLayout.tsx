import DraftPurchaseLayout from "./DraftPurchaseLayout";
import React, {useState} from "react";
import {PurchaseApplication} from "../../../models/PurchaseApplication";
import {SupplierLink, SupplierLinkRole} from "../../../models/SupplierLink";
import PurchaseSuppliers from "../../../components/applications/purchase/suppliers/PurchaseSuppliers";
import SuppliersResponse from "../../../components/applications/purchase/suppliers/SuppliersResponse";
import UiUploadDraggerField from "../../../ui-kit/ui-upload-dragger-field/UiUploadDraggerField";
import {EntityType} from "../../../models/Attachment";
import {Typography} from "antd";
import Check from "../../../components/applications/purchase/check/Check";
import {CheckType} from "../../../models/Check";
import {
    complianceResultOptions,
    securityResultOptions,
    technicalResultOptions
} from "../../../constants/CheckResultOptions";
import SuppliersOffers from "../../../components/applications/purchase/suppliers/SuppliersOffers";
import UiUploadButtonField from "../../../ui-kit/ui-upload-button-field/UiUploadButtonField";
import StatusBar from "../../../components/applications/shared/status-bar/StatusBar";
import {ApplicationClass} from "../../../models/ApplicationModel";
import MainApplicationLayout from "../MainApplicationLayout";

export default function FullPurchaseLayout({isDisabled = false}) {

    const [application, setApplication] = useState<PurchaseApplication>(null);
    const [longList, setLongList] = useState<SupplierLink[]>([])
    const [shortList, setShortList] = useState<SupplierLink[]>([])


    const MainSection = () => {
        return (
            <>
                <DraftPurchaseLayout
                    isDisabled={isDisabled}
                    setShortList={setShortList}
                    setTaskLongList={setLongList}
                    setTaskApplication={setApplication}
                />
                {   application?.applicationStatus?.step > 5 &&
                    <>
                        <div className={'form-area'}>
                            <PurchaseSuppliers
                                role={SupplierLinkRole.LONG}
                                application={application}
                                disabled={true}
                                setSuppliers={setLongList}
                                title={'Long list'}
                            />
                        </div>
                        <div className={"form-area"}>
                            {longList &&
                                <SuppliersResponse
                                    longList={longList}
                                    disabled={true}
                                />
                            }
                        </div>
                        <div className={"form-area"}>
                            {   application &&
                                <UiUploadDraggerField
                                    entityType={EntityType.APPLICATION}
                                    entityId={application?.id}
                                    title={'Сравнительная таблица'}
                                    fileType={'comparison-table'}
                                    disabled={true}
                                />
                            }
                        </div>
                        <div className={"form-area"}>
                            <Typography.Title level={4}> Заключение технической экспертизы </Typography.Title>
                            {
                                application &&
                                <Check
                                    type={CheckType.TECHNICAL}
                                    resultOptions={technicalResultOptions}
                                    resultTitle={'Результат'}
                                    application={application}
                                    disabled={true}
                                />
                            }
                        </div>
                        <div className={'form-area'}>
                            {application &&
                                <PurchaseSuppliers
                                    role={SupplierLinkRole.SHORT}
                                    application={application}
                                    disabled={true}
                                    setSuppliers={setShortList}
                                    title={'Short list'}
                                />
                            }
                        </div>
                    </>
                }
                {application?.applicationStatus?.step > 6 &&
                    <div className={"form-area"}>
                        <Typography.Title level={4}> Заключение службы безопасности </Typography.Title>
                        {
                            application &&
                            <Check
                                type={CheckType.SECURITY}
                                resultOptions={securityResultOptions}
                                resultTitle={'Результат'}
                                application={application}
                                disabled={true}
                            />
                        }
                    </div>
                }
                {application?.applicationStatus?.step > 7 &&
                    <>
                        <div className={"form-area"}>
                            {
                                application && shortList.length > 0 &&
                                <PurchaseSuppliers
                                    role={SupplierLinkRole.WINNER}
                                    application={application}
                                    title={'Победитель'}
                                    suppliers={shortList}
                                    disabled={true}
                                />
                            }
                        </div>
                        <div className={"form-area"}>
                            {
                                application && shortList.length > 0 &&
                                <PurchaseSuppliers
                                    role={SupplierLinkRole.RESERVE}
                                    application={application}
                                    title={'Альтернативный'}
                                    suppliers={shortList}
                                    disabled={true}
                                />
                            }
                        </div>
                        <div className={"form-area"}>
                            <SuppliersOffers
                                supplierLinks={shortList}
                                disabled={true}
                            />
                        </div>
                    </>
                }
                {application?.applicationStatus?.step > 8 &&
                    <div className={"form-area"}>
                        <Typography.Title level={4}> Заключение Комплаенс службы </Typography.Title>
                        {
                            application &&
                            <Check
                                type={CheckType.COMPLIANCE}
                                resultOptions={complianceResultOptions}
                                resultTitle={'Факторы риска'}
                                application={application}
                                disabled={true}
                            />
                        }
                    </div>
                }
                {application?.applicationStatus?.step > 9 &&
                    <div className={"form-area"}>
                        <Typography.Title level={4}> Протокол </Typography.Title>
                        {application &&
                            <UiUploadButtonField
                                entityType={EntityType.APPLICATION}
                                entityId={application?.id}
                                fileType={'protocol'}
                                disabled={true}
                            />
                        }
                    </div>
                }
            </>
        )
    }

    return(
        <>
            <Typography.Title level={4}> Заявка на закуп № {application?.number} </Typography.Title>
            <StatusBar
                applicationClass={ApplicationClass.PURCHASE}
                currentStatus={application?.applicationStatus}
            />
            <MainApplicationLayout
                applicationId={application?.id}
                mainSection={MainSection()}
            />
        </>
    )
}