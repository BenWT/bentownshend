import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import is from 'react-jss'

import { queries } from '../../../../../../../graphql'

import style from './style'

// TODO: Build ImageRows PostArchive component
const ImageRows = ({
    content,
}) => (
    <div className={cx('container')}>
        <h3>ImageRows Post Archive</h3>
        {/* <pre>{ JSON.stringify(content, false, 4) }</pre> */}
    </div>
)

export default is(style)(ImageRows)