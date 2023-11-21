import React__default from 'react';

const AppContext = React__default.createContext({ clientRoutes: [] });
function useAppData() {
  return React__default.useContext(AppContext);
}

export { AppContext as A, useAppData as u };
