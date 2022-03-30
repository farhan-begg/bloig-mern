import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./components/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/post/Post";
import SinglePost from "./components/singlePost/SinglePost";


function App() {

  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route
          path="/"
          exact={true}
          element={<Home />}
        />
      </Routes>

      <Routes>
        <Route
          path="/login"
          exact={true}

          element={user ? <Home /> : <Login />}
        />
      </Routes>

      <Routes>
        <Route
          path="/register"
          exact={true}

          element={user ? <Home /> : <Register />}
        />
      </Routes>

      <Routes>
        <Route
          path="/post/:postid"
          exact={true}
          element={<Single />}
        />
      </Routes>

      <Routes>
        <Route
          path="/settings"
          exact={true}
          element={user ? <Settings /> : <Register />}
        />
      </Routes>

      <Routes>
        <Route
          path="/write"
          exact={true}
          element={user ? <Write /> : <Register />}
        />
      </Routes>
    </Router>


  );
}

export default App;
