import {
  useEffect,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import refreshCart
  from "../utils/refreshCart";

const useInitializeCart =
  () => {

    const dispatch =
      useDispatch();

    const {
      isAuthenticated
    } = useSelector(
      state =>
        state.auth
    );

    useEffect(() => {

      if (
        !isAuthenticated
      ) return;

      refreshCart(
        dispatch
      );

    }, [
      isAuthenticated
    ]);
  };

export default useInitializeCart;