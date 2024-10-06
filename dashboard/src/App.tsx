import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";

import SignIn from "./pages/auth/SignIn";

const App = () => {
    return (
        <Fragment>
            <SignIn />
            <ToastContainer />
        </Fragment>
    );
};

export default App;
