import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Container from "../Components/Container";
import ScrollToTop from "../Components/utility/ScrollToTop";

const HomeLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen mt-30">
        <Container className="">
          <Outlet></Outlet>
        </Container>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
