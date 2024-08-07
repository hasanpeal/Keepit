import "./Login.css";
import { Envelope, Lock } from "phosphor-react";
import { Button, InputIcon, Input, Label, Spinner } from "keep-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Navbar, NavbarBrand } from "keep-react";

function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;
    setEmail(value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;
    setPassword(value);
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault(); // Prevent default form submission

    try {
      setSpin(true);
      console.log("Spin status: " + spin);
      const result = await axios.post(
        "https://keepitbackend-xvp5.onrender.com/signup",
        {
          email,
          password,
        }
      );

      const { status, message } = result.data;
      if (status === 1) {
        navigate("/login", { state: { message: message, stat: true } });
      } else {
        setSpin(false);
        console.error("Signup failed:", message);
      }
    } catch (error) {
      console.error("Error during axios call signup:", error);
    }
  }

  return (
    <div>
      <Navbar>
        <div className="NavbarContainer">
          <NavbarBrand>
            <svg
              id="Notes_App_24"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="Icon"
            >
              <rect
                width="24"
                height="24"
                stroke="none"
                fill="#000000"
                opacity="0"
              />
              <g transform="matrix(0.48 0 0 0.48 12 12)">
                <path
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeDashoffset: 0,
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    fill: "rgb(0,0,0)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="translate(-25, -25)"
                  d="M 14 4 C 8.486 4 4 8.486 4 14 L 4 36 C 4 41.514 8.486 46 14 46 L 36 46 C 41.514 46 46 41.514 46 36 L 46 14 C 46 8.486 41.514 4 36 4 L 14 4 z M 6 18 L 44 18 L 44 26 L 6 26 L 6 18 z M 8 20 L 8 22 L 10 22 L 10 20 L 8 20 z M 12 20 L 12 22 L 14 22 L 14 20 L 12 20 z M 16 20 L 16 22 L 18 22 L 18 20 L 16 20 z M 20 20 L 20 22 L 22 22 L 22 20 L 20 20 z M 24 20 L 24 22 L 26 22 L 26 20 L 24 20 z M 28 20 L 28 22 L 30 22 L 30 20 L 28 20 z M 32 20 L 32 22 L 34 22 L 34 20 L 32 20 z M 36 20 L 36 22 L 38 22 L 38 20 L 36 20 z M 40 20 L 40 22 L 42 22 L 42 20 L 40 20 z M 6 28 L 44 28 L 44 35 L 6 35 L 6 28 z M 6 37 L 44 37 C 43.505 40.94 40.072 44 36 44 L 14 44 C 9.928 44 6.495 40.94 6 37 z"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </NavbarBrand>
        </div>
      </Navbar>
      <div className="Login">
        <form
          className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md Form"
          onSubmit={handleSubmit}
        >
          <fieldset className="space-y-1">
            <Label htmlFor="name">Email</Label>
            <div className="relative">
              <Input
                placeholder="Enter email"
                name="Email"
                value={email}
                onChange={handleEmail}
                className="ps-11"
                type="email"
              />
              <InputIcon>
                <Envelope size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="Enter password"
                type="password"
                className="ps-11"
                value={password}
                onChange={handlePassword}
              />
              <InputIcon>
                <Lock size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <Button
            className="inButton"
            size="sm"
            color="secondary"
            type="submit"
          >
            Sign up
          </Button>
          {spin && <Spinner className="Spin" color="gray" size="lg" />}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
