import "bulma/css/bulma.css"
import "./App.css"
import Course from "./Course"
import Angular from "./images/angular.jpg"
import Bootsrap from "./images/bootstrap5.png"
import Frontend from "./images/ccsharp.png"
import Web from "./images/kompleweb.jpg"
function App() {
  return (
    <div className="App">
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section"></section>
        <div className="columns">
          <div className="column">
            <Course
              image={Angular}
              title="Angular  "
              description="Her gün öğrenmeye biraz zaman ayırmak sonuç verir. Araştırmalara göre öğrenimi alışkanlık haline getiren öğrencilerin hedeflerine ulaşma olasılığı daha fazladır. Öğrenmeye zaman ayırın ve öğrenim planlayıcınızı kullanarak hatırlatmalar alın"
            />
          </div>
          <div className="column">
            <Course
              image={Bootsrap}
              title="Bootstrap 5  "
              description="Her gün öğrenmeye biraz zaman ayırmak sonuç verir. Araştırmalara göre öğrenimi alışkanlık haline getiren öğrencilerin hedeflerine ulaşma olasılığı daha fazladır. Öğrenmeye zaman ayırın ve öğrenim planlayıcınızı kullanarak hatırlatmalar alın"
            />
          </div>
          <div className="column">
            <Course
              image={Frontend}
              title="Komple Web  "
              description="Her gün öğrenmeye biraz zaman ayırmak sonuç verir. Araştırmalara göre öğrenimi alışkanlık haline getiren öğrencilerin hedeflerine ulaşma olasılığı daha fazladır. Öğrenmeye zaman ayırın ve öğrenim planlayıcınızı kullanarak hatırlatmalar alın"
            />
          </div>
          <div className="column">
            <Course
              image={Web}
              title="Frontend "
              description="Her gün öğrenmeye biraz zaman ayırmak sonuç verir. Araştırmalara göre öğrenimi alışkanlık haline getiren öğrencilerin hedeflerine ulaşma olasılığı daha fazladır. Öğrenmeye zaman ayırın ve öğrenim planlayıcınızı kullanarak hatırlatmalar alın"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
