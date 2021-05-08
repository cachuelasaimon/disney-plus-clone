import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkUserSession } from "../redux/actions";
const mapState = ({ user }) => ({
  user: user.user,
});

export const WithAuth = (props) => {
  const { user } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user]);
  return user && props.children;
};
