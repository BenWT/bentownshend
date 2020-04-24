import React from 'react'
import cx from 'classnames'
import is from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from './style'
import { Link } from 'react-router-dom'

const InProgress = ({
    classes
}) => (
    <div className={cx(classes.container)}>
        <div className={cx(classes.section)}>
            <h1 className={cx(classes.logo)}>
                <div>EDY</div>
                <div> Creative</div>
            </h1>
            <h4 className={cx(classes.subtitle)}>designer/maker</h4>
        </div>
        <div className={cx(classes.section)}>
            <h2 className={cx(classes.white)}>Welcome</h2>
            <p>This site is currently in the pickle...</p>
            <p>But it will be polished and ready to run very soon.</p>

            
        </div>

        <div className={cx(classes.icons)}>
            {/* <a href="http://instagram.com/edycreative" target="_blank">
                <FontAwesomeIcon icon={['fab', 'instagram']} color="white" />
            </a> */}
            {/* <a href="http://instagram.com/edycreative">
                <FontAwesomeIcon icon='envelope' color="white" />
            </a> */}
        </div>
    </div>
)

export default is(style)(InProgress)