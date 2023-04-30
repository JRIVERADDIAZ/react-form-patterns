import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

import logo from '../logo.svg';

import DinamicForm from '../forms/pages/DinamicForm';

export const Navigation = () => (
    <Router>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to="/Home" activeClassName="nav-active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="nav-active">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" activeClassName="nav-active">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" activeClassName="nav-active"> Register Formik </NavLink>
                    </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/Home">
                    <h1>Home</h1>
                </Route>
                <Route path="/about">
                    <h1>About</h1>
                </Route>
                <Route path="/users">
                    <h1>Users</h1>
                </Route>
                <Route path="/register">
                    <DinamicForm />
                </Route>
            </Switch>
        </div>
    </Router>
)