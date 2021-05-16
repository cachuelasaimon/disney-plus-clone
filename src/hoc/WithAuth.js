import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "../redux/actions";
const mapState = ({ auth }) => ({
  currentUser: auth.currentUser,
});

export default function WithAuth(props) {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  useEffect(() => {
    if (!currentUser) {
      history.push("/");
    }
  }, [currentUser]);

  return currentUser && <>{props.children}</>;
}
