import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import type { User } from "firebase/auth";

interface AuthContextType {
  currentUser: User | null;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
} as AuthContextType);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const currentUserFromStorage = JSON.parse(
    localStorage.getItem("currentUser") || "{}"
  );
  const [currentUser, setCurrentUser] = useState<User | null>(
    currentUserFromStorage
  );

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
