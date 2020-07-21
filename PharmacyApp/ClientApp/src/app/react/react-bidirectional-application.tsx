import * as React from 'react';
import { Injector } from '@angular/core';
import * as ReactDOM from 'react-dom';
import AdminPage from './components/admin-page';
import { BehaviorSubject } from 'rxjs';
import { Modal } from '../angular/_interfaces/modal';
/**
 * Complete setup for angular-react aplication
 * you can find here https://github.com/qubiack/angular-reactjs
 */

interface IReactBidirectionalApp {
    injector: Injector;
    modal$: BehaviorSubject<Modal>;
}

class ReactBidirectionalApp extends React.Component<IReactBidirectionalApp, any> {
    constructor(props) {
        super(props);
        this.state = { modal$: this.props.modal$ };
    }

    render() {
        return (
            <div className={'renderer'}>
                <AdminPage modal$={this.state.modal$}></AdminPage>
            </div>
        );
    }
}

export class ReactBidirectionalApplication {

    static initialize(
      containerId: string,
      injector: Injector,
      modal$: BehaviorSubject<Modal>
    ) {
      ReactDOM.render(
        <ReactBidirectionalApp injector={injector} modal$={modal$}/>,
        document.getElementById(containerId)
      );
    }
}
