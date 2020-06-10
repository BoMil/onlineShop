import * as React from 'react';
import { Injector } from '@angular/core';
import * as ReactDOM from 'react-dom';
import AdminPage from './components/admin-page';
/**
 * Complete setup for angular-react aplication
 * you can find here https://github.com/qubiack/angular-reactjs
 */

interface IReactBidirectionalApp {
    injector: Injector;
}

class ReactBidirectionalApp extends React.Component<IReactBidirectionalApp, any> {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div className={'renderer'}>
                <AdminPage></AdminPage>
            </div>
        );
    }
}

export class ReactBidirectionalApplication {

    static initialize(
      containerId: string,
      injector: Injector
    ) {
      ReactDOM.render(
        <ReactBidirectionalApp injector={injector}/>,
        document.getElementById(containerId)
      );
    }
}
