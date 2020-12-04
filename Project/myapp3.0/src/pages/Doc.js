import React, { useEffect } from 'react'
import {
    NavLink, Route, Redirect,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
    withRouter
} from 'react-router-dom'
import {NavBar,Icon} from 'antd-mobile'
import './doc.css';
import { RouteWithSubRoute } from '../App';
const DocContent = (props) => {
    return <h1>
        { props.match.params.type }
    </h1>
}
const Doc = (props) => {
    console.log(props);
    return (
        <div className='doc'>
            <div className="content">
                {
                    props.routes.map((route)=><RouteWithSubRoute {...route}/>)
                }
                <Redirect from='/doc' to='/doc/core' />
            </div>
            <ol>
                <li><NavLink to='/doc/core'>核心概念</NavLink></li>
                <li><NavLink to='/doc/guide'>高级指引</NavLink></li>
                <li><NavLink to='/doc/api'>API</NavLink></li>
                <li><NavLink to='/doc/hooks'>Hooks</NavLink></li>
            </ol>
        </div>
    )
}

export default withRouter(Doc);
