import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const url = isSignUp
        ? "http://localhost:5000/api/auth/register" // ✅ Updated API URL
        : "http://localhost:5000/api/auth/login";

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // ✅ Check for a valid JSON response
      if (!response.ok) {
        const text = await response.text();
        try {
          const errorData = JSON.parse(text);
          throw new Error(errorData.message || "Something went wrong!");
        } catch {
          throw new Error("Server returned an invalid response. Check backend logs.");
        }
      }

      const data = await response.json();
      console.log("🔍 API Response:", data);

      if (isSignUp) {
        alert("✅ Account Created Successfully!");
        setIsSignUp(false);
      } else {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/home");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <div className="card p-4 shadow-lg text-center" style={{ width: "25rem" }}>
        <h1 className="mb-4"> eBinder</h1>
        <h3 className="mb-3">{isSignUp ? "Create Account" : "Sign In"}</h3>

        {error && <p className="text-danger">{error}</p>}

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-3">
              <input
                type="text"
                name="username"
                placeholder="User Name"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
            {isLoading ? "Processing..." : isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="mt-3">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsSignUp(!isSignUp)} className="btn btn-link p-0">
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
