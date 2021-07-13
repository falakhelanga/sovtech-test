const Loader = (): JSX.Element => {
  return (
    <div
      className=" w-100 d-flex align-items-center justify-content-center mt-4"
      style={{ height: "100%" }}
    >
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Loader;
