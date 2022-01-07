export const tokenFetch = async (setUser) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
      });
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

export const loginFetch = async (email, password, setUser) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      setUser(data.user);
      localStorage.setItem("myToken", data.token);
    } catch (error) {
      console.log(error);
    }
  };

  export const signUpFetch = async (username, email, password, setUser) => {
    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);
      setUser(data.user);
      localStorage.setItem("myToken", data.token);
    } catch (error) {
      console.log(error);
    }
  };