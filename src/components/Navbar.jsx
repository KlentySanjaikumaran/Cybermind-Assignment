import { Button, Container, Group, TextInput } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
import "../assets/Navbar.css"; 
import Logo from "../assets/logo.png"; 
import { useElementSize } from "@mantine/hooks";

function Navbar() {
  // const navigate = useNavigate();
  return (
    // <Container className="navbar-container">
    //   <div className="navbar">
    //     <img src={Logo} alt="Logo" className="logo" />
    //     <div className="nav-links">
    //       <a href="#">Home</a>
    //       <a href="#">Find Jobs</a>
    //       <a href="#">Find Talents</a>
    //       <a href="#">About Us</a>
    //       <a href="#">Testimonials</a>
    //     </div>
    //     <button className="create-job-button">Create Jobs</button>
    //   </div>
    // </Container>
    <div
      style={{
        backgroundColor: "white",
        padding: "10px 0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <Container
        maw={890}
        mah={80}
        mt={21}
        ml={275}
        radius={122}
        size="xl"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Group maw={838} mah={48}  ml={26} className="navbar">
          <div style={{}}>
            <img src={Logo} alt="Logo" className="logo" />
          </div>

          {/* Links */}
          <Group className="nav-links">
            <a href="#">Home</a>
            <a href="#">Find Jobs</a>
            <a href="#">Find Talents</a>
            <a href="#">About Us</a>
            <a href="#">Testimonials</a>
          </Group>

          {/* Create Job Button */}
          <Button
            radius="xl"
            style={{
              backgroundImage: "linear-gradient(to right, #7f00ff, #e100ff)",
            }}
            onClick={() => navigate("/create-job")}
          >
            Create Job
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default Navbar;
