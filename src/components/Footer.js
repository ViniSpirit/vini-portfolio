function Footer(props) {
  return (
    <footer
      className="footer"
      style={{
        padding: "18px 0 13px 0",
        margin: 0,
      }}
    >
      <a href="https://github.com/ViniSpirit" target="_blank" rel="noreferrer">
        <i style={{ color: props.color }} className="fab fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/marcos-vinicius-75863a74/"
        target="_blank"
        rel="noreferrer"
      >
        <i
          style={{ color: props.color, marginLeft: "30px" }}
          className="fab fa-linkedin"
        ></i>
      </a>
      <a
        href="https://twitter.com/ViniSpiritDev"
        target="_blank"
        rel="noreferrer"
      >
        <i
          style={{ color: props.color, marginLeft: "30px" }}
          className="fab fa-twitter-square"
        ></i>
      </a>
    </footer>
  )
}

export default Footer
