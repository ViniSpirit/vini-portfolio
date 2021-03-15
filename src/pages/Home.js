import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = ({ history }) => {
  return (
    <>
      <Header home />
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Oi, meu nome é</div>
            <div className="text-2">Marcos Vinicius</div>
            <div className="text-3">
              <span>Web Developer.</span>
            </div>
          </div>
          <button onClick={() => history.push("/about")} className="btnMain">
            Sobre mim
          </button>
        </div>
        <Footer color="#fff" />
      </section>
    </>
  )
}

export default Home
