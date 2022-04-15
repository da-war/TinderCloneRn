import {Text, View} from 'react-native';
import React from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
