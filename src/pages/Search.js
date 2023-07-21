import NavBar from "../components/NavBar";

function Search({ open, setOpen }) {
  return (
    <div>
      <NavBar open={open} setOpen={setOpen} />
      This is search page
    </div>
  );
}

export default Search;
