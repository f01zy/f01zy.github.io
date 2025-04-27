import { store } from "@/store";
import { ReactNode } from "react";
import { Provider } from "react-redux"

const Providers = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <Provider store={store}>
    {children}
  </Provider>
}

export default Providers;