import React, {useEffect, useState} from "react";
import {Spin, Typography} from "antd";
import '../../Layouts.scss'
import {PurchaseSubject} from "../../../components/applications/purchase/subject/PurchaseSubject";
import PurchaseBudget from "../../../components/applications/purchase/budget/PurchaseBudget";
import PurchaseApplicationComponent
    from "../../../components/applications/purchase/application/PurchaseApplicationComponent";
import PurchaseSuppliers from "../../../components/applications/purchase/suppliers/PurchaseSuppliers";
import {useSkipMountEffect} from "../../../hooks/useSkipMountEffect";
import {useParams} from "react-router-dom";
import {getEntity, getEntityList, ServiceUrlEnum, updateEntity} from "../../../services/crud-service";
import {PurchaseSubjectModel} from "../../../models/PurchaseSubjectModel";
import PurchaseProject from "../../../components/applications/purchase/project/PurchaseProject";
import {Project} from "../../../models/Project";
import {SupplierLink, SupplierLinkRole} from "../../../models/SupplierLink";
import {PurchaseApplication} from "../../../models/PurchaseApplication";
import {TASK_NAME} from "../../../components/task/TaskComponent";
import Initiator from "../../../components/applications/shared/initiator/Initiator";
import StatusBar from "../../../components/applications/shared/status-bar/StatusBar";
import {ApplicationClass} from "../../../models/ApplicationModel";

export default function DraftPurchaseLayout({isEmbedded, applicationId, isDisabled = false, setTaskApplication = null, taskName = null, setTaskLongList = null, setShortList = null}) {

    const {id} = useParams()
    const [applicationData, setApplicationData] = useState({});
    const [subjectData, setSubjectData] = useState({});
    const [application, setApplication] = useState<PurchaseApplication>(null);
    const [supplierLongList, setSupplierLongList] = useState<SupplierLink[]>([])
    const [subject, setSubject] = useState<PurchaseSubjectModel>(null);
    const [project, setProject] = useState<Project>(null);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const entityId = isEmbedded ? applicationId : id;
        if (entityId) {
            getEntity<PurchaseApplication>(ServiceUrlEnum.PURCHASE_APPLICATION, entityId).then((res) => {
                if (res && res.data) {
                    setApplication(res.data)
                }
            })
            getEntityList<PurchaseSubjectModel>(ServiceUrlEnum.PURCHASE_SUBJECT, {['purchaseApplicationId.equals']: entityId}).then((res) => {
                if (res && res.data && res.data.content?.length) {
                    setSubject(res.data.content[0])
                }
            })
        }
    }, [id])

    useEffect(() => {
        if (setTaskApplication) {
            setTaskApplication(application)
        }
    }, [application])

    useEffect(() => {
        if (application && subject) {
            setDataLoaded(true)
        }
    }, [application, subject])

    const setAppData = (data) => {
        setApplicationData((prevState) => ({
            ...prevState,
            ...data
        }))
    }

    const setSubjData = (data) => {
        setSubjectData((prevState) => ({
            ...prevState,
            ...data
        }))
    }

    useSkipMountEffect(() => {
        setLoading(true)
        const updated: PurchaseApplication = {...application, ...applicationData, project: project}
            updateEntity<PurchaseApplication>(ServiceUrlEnum.PURCHASE_APPLICATION, updated).then((res) => {
                if (res && res.data) {
                    setApplication(res.data)
                }
                setLoading(false);
            })
    }, [applicationData])

    useEffect(() => {
        if (setTaskLongList) {
            setTaskLongList(supplierLongList)
        }
    }, [supplierLongList])

    useSkipMountEffect(() => {
        setLoading(true)
        const updated: PurchaseSubjectModel = {...subject, ...subjectData}
        updateEntity<PurchaseSubjectModel>(ServiceUrlEnum.PURCHASE_SUBJECT, updated).then((res) => {
            if (res && res.data) {
                setSubject(res.data)
            }
            setLoading(false);
        })
    }, [subjectData])

    const handleSubmit = () => {

    };

    return (
        <>
            {   dataLoaded &&
                <>
                    {loading &&
                        <span>
                            <Spin />
                            Сохранение...
                        </span>
                    }
                    <div className={'form-area'}>
                        <Initiator
                            username={application?.createdBy}
                        />
                    </div>
                    <div className={'form-area'}>
                        <PurchaseProject
                            application={application}
                            project={project}
                            setProject={setProject}
                            disabled={isDisabled}
                        />
                    </div>
                    <div className={'form-area'}>
                        <PurchaseApplicationComponent
                            subject={subject}
                            application={application}
                            setAppData={setAppData}
                            setSubjData={setSubjData}
                            // attachments={attachments}
                            disabled={isDisabled}
                        />
                    </div>
                    <div className={'form-area'}>
                        <PurchaseSuppliers
                            role={SupplierLinkRole.RECOMMENDED}
                            application={application}
                            disabled={isDisabled}
                            title={'Рекомендованный список Производителя/Поставщика '}
                        />
                    </div>
                    <div className={'form-area'}>
                        <PurchaseBudget
                            application={application}
                            setAppData={setAppData}
                            disabled={isDisabled}
                        />
                    </div>
                    <div className={'form-area'}>
                        <PurchaseSubject
                            purchaseSubject={subject}
                            disabled={isDisabled}
                        />
                    </div>
                    {/*{   !applicationTasks.includes(taskName) &&*/}
                    {/*    <>*/}
                    {/*        <div className={'form-area'}>*/}
                    {/*            <PurchaseSuppliers*/}
                    {/*                role={SupplierLinkRole.LONG}*/}
                    {/*                application={application}*/}
                    {/*                disabled={isDisabled}*/}
                    {/*                setLongList={setSupplierLongList}*/}
                    {/*                title={'Long list'}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <div className={"form-area"}>*/}
                    {/*            <SuppliersResponse*/}
                    {/*                longList={supplierLongList}*/}
                    {/*                disabled={isDisabled}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </>*/}
                    {/*}*/}
                </>
            }
        </>
    )
}