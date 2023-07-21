import NavBar from "../components/NavBar";

function HomePage({ open, setOpen }) {
  return (
    <div>
      <NavBar open={open} setOpen={setOpen} />
      <div className="mt-16 text-5xl text-center font-black px-8 text-white flex items-center justify-center h-screen ">
        Welcome to the OnlineStore 💼 web app !!
        <br />
        <br />
        Click on the Products tab to view the products 📦
      </div>
    </div>
  );
}

export default HomePage;
