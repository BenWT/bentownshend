import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import is from 'react-jss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons'

import services from '../../services'

import style from './style'

import InProgress from '../InProgress'

library.add(fas, fab, faInstagram)

const Root = ({
    classes,
    ...props,
}) =>  (
    <Switch>
        <Route path="*" render={ ({ match }) =>
            <InProgress {...{ ...props }} />
        } />
    </Switch>
)

export default services(is(style)(Root))