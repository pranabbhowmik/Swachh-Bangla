// src/hooks/useAuth.js
import axios from "axios";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });
      setLoading(false);
      return res.data; // returns { user, token }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Login failed");
      throw err;
    }
  };

  const register = async (name, email, password) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/api/auth/registion`, {
        name,
        email,
        password,
      });
      setLoading(false);
      return res.data; // returns { user, token }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Registration failed");
      throw err;
    }
  };

  return { login, register, loading, error };
};

export default useAuth;
