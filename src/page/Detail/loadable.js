import React from 'react'
import Loadable from 'react-loadable';
import Loading from './my-loading-component';
import { withRouter } from 'react-router'


const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: Loading,
});

export default (props) => <LoadableComponent key={props.match.params.id}/>
