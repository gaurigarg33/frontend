import Day26Login from "./Day26Form";
import { Provider } from 'react-redux'
import store from "./Day26Store";

function Day26() {
    return (
        <Provider store={store}>
            <div className="App">
                
                <Day26Login/>
            </div>
        </Provider>

    );
}

export default Day26;