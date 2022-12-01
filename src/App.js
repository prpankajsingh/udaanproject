import Media from "react-media";
import { useEffect } from "react";
import MainPage from "./Pages/Main Page/MainPage";
import { Provider, useDispatch } from "react-redux";
import SignUpPages from "./Pages/SignUPPage/SignUpPages";
import { store } from "./Components/Store Features/Store";
import LandingPage from "./Pages/Landing Page/LandingPage";
import Header from "./Components/LandingPage/Header/Header";
import { auth } from "./Components/Store Features/firebase";
import AboutUs from "./Components/LandingPage/About/AboutUs";
import { login, logout } from "./Components/Store Features/userSlice";
import MobileHeader from "./Components/LandingPage/Header/MobileHeader";
import NewsPage from "./Components/LandingPage/News Section All/NewsPage";
import DownloadTool from "./Components/LandingPage/Installation/DownloadTool";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MediaCoverage from "./Components/LandingPage/MediaCoverage/MediaCoverage";
import TechnicalModal from "./Components/LandingPage/Teams Modal/TechnicalModal";
import PublicationModal from "./Components/LandingPage/Teams Modal/PublicationModal";
import InstallationGuide from "./Components/LandingPage/Installation/InstallationGuide";
import PublicationsRelatedProjects from "./Components/LandingPage/Publications/PublicationsRelatedProjects";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            name: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  });
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={LandingPage} exact />
            {/* <Route path="/SignUp" component={SignUpPages} exact /> */}
            {/* <Route path="/SignIn" component={SignUpPages} exact /> */}
            <Route path="/Welcome" component={SignUpPages} exact />
            <Route path="/News" exact>
              <Media query={{ maxWidth: 800 }}>
                {(matches) =>
                  matches ? (
                    <>
                      <MobileHeader />
                    </>
                  ) : (
                    <>
                      <Header />
                    </>
                  )
                }
              </Media>
              <NewsPage />
            </Route>
            <Route path="/Dashboard" component={MainPage} exact />
            <Route path="/Downloads" component={MainPage} exact />
            <Route path="/GaneshArnaal" exact>
              <Media query={{ maxWidth: 800 }}>
                {(matches) =>
                  matches ? (
                    <>
                      <MobileHeader />
                    </>
                  ) : (
                    <>
                      <Header />
                    </>
                  )
                }
              </Media>
              <TechnicalModal />
            </Route>
            <Route path="/SomayajiArnalPublication" exact>
              <Media query={{ maxWidth: 800 }}>
                {(matches) =>
                  matches ? (
                    <>
                      <MobileHeader />
                    </>
                  ) : (
                    <>
                      <Header />
                    </>
                  )
                }
              </Media>
              <PublicationModal />
            </Route>
            <Route path="/CreateProject" component={MainPage} exact />
            <Route path="/CreateProject" exact component={MainPage} />
            <Route path="/Github" exact component={MainPage} />
            <Route path="/SubTask" exact component={MainPage} />
            <Route path="/AboutUs" exact>
              <Media query={{ maxWidth: 800 }}>
                {(matches) =>
                  matches ? (
                    <>
                      <MobileHeader />
                    </>
                  ) : (
                    <>
                      <Header />
                    </>
                  )
                }
              </Media>
              <AboutUs />
            </Route>
            <Route path="/Publications" exact>
              <Media query={{ maxWidth: 800 }}>
                {(matches) =>
                  matches ? (
                    <>
                      <MobileHeader />
                    </>
                  ) : (
                    <>
                      <Header />
                    </>
                  )
                }
              </Media>
              <PublicationsRelatedProjects />
            </Route>
            <Route path="/InstallationGuide" exact>
              <Media query={{ maxWidth: 800 }}>
                {(matches) =>
                  matches ? (
                    <>
                      <MobileHeader />
                    </>
                  ) : (
                    <>
                      <Header />
                    </>
                  )
                }
              </Media>
              <InstallationGuide />
            </Route>
            <Route path="/DownloadTool" exact>
              <Media query={{ maxWidth: 800 }}>
                {(matches) =>
                  matches ? (
                    <>
                      <MobileHeader />
                    </>
                  ) : (
                    <>
                      <Header />
                    </>
                  )
                }
              </Media>
              <DownloadTool />
            </Route>
            <Route path="/MediaCoverage" exact>
              <Media query={{ maxWidth: 800 }}>
                {(matches) =>
                  matches ? (
                    <>
                      <MobileHeader />
                    </>
                  ) : (
                    <>
                      <Header />
                    </>
                  )
                }
              </Media>
              <MediaCoverage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
