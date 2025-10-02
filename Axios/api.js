import axios from "axios";

// Tạo instance Axios
const api = axios.create({
  baseURL: "http://localhost:5000/api", // API gốc
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer your_token_here" // Nếu có token
  }
});

// Service quản lý API Users
const UserService = {
  // GET: lấy danh sách user
  getAll: async (page = 1, limit = 10) => {
    return api.get("/users", { params: { page, limit } });
  },

  // GET: lấy user theo ID
  getById: async (id) => {
    return api.get(`/users/${id}`);
  },

  // POST: thêm user mới
  create: async (data) => {
    return api.post("/users", data);
  },

  // PUT: cập nhật user
  update: async (id, data) => {
    return api.put(`/users/${id}`, data);
  },

  // DELETE: xóa user
  remove: async (id) => {
    return api.delete(`/users/${id}`);
  }
};

export default UserService;
