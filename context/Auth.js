import React, {useState, useEffect, createContext} from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from "../config";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [state, setState] = useState({
        user: {},
        token: ""
    });

    //config axios
    axios.defaults.baseURL = API;

    useEffect(() => {
      const loadFromAsyncStorage = async() => {
          try {
            let data = await AsyncStorage.getItem('@auth');
            console.log("AUTH",data);
            const as = JSON.parse(data);
            setState({...state, user: as.user, token: as.token});
          } catch (error) {
              console.log(error);
          }
      }

      loadFromAsyncStorage();
    }, [])

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    )
    
}

export {AuthContext, AuthProvider};


