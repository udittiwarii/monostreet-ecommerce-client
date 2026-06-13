import { useEffect, useState } from "react";

import Loader from "./components/ui/Loader";

import AppRoutes from "./routes/AppRoutes";


import { useDispatch }
  from "react-redux";

import {
  setUser,
  logoutUserState,
  setLoading,
} from "./redux/slices/authSlice";

import {
  getCurrentUser,
} from "./services/auth/authApi";

const App = () => {

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const loadUser = async () => {

      try {

        const data =
          await getCurrentUser();

        dispatch(
          setUser(data.user)
        );

      } catch (error) {

        console.log(
          "No active session"
        );
        dispatch(
          logoutUserState()
        );
      } finally {

        dispatch(
          setLoading(false)
        );
      }
    };

    loadUser();

  }, []);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return <AppRoutes />;
};

export default App;