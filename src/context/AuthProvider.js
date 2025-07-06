// // // // "use client";

// // // // import { createContext, useContext, useEffect, useState } from "react";
// // // // import { useRouter } from "next/navigation";

// // // // const AuthContext = createContext();

// // // // export const AuthProvider = ({ children }) => {
// // // //   const router = useRouter();
// // // //   const [user, setUser] = useState(null);
// // // //   const [token, setToken] = useState(() => {
// // // //     if (typeof window !== "undefined") {
// // // //       const storedToken = localStorage.getItem("token");
// // // //       console.log("🔄 Loading token from localStorage:", storedToken);
// // // //       return storedToken || null;
// // // //     }
// // // //     return null;
// // // //   });

// // // //   // Set user if token exists on mount
// // // //   useEffect(() => {
// // // //     if (token) {
// // // //       console.log("🔐 Token exists, setting user...");
// // // //       setUser({ username: "Dr. Arunima" }); // Replace with actual fetch if needed
// // // //       localStorage.setItem("token", token);
// // // //     } else {
// // // //       console.log("🚫 No token found, clearing user...");
// // // //       setUser(null);
// // // //       localStorage.removeItem("token");
// // // //     }
// // // //   }, [token]);

// // // //   const login = async (username, password) => {
// // // //     console.log("➡️ Attempting login with:", { username });

// // // //     try {
// // // //       const res = await fetch("http://127.0.0.1:8000/api/token/", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ username, password }),
// // // //       });

// // // //       console.log("📨 Login response status:", res.status);

// // // //       if (!res.ok) {
// // // //         const errorData = await res.json();
// // // //         console.error("❌ Login error data:", errorData);
// // // //         throw new Error("Invalid credentials");
// // // //       }

// // // //       const data = await res.json();
// // // //       console.log("🟢 Login successful, received token:", data.access);

// // // //       setToken(data.access);
// // // //       setUser({ username });
// // // //       router.push("/emr"); // ✅ Redirect after login
// // // //       return true;

// // // //     } catch (err) {
// // // //       console.error("🔥 Login failed:", err.message);
// // // //       alert("Login failed. Check credentials or server.");
// // // //       return false;
// // // //     }
// // // //   };

// // // //   const logout = () => {
// // // //     console.log("🚪 Logging out...");
// // // //     setToken(null);
// // // //     setUser(null);
// // // //     localStorage.removeItem("token");
// // // //     router.push("/login");
// // // //   };

// // // //   return (
// // // //     <AuthContext.Provider value={{ user, token, login, logout }}>
// // // //       {children}
// // // //     </AuthContext.Provider>
// // // //   );
// // // // };

// // // // export const useAuth = () => useContext(AuthContext);

// // // "use client";

// // // import { createContext, useContext, useEffect, useState } from "react";
// // // import { useRouter } from "next/navigation";
// // // import axiosInstance from "@/utils/axiosInstance"; // 🔁 Use custom axios instance

// // // const AuthContext = createContext();

// // // export const AuthProvider = ({ children }) => {
// // //   const router = useRouter();
// // //   const [user, setUser] = useState(null);

// // //   // On mount, check if token exists and set user
// // //   useEffect(() => {
// // //     const access = localStorage.getItem("access");
// // //     if (access) {
// // //       console.log("🔐 Access token found, setting user...");
// // //       setUser({ username: "Dr. Arunima" }); // Replace with real user fetch if needed
// // //     } else {
// // //       console.log("🚫 No access token found, user not authenticated.");
// // //       setUser(null);
// // //     }
// // //   }, []);

// // //   const login = async (username, password) => {
// // //     console.log("➡️ Attempting login with:", { username });

// // //     try {
// // //       const res = await axiosInstance.post("token/", {
// // //         username,
// // //         password,
// // //       });

// // //       const { access, refresh } = res.data;
// // //       console.log("🟢 Login successful. Tokens received.");

// // //       localStorage.setItem("access", access);
// // //       localStorage.setItem("refresh", refresh);

// // //       setUser({ username });
// // //       router.push("/emr"); // Redirect after login
// // //       return true;
// // //     } catch (err) {
// // //       console.error("🔥 Login failed:", err.response?.data || err.message);
// // //       alert("Login failed. Check credentials or server.");
// // //       return false;
// // //     }
// // //   };

// // //   const logout = () => {
// // //     console.log("🚪 Logging out...");
// // //     setUser(null);
// // //     localStorage.removeItem("access");
// // //     localStorage.removeItem("refresh");
// // //     router.push("/login");
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ user, login, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // export const useAuth = () => useContext(AuthContext);

// // "use client";

// // import { createContext, useContext, useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import axiosInstance from "@/utils/axiosInstance";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const router = useRouter();
// //   const [user, setUser] = useState(null); // Will store { username, role }

// //   const fetchUserRole = async () => {
// //     try {
// //       const res = await axiosInstance.get("user-role/");
// //       const { role } = res.data;
// //       return role;
// //     } catch (err) {
// //       console.error("❌ Failed to fetch user role:", err.response?.data || err.message);
// //       return null;
// //     }
// //   };

// //   useEffect(() => {
// //     const access = localStorage.getItem("access");
// //     if (access) {
// //       fetchUserRole().then((role) => {
// //         if (role) {
// //           setUser({ username: "Logged In", role }); // username can be updated if needed
// //         }
// //       });
// //     } else {
// //       setUser(null);
// //     }
// //   }, []);

// //   const login = async (username, password) => {
// //     try {
// //       const res = await axiosInstance.post("token/", { username, password });
// //       const { access, refresh } = res.data;

// //       localStorage.setItem("access", access);
// //       localStorage.setItem("refresh", refresh);

// //       const role = await fetchUserRole();
// //       if (!role) throw new Error("Role fetch failed");

// //       setUser({ username, role });
// //       router.push("/emr"); // ✅ or route based on role if needed
// //       return true;
// //     } catch (err) {
// //       console.error("🔥 Login failed:", err.response?.data || err.message);
// //       alert("Login failed. Check credentials.");
// //       return false;
// //     }
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     localStorage.removeItem("access");
// //     localStorage.removeItem("refresh");
// //     router.push("/login");
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);

// // "use client";

// // import { createContext, useContext, useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import axiosInstance from "@/utils/axiosInstance";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const router = useRouter();

// //   const [user, setUser] = useState(null); // { username, role }
// //   const [token, setToken] = useState(null); // ✅ store access token

// //   const fetchUserRole = async () => {
// //     try {
// //       const res = await axiosInstance.get("user-role/");
// //       return res.data.role;
// //     } catch (err) {
// //       console.error("❌ Failed to fetch user role:", err.response?.data || err.message);
// //       return null;
// //     }
// //   };

// //   useEffect(() => {
// //     const access = localStorage.getItem("access");
// //     if (access) {
// //       setToken(access); // ✅ store token
// //       fetchUserRole().then((role) => {
// //         if (role) {
// //           setUser({ username: "Logged In", role }); // replace username if needed
// //         }
// //       });
// //     } else {
// //       setUser(null);
// //       setToken(null);
// //     }
// //   }, []);

// //   const login = async (username, password) => {
// //     try {
// //       const res = await axiosInstance.post("token/", { username, password });
// //       const { access, refresh } = res.data;

// //       localStorage.setItem("access", access);
// //       localStorage.setItem("refresh", refresh);
// //       setToken(access); // ✅

// //       const role = await fetchUserRole();
// //       if (!role) throw new Error("Role fetch failed");

// //       setUser({ username, role });
// //       router.push("/emr");
// //       return true;
// //     } catch (err) {
// //       console.error("🔥 Login failed:", err.response?.data || err.message);
// //       alert("Login failed. Check credentials.");
// //       return false;
// //     }
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     setToken(null); // ✅ clear token state
// //     localStorage.removeItem("access");
// //     localStorage.removeItem("refresh");
// //     router.push("/login");
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, token, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);

// // ✅ AuthProvider.js
// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axiosInstance from "@/utils/axiosInstance";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const router = useRouter();
//   const [user, setUser] = useState(null); // Will store { username, role }
//   const [loading, setLoading] = useState(true); // ✅ loading state

//   const fetchUserRole = async () => {
//     try {
//       const res = await axiosInstance.get("user-role/");
//       const { role } = res.data;
//       return role;
//     } catch (err) {
//       console.error("❌ Failed to fetch user role:", err.response?.data || err.message);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const access = localStorage.getItem("access");
//     if (access) {
//       fetchUserRole().then((role) => {
//         if (role) setUser({ username: "Logged In", role });
//         setLoading(false);
//       });
//     } else {
//       setUser(null);
//       setLoading(false);
//     }
//   }, []);

//   const login = async (username, password) => {
//     try {
//       const res = await axiosInstance.post("token/", { username, password });
//       const { access, refresh } = res.data;

//       localStorage.setItem("access", access);
//       localStorage.setItem("refresh", refresh);

//       const role = await fetchUserRole();
//       if (!role) throw new Error("Role fetch failed");

//       setUser({ username, role });
//       router.push("/emr");
//       return true;
//     } catch (err) {
//       console.error("🔥 Login failed:", err.response?.data || err.message);
//       alert("Login failed. Check credentials.");
//       return false;
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("access");
//     localStorage.removeItem("refresh");
//     router.push("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null); // { username, role }
  const [loading, setLoading] = useState(true);

  const fetchUserRole = async () => {
    try {
      const res = await axiosInstance.get("user-role/");
      return res.data.role;
    } catch (err) {
      // console.error("❌ Failed to fetch user role:", err.response?.data || err.message);
      return null;
    }
  };

  const refreshUser = async () => {
    const access = localStorage.getItem("access");
    if (!access) {
      setUser(null);
      setLoading(false);
      return;
    }

    const role = await fetchUserRole();
    if (role) {
      const username = localStorage.getItem("username") || "User";
      setUser({ username, role });
    } else {
      setUser(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = async (username, password) => {
    try {
      const res = await axiosInstance.post("token/", { username, password });
      const { access, refresh } = res.data;

      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      localStorage.setItem("username", username); // ✅ Save actual username

      await refreshUser();
      router.push("/emr");
      return true;
    } catch (err) {
      // console.error("🔥 Login failed:", err.response?.data || err.message);
      alert("Login failed. Check credentials.");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
