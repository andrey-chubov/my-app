import { Provider } from "react-redux";

import { setupStore } from "./store/store";
import { Routing } from "./router/routes";

export default function App() {
  return (
    <Provider store={setupStore()}>
      <Routing />
    </Provider>
  );
}
