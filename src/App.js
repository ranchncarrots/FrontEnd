import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'dva/router';
import AppInsightsProvider from './azure-app-insights';

import {
  // General
  NotFound404,
  Maintenance,
  SignIn,
  AuthCallback,
  // Admin
  Admin,
  // Instructor
  MyCourses,
  NewCourse,
  CourseSettings,
  CourseAnalytics,
  InstPlaylist,
  MediaSettings,
  NewPlaylist,
  Embed,
  EPub,
  // Student
  Home,
  Course,
  Search,
  History,
  Analytics,
  Watch,
  // ComponentAPI,
  Example
} from './screens';

import './App.css';
// import 'braft-editor/dist/index.css';
import { altEl } from './layout';
import { user, env } from './utils';
import { connect } from 'dva';

class App extends React.Component {
  componentDidMount() {
    user.validate();
  }

  render() {
    const isAdminOrInstructor = user.isInstructor || user.isAdmin;

    const adminRoute = altEl();

    // return <Maintenance />
    return (
      <AppInsightsProvider>
        <Switch>
          
          <Route exact path={user.callbackPaths} component={AuthCallback} />
          <Route exact path="/sign-in" component={SignIn} />

          {/* Admin */}
          {user.isAdmin && <Route path="/admin" component={Admin} />}

          {/* Instructor */}
          <Route exact path="/instructor" render={() => <Redirect to="/instructor/my-courses" />} />
          {
            isAdminOrInstructor
            &&
            <Route exact path="/instructor/my-courses" component={MyCourses} />
          }
          {
            isAdminOrInstructor
            &&
            <Route exact path="/instructor/new-course" component={NewCourse} />
          }
          {
            isAdminOrInstructor
            &&
            <Route exact path="/offering/:id/settings" component={CourseSettings} />
          }
          {
            isAdminOrInstructor
            &&
            <Route exact path="/offering/:id/analytics" component={CourseAnalytics} />
          }
          {
            isAdminOrInstructor
            &&
            <Route exact path="/offering/:id/new-playlist" component={NewPlaylist} />
          }
          {
            isAdminOrInstructor
            &&
            <Route path="/media-settings/:id" component={MediaSettings} />
          }

          {
            isAdminOrInstructor
            &&
            <Route path="/epub/:id" component={EPub} />
          }

          {/* Student */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" render={() => <Redirect to="/" />} />
          <Route exact path="/offering/:id" component={Course} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/history" component={History} />
          <Route exact path="/personal-analytics" component={Analytics} />
          <Route exact path="/video" component={Watch} />
          <Route exact path="/embed/:id" component={Embed} />
          <Route path="/playlist/:id" component={InstPlaylist} />

          <Route path="/404" component={NotFound404} />

          {
            env.dev
            &&
            <Route exact path="/example" component={Example} />
          }

          <Route component={NotFound404} />
          {/* <Route exact path="/docs/component-api/:type" component={ComponentAPI} /> */}
        </Switch>
      </AppInsightsProvider>
    );
  }
}

export default withRouter(App);
