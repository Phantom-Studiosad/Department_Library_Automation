import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home'
import Blog from './components/blog'
import Support from './components/support';
import Faq from './components/faq';
import Contact from './components/contact';
import Login from './components/login';
import ALogin from './components/alogin';
import Homepage from './components/homepage';
import RHomepage from './components/rhomepage';
import PublishPaper from './components/publishpaper';
import AHomepage from './components/ahomepage';
import GHomepage from './components/ghomepage';
import Book from './components/book';
import BookModify from './components/book_modify';
import BookDelete from './components/book_delete';
import Opac from './components/opac';
import BookDetail from './components/BookDetail';
import User from './components/user';
import UserModify from './components/user_modify';
import UserDelete from './components/user_delete';
import Profilepage from './components/profilepage';


class App extends Component {
  render() {
    return (
      <Router>
         <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/blog" component = {Blog} />
          <Route exact path='/support' component={Support}/>
          <Route exact path='/faq' component={Faq}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/alogin' component={ALogin}/>
          <Route exact path='/homepage/:id' component={Homepage}/>
          <Route exact path='/rhomepage/:id' component={RHomepage}/>
          <Route exact path='/publishpaper' component={PublishPaper}/>
          <Route exact path='/ghomepage' component={GHomepage}/>
          <Route exact path='/ahomepage' component={AHomepage}/>
          <Route exact path='/book' component={Book}/>
          <Route path='/bookdetails/:book'
						render={(routerProps) => {
							return <BookDetail match={routerProps.match} />;
						}}
					/>
          <Route exact path='/opac' component={Opac}/>
          <Route exact path='/book_modify' component={BookModify}/>
          <Route exact path='/book_delete' component={BookDelete}/>
          <Route exact path='/user' component={User}/>
          <Route exact path='/user_modify' component={UserModify}/>
          <Route exact path='/user_delete' component={UserDelete}/>
          <Route exact path='/profilepage' component={Profilepage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

