import React, { Component } from "react";
import ElementWrapper from "./hoc/Wrapper/Wrapper";
import Layout from "./hoc/Layout/Layout";
import {Route, Routes} from 'react-router-dom'
import { Navigate } from "react-router";

import Quiz from "./containers/Quiz/Quiz";
import QuizList from "./containers/QuizList/QuizList";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import Auth from "./containers/Auth/Auth";
import { connect } from "react-redux";
import Logout from "./components/Logout/Logout";
import { autoLogin } from "./store/actions/auth";
import withRouter from "./hoc/WithRouter/WithRouter";


class App extends Component {
  
  componentDidMount() {
    this.props.autoLogin()
  }

  render() { 
    let routes = (
      <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/quiz/:id" element={<ElementWrapper {...{Component: Quiz}} />} />
          <Route path="/" exact element={<QuizList />} />
          <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    )
  
      if (this.props.isAuthenticated) {
        routes = (
            <Routes>
              <Route path="/quiz-creator" element={<QuizCreator />} />
              <Route path="/quiz/:id" element={<ElementWrapper {...{Component: Quiz}} />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/" exact element={<QuizList />} />
              <Route path="/auth" element={<Navigate to="/" />} />
            </Routes>     
        )
      }
    return (
      <Layout>
        { routes }
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
