import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Upload from './layouts/pages/upload/Upload';
import About from './layouts/pages/about/About';
import Settings from './layouts/pages/settings/Settings';
import JobStatus from './layouts/pages/status/JobStatus';
import Results from './layouts/pages/results/Results';
import NotFound from './layouts/pages/notFound/NotFound';
import AppPages from './AppPages';

function AppRouter() {
    return (
        <Switch>
            <Route exact path={AppPages.UPLOAD} component={Upload} />
            <Route exact path={AppPages.SETTINGS} component={Settings} />
            <Route path={AppPages.STATUS.route} component={JobStatus} />
            <Route path={AppPages.RESULTS.route} component={Results} />
            <Route exact path={AppPages.ABOUT} component={About} />
            <Route exact path={AppPages.NOT_FOUND} component={NotFound} />
            <Redirect to={AppPages.UPLOAD} />
        </Switch>
    );
}

export default AppRouter;
