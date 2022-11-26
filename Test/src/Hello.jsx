function Hello(props) {
  return (
    <div>
      <p> Olá, {props.name}! </p>
      {props.children}
    </div>
  );
}

export default Hello;
