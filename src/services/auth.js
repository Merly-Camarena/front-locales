import axios from "axios";
const API_URL = "http://localhost:3000/auth";

export const login = async (email, password) =>{
    const res = await axios.post(`${API_URL}/login`, { email, password} );
    console.log("📥 login respuesta:", res.data); 
    return res.data; 
};

export const register = async (token, email, password, role) => {
    const res = await axios.post(
        `${API_URL}/register`,
        {email, password, role},
        {
            headers: { Authorization: `Bearer ${token}`},
        }
    );
    return res.data;
}