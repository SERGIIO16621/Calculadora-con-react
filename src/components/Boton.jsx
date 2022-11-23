function Boton(props) {
  return (
    <>
      <button className="botones"
        onClick={() => props.manejarClick(props.children)}>
        {props.children}
      </button>
    </>
  );
}

export default Boton;
