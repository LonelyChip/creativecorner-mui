import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/Signin";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Chats from "./components/Chats";
import Register from "./components/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRoute = ({ children }: any) => {
    if (currentUser === null) {
      return <Navigate to="/signin" />;
    } else return children;
  };
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chats"
            element={
              <ProtectedRoute>
                <Chats />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
