import React from "react";

const PortContext = React.createContext();

export const ContextProvider = PortContext.Provider;
export const ContextConsumer = PortContext.Consumer;

export default PortContext;