import NavBar from "../components/NavBar";

function PageNotFound({ open, setOpen }) {
  return (
    <div>
      <NavBar open={open} setOpen={setOpen} />
      <div className="mt-16 text-5xl text-center font-black px-8 text-white flex items-center justify-center h-screen ">
        Page Not Found !! 😓
      </div>
    </div>
  );
}

export default PageNotFound;
