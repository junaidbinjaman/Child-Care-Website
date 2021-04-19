import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
    let auth = localStorage.getItem("User Email");
    return ( <
        Route {...rest }
        render = {
            ({ location }) =>
            auth ? (
                children
            ) : ( <
                Redirect to = {
                    {
                        pathname: "/login",
                        state: { from: location },
                    }
                }
                />
            )
        }
        />
    );
};

export default PrivateRoute;