import { createContext, useContext, useState } from "react";

const Authcontext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState({
    userId: 1,
    fullName: "Tung",
    email: "tung@gmail.com",
    avatar:
      "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
  const value = { user, setUser };

  return <Authcontext.Provider value={value} {...props}></Authcontext.Provider>;
}

function useAuth() {
  const context = useContext(Authcontext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
