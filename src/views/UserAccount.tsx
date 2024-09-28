import { useState, useEffect, SyntheticEvent } from "react";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import { Link, useNavigate } from "react-router-dom";
import RoutePaths from "../config";
import { toggleLinkClass, User, removeItem } from "../Utils/Generals";
import { useUpdateUserMutation } from "../store/apiquery/usersApiSlice";
import Spinner from "../components/Spinner";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import LoadingButton from "../components/LoadingButton";
import { HandleResult } from "../components/HandleResult";
import Swal from "sweetalert2";
import { useGetCommandQuery } from "../store/apiquery/CommandApiSlice";
import { API } from "../Utils/constant";
import { setToken } from "../Utils/helpers";
import { googleLogout } from "@react-oauth/google";
import { logoutCurrentUser } from "../store/userSlice";

export const UserSignIn: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Define the type for form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const value = {
        email: email,
        password: password,
      };
      // console.log(value);
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // Set the token
        setToken(data.jwt);

        // Optionally, set the user data
        // setUser(data.user);

        window.alert("Login successful");

        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <div style={{ width: "300px" }}>
        <h2>Sign In</h2>
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>
            {error} <button onClick={() => setError("")}>x</button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
            }}
          >
            Login {isLoading && <span>Loading...</span>}
          </button>
        </form>

        <p style={{ marginTop: "10px", color: "black" }}>
          New to Social Cards? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export const UserDashboard = () => {
  return (
    <div className="user-dashboard p-3 border text-black">
      <h3>Dashboard</h3>
      <p className="opacity-75">
        From your account dashboard you can view your recent orders, manage your
        shipping and billing addresses, and edit your password and account
        details
      </p>
    </div>
  );
};

export const UserOrders = () => {
  const user: User = useAppSelector((state) => state.user);
  // let content: React.ReactHTMLElement<HTMLElement> = <></>;
  const { data: commands, isLoading } = useGetCommandQuery(user.id);

  // useEffect(() => {

  //     commands ? commands.data.map((command: any) => {
  //         content = command
  //     }) : null;

  // }, [commands])

  return (
    <div className="user-orders p-3 border text-black">
      <h3>Orders</h3>
      <div className="table-responsive">
        {!isLoading ? (
          <table className="table table-default table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">Commande</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? <Spinner /> : JSON.stringify(commands.data)}
            </tbody>
          </table>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export const LogOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = (e: SyntheticEvent) => {
    e.preventDefault();

    // SweetAlert2 confirmation modal
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, proceed with logout actions
        googleLogout();
        localStorage.removeItem("GoogleJwt");

        // Dispatch the logout action
        dispatch(logoutCurrentUser());

        // Optionally navigate to the home or login page after logging out
        navigate(RoutePaths.home);
      }
    });
  };

  return (
    <a href="#" className="d-block p-3 text-black" onClick={handleLogOut}>
      Logout<i className="bi bi-person-slash float-end"></i>
    </a>
  );
};

export const UserAddress = () => {
  const user: User = useAppSelector((state) => state.user);

  return (
    <div className="user-address p-3 border text-black">
      <h3>Billing Address</h3>
      <div className="opacity-75">
        <h6>{user.address}</h6>
        <h6>
          <span className="fw-bold">Mobile:</span>(229) {user.phone}
        </h6>
      </div>
    </div>
  );
};

export const UserDetails = () => {
  const user: User = useAppSelector((state) => state.user);
  const [data, setData] = useState(user);
  const [updateUser, result] = useUpdateUserMutation();

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    updateUser(data);
  };

  return (
    <div className="user-edit-details p-3 border text-black">
      <h3>Account Details</h3>
      <form
        action=""
        method="post"
        className="checkout-service p-3"
        onSubmit={handleSubmit}
      >
        <div className="d-flex gap-2">
          <label className="w-50">
            <span>First Name</span>
            <input
              type="text"
              name="firstname"
              className="form-control w-100 rounded-0 p-2"
              value={data.firstname}
              onChange={handleChange}
            />
          </label>
          <label className="w-50">
            <span>Last Name</span>
            <input
              type="text"
              name="lastname"
              className="form-control w-100 rounded-0 p-2"
              value={data.lastname}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="my-4">
          <label className="w-100">
            <span>Email</span>
            <input
              type="email"
              name="email"
              className="form-control w-100 rounded-0 p-2"
              value={data.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="w-100">
            <span>Address</span>
            <input
              type="text"
              name="address"
              className="form-control w-100 rounded-0 p-2"
              value={data.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="my-4">
          <label className="w-100">
            <span>Password</span>
            <input
              type="password"
              name="password"
              className="form-control w-100 rounded-0 p-2"
              value={user.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="my-4">
          <HandleResult result={result} />
        </div>
        <LoadingButton loadingState={result.isLoading}>
          <div className="mt-4">
            <button type="submit" className="fd-btn border-0 w-100 text-center">
              SAVE NOW
            </button>
          </div>
        </LoadingButton>
      </form>
    </div>
  );
};

const UserAccount = ({
  currentComponent = <UserDashboard />,
}: {
  currentComponent?: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutUser = (e: SyntheticEvent) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure to logout ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout it!",
    }).then((r) => {
      if (r.isConfirmed) {
        removeItem(RoutePaths.token);
        removeItem("loginjwt");
        // dispatch(logoutCurrentUser)
        navigate(RoutePaths.home);
      }
    });
  };

  return (
    <>
      <Header />
      <div className="row justify-content-between gap-3 px-3 px-lg-5 my-5 w-100">
        <aside className="user-page col-12 col-lg-3 fw-bold border border-1 h-25">
          {/* <div>
            <Link
              to={RoutePaths.userSignIn}
              className={toggleLinkClass(RoutePaths.userSignIn)}
            >
              SignIn<i className="bi bi-person float-end"></i>
            </Link>
          </div> */}
          <div>
            <Link
              to={RoutePaths.userAccount}
              className={toggleLinkClass(RoutePaths.userAccount)}
            >
              Dashboard<i className="bi bi-house float-end"></i>
            </Link>
          </div>
          <div>
            <Link
              to={RoutePaths.userOrders}
              className={toggleLinkClass(RoutePaths.userOrders)}
            >
              Orders<i className="bi bi-bookmark-fill float-end"></i>
            </Link>
          </div>
          <div>
            <Link
              to={RoutePaths.userAdress}
              className={toggleLinkClass(RoutePaths.userAdress)}
            >
              Address<i className="bi bi-envelope float-end"></i>
            </Link>
          </div>
          <div>
            <Link
              to={RoutePaths.userDetails}
              className={toggleLinkClass(RoutePaths.userDetails)}
            >
              Account Details<i className="bi bi-person float-end"></i>
            </Link>
          </div>
          <div>
            <LogOut />
          </div>
        </aside>
        <div className="col-12 col-lg-8 mt-3">{currentComponent}</div>
      </div>
      <Footer />
    </>
  );
};

export default UserAccount;
