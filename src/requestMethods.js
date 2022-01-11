export const TokenFetch = async (setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}users/user`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    setUser({
      username: data.user,
      userId: data.userId,
      email: data.email
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginFetch = async (email, password, setUser, setLoggedIn,setErrorMessage) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}users/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    setUser({
      username: data.user,
      userId: data.userId,
      email: data.email
    });
    console.log(data)

    if(data === "wrong credentials") {
      setErrorMessage("Incorrect email")
    } else if (data === "wrong credentials (password)"){
      setErrorMessage("Incorrect password")
    } else {
      setLoggedIn(true)
    }

    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const signUpFetch = async (username, email, password, setUser, setLoggedIn, setErrorMessage) => {
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
    setUser({
      username: data.user,
      userId: data.userId,
      email: data.email
    });
     if(data === "user already exists with that email") {
      setErrorMessage("User already exists with that email")
    } else {
      setLoggedIn(true)
    }

    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
    setErrorMessage("User already exists with that email")
  }
};

export const getProductFetch = async (setFetchedProductInfo) => {
  try {
    const res = await fetch("http://localhost:5000/products/", {
      method: "GET",
      headers: { "Authorization": `Bearer ${localStorage.getItem("myToken")}` }
    })
    const data = await res.json()
    console.log(data);
    setFetchedProductInfo(data)



  } catch (error) {
    console.log(error);
  }
}

export const UploadProductFetch = async (productData) => {
  try {
      const res = await fetch("http://localhost:5000/products/add", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
              userId: productData.userId,
              title: productData.title,
              desc: productData.desc,
              img: productData.img,
              categories: productData.categories,
              color: productData.color,
              price: productData.price

          })

      })
      const data = await res.json()
   console.log("product uploaded", data);

  }
  catch (error) {
      console.log(error);
  }
}