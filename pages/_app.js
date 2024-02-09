import "bootstrap/dist/css/bootstrap.min.css";

import LayoutPage from "@/component/layout";
import "@/styles/my-sass.scss";
import "@/styles/style.css";
// import { UserProvider } from "@/context/userContext";
import { wrapper } from "@/utils/store";
import { Provider, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const WrappedApp = wrapper.withRedux(({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  const store = useStore();
  return getLayout (
    <Provider store={store}>
      <PersistGate loading={null} persistor={store.__persistor}>
          <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
});

export default WrappedApp;
