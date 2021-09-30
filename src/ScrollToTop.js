import { useEffect } from "react";
import { withRouter } from "react-router";

function ScrollToTop({ history }) {
    useEffect(() => {
        const listening = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            listening();
        }
    }, []);

    return (null);
}

export default withRouter(ScrollToTop);