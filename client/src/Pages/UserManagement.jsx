import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axiosInstance";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/admin/getAllUsers", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Failed to fetch users");
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axiosInstance.delete(`/api/v1/admin/delete/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUsers(users.filter((user) => user._id !== userId));
        toast.success("User deleted successfully");
      } catch (error) {
        toast.error("Failed to delete user");
        console.error(error);
      }
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">👤 User Management</h1>
        <Link to="/admin/users/create">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition text-sm sm:text-base">
            Create User/Admin
          </button>
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search by name..."
        className="w-full sm:w-1/3 px-4 py-2 mb-4 rounded-md bg-base-200 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <div className="text-center py-10 text-white">Loading users...</div>
      ) : (
        <>
          {/* Table layout for md and up */}
          <div className="hidden md:block overflow-x-auto">
            <table className="table w-full bg-base-100 shadow-md rounded-lg text-sm sm:text-base">
              <thead>
                <tr className="bg-base-300 text-base-content">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user._id} className="hover">
                    <td className="text-white">{user.name}</td>
                    <td className="text-white">{user.email}</td>
                    <td className="text-white">{user.role}</td>
                    <td>
                      <div className="flex gap-2">
                        <Link
                          to={`/admin/users/edit/${user._id}`}
                          className="px-3 py-1 bg-blue-700 hover:bg-blue-800 text-white text-sm rounded-md transition"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="px-3 py-1 bg-red-700 hover:bg-red-800 text-white text-sm rounded-md transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-6 text-gray-400">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Card layout for small screens */}
          <div className="md:hidden space-y-4">
            {filteredUsers.length === 0 ? (
              <p className="text-center text-gray-400">No users found.</p>
            ) : (
              filteredUsers.map((user) => (
                <div key={user._id} className="bg-base-100 rounded-lg p-4 shadow-md text-white">
                  <h2 className="text-lg font-semibold">{user.name}</h2>
                  <p className="text-sm text-gray-300">{user.email}</p>
                  <p className="text-sm text-gray-300">Role: {user.role}</p>
                  <div className="flex gap-2 mt-3">
                    <Link
                      to={`/admin/users/edit/${user._id}`}
                      className="flex-1 text-center bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 text-sm rounded-md transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="flex-1 text-center bg-red-700 hover:bg-red-800 text-white px-3 py-1 text-sm rounded-md transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserManagement;
