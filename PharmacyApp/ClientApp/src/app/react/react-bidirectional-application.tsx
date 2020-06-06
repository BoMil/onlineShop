import * as React from 'react';
import { Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHero } from '../model/hero';
import * as ReactDOM from 'react-dom';
import ReactBidirectionalHero from './react-bidirectional-hero';

interface IReactBidirectionalApp {
    injector: Injector;
    heroes$: BehaviorSubject<IHero[]>; // We use this interface to grab RxJS object
  }

  class ReactBidirectionalApp extends React.Component<IReactBidirectionalApp, any> {
    constructor(props) {
      super(props);

      this.state = {
        heroes$: this.props.heroes$ // and we pass this data into ReactBidirectionalHero component
      };
    }

    render() {
      return (
        <div className={'renderer'}>
          <h2>ReactJS component (bidirectional data binding): </h2>
          <ReactBidirectionalHero heroes$={this.state.heroes$}/>
        </div>
      );
    }
  }

  export class ReactBidirectionalApplication {

    static initialize(
      containerId: string,
      injector: Injector,
      heroes$: BehaviorSubject<IHero[]>, // This is necessary to get RxJS object
    ) {
      ReactDOM.render(
        <ReactBidirectionalApp injector={injector} heroes$={heroes$}/>,
        document.getElementById(containerId)
      );
    }
  }
