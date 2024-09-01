import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { MenuProps } from 'antd/lib';

import { CompletedIcon, FtelSiderIcon, IncomingIcon, RunningIcon, StartProcess } from '../../assets/icons/SvgIcons';
import './NavBar.scss'
// import { createEntity, ServiceUrlEnum } from '../../services/crud-service';
// import { PurchaseApplication } from '../../models/PurchaseApplication';
// import { ApplicationClass } from '../../models/ApplicationModel';
// import { useAuth } from '../../contexts/auth-context';

const NavBar: React.FC = () => {

    const location = useLocation();
    // const navigate = useNavigate();

    // const {isAdmin} = useAuth();
    // const [items, setItems] = useState<[]>([])

    const defaultActiveKey = location.pathname.split('/')[1]

    // const purchaseCreate = () => {
    //     const newEntity = new PurchaseApplication(ApplicationClass.PURCHASE, );
    //     createEntity<PurchaseApplication>(ServiceUrlEnum.PURCHASE_APPLICATION, newEntity).then((res) => {
    //         if (res && res.data) {
    //             navigate(`incoming`)
    //         }
    //     })
    // }

    // useEffect(() => {
    //         setItems(isAdmin ? [...defaultItems, ...adminItems] : [...defaultItems])
    // }, [isAdmin])

    const defaultItems: MenuProps['items'] = [
        {
            key: 'started',
            icon: <RunningIcon/>,
            label: (
                // <Link to={'/started'}>Запущенные</Link>
                <Link to={'/'}>Запущенные</Link>
            )
        },
        {
            key: 'incoming',
            icon: <IncomingIcon/>,
            label: (
                // <Link to={'/incoming'}>Входящие</Link>
                <Link to={'/'}>Входящие</Link>
            )
        },
        {
            key: 'completed',
            icon: <CompletedIcon/>,
            label: (
                // <Link to={'/completed'}>Завершенные</Link>
                <Link to={'/'}>Завершенные</Link>
            )
        },
        {
            key: 'process',
            icon: <StartProcess/>,
            label: 'Запустить процесс',
            children: [
                {
                    key: 'purchase',
                    label: (
                        <Button type={'text'}> Заявка на закупку </Button>
                    )
                }
            ]
        },
    ]

    // const adminItems: MenuProps['items'] = [
    //     {
    //         key: 'dictionary',
    //         label: 'Справочники',
    //         children: [
    //             {
    //                 key: 'supplier',
    //                 label: (
    //                     <Link to={'/admin/supplier'}>Поставщики</Link>
    //                 )
    //             },
    //             {
    //                 key: 'calendar',
    //                 label: (
    //                     <Link to={'/admin/calendar'}>Календари</Link>
    //                 )
    //             },
    //             {
    //                 key: 'file-template',
    //                 label: (
    //                     <Link to={'/admin/file-template'}>Шаблоны файлов</Link>
    //                 )
    //             }
    //         ]
    //     },
    // ]

    return (
        <>
            <FtelSiderIcon/>
            <Menu theme={'light'} items={defaultItems} mode='inline' defaultSelectedKeys={[defaultActiveKey]}/>
        </>
    )
};

export default NavBar;
