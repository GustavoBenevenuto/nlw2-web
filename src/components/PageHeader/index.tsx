import React, { ReactChildren } from 'react';
import { Link, RouteChildrenProps } from 'react-router-dom';

import './styles.css';

import backIcon from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';

interface HeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<HeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logo} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && 
                    <p>{props.description}</p>
                }
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;