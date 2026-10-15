import { Link } from 'react-router-dom'
import { IMG } from '../lib/assets'

export default function DeCamera() {
  return (
    <>
      <section className="section">
        <div
          data-w-id="6d820d7f-9042-b922-c222-02b9522b5267"
          style={{ opacity: 0, transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
          className="blob-background top"
        ></div>
        <div className="background-fade-div small-top"></div>
        <div className="w-layout-blockcontainer container header w-container">
          <h2 data-w-id="6d820d7f-9042-b922-c222-02b9522b526a" style={{ opacity: 0 }} className="h5-page-header">
            De camera
          </h2>
          <p data-w-id="6d820d7f-9042-b922-c222-02b9522b526c" style={{ opacity: 0 }} className="h6-page-subheader">
            Met behulp van een AI-gestuurde, handzame camera is binnen enkele minuten netvliesscreening mogelijk
          </p>
        </div>
      </section>
      <section className="section no-buffer header">
        <div className="w-layout-blockcontainer container with-buffer w-container">
          <div className="two-buttons-wrapper">
            <Link to="/uitdaging" className="button w-inline-block">
              <p className="aa-button">De uitdaging</p>
            </Link>
            <Link to="/voor-wie" className="button w-inline-block">
              <p className="aa-button">Voor wie</p>
            </Link>
            <Link to="/over-ons" className="button w-inline-block">
              <p className="aa-button">Over ons</p>
            </Link>
            <Link to="/nieuws" className="button w-inline-block">
              <p className="aa-button">Nieuws</p>
            </Link>
            <Link to="/contact" className="button w-inline-block">
              <p className="aa-button">Contact</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="section no-buffer header">
        <div className="w-layout-blockcontainer container with-buffer w-container"></div>
      </section>
      <section className="section white-background">
        <div className="w-layout-blockcontainer container is-animation w-container">
          <div className="w-layout-grid grid _12">
            <div id="w-node-_9d06a5b2-1332-7f1d-49d3-6e8de58eedcd-23de51f3" className="camera-text-wrapper l">
              <div
                data-w-id="9728079e-dc4e-66fb-ed72-6b4410dc6c6a"
                style={{ opacity: 0, transform: 'translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
                className="hook-variable-div camera"
              >
                <p className="aa-body-subheader">Beeldopname: klik</p>
                <p className="aa-body">
                  In slechts enkele seconden legt onze medisch gecertificeerde retina-camera het netvlies haarscherp vast, vaak zonder dat
                  pupilverwijding nodig is.
                </p>
                <img src={IMG.line4} loading="lazy" alt="" className="image-13" />
              </div>
              <div
                data-w-id="637abedb-a2f6-bd19-9b68-1c41995896fc"
                style={{ opacity: 0, transform: 'translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
                className="hook-variable-div camera"
              >
                <img src={IMG.line2} loading="lazy" alt="" className="image-13" />
                <p className="aa-body-subheader">AI-analyse: check</p>
                <p className="aa-body">
                  De AI analyseert de beelden en direct na vastlegging op diabetische retinopathie, AMD en glaucoom
                </p>
              </div>
            </div>
            <img
              src={IMG.cameraFront}
              loading="lazy"
              id="w-node-_8d0751f3-18db-7c7a-80ad-3255cce143b6-23de51f3"
              alt=""
              className="image-9 sticky-right"
            />
            <div id="w-node-_9c8ef9e3-7b85-4735-0803-ad462e713957-23de51f3" className="camera-text-wrapper l">
              <div
                data-w-id="9c8ef9e3-7b85-4735-0803-ad462e713958"
                style={{ opacity: 0, transform: 'translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
                className="hook-variable-div camera"
              >
                <img src={IMG.line2} loading="lazy" alt="" className="image-13" />
                <p className="aa-body-subheader">Oculomix managed service</p>
                <p className="aa-body">
                  Wij zetten het gehele screeningsproces op en voeren het voor u uit. Zo kunt u direct starten met netvliesonderzoek, zonder extra
                  belasting voor uw praktijk
                </p>
                <Link to="/oculomix-managed-service" className="button w-inline-block">
                  <p className="aa-button">Lees meer</p>
                </Link>
              </div>
            </div>
            <div id="w-node-_17ce6f75-2e5d-c424-49f6-94bc08eec270-23de51f3" className="camera-text-wrapper auto">
              <div
                style={{ opacity: 0, transform: 'translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
                className="hook-variable-div camera"
              >
                <p className="aa-body-subheader">Diabetische Retinopathie (DR)</p>
                <p className="aa-body">
                  Het AI-algoritme voor diabetische retinopathie-screening is CE-gecertificeerd en direct inzetbaar in de huisartsenpraktijk.
                </p>
                <img src={IMG.line5} loading="lazy" alt="" className="image-13" />
              </div>
              <div
                data-w-id="f89b34e1-e6ca-b59e-8c30-e42d17e27d5b"
                style={{ opacity: 0, transform: 'translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
                className="hook-variable-div camera"
              >
                <img src={IMG.line2} loading="lazy" alt="" className="image-13" />
                <p className="aa-body-subheader">Glaucoom</p>
                <p className="aa-body">De AI voor glaucoomscreening is gereed, en CE-gecertificeerd.</p>
              </div>
              <div className="hook-variable-div camera r">
                <img src={IMG.line6} loading="lazy" alt="" className="image-13" />
                <p className="aa-body-subheader">Leeftijdsgebonden Maculadegeneratie (AMD)</p>
                <p className="aa-body">Het AI-algoritme voor AMD-screening is gereed, en CE-gecertificeerd</p>
              </div>
            </div>
            <div id="w-node-_9abd565b-dd0d-de4c-e5e2-3716bdccb0e9-23de51f3" className="camera-text-wrapper l wrapper-button">
              <div
                style={{ opacity: 0, transform: 'translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
                className="hook-variable-div camera"
              >
                <p className="aa-body-subheader">Eigen beheer</p>
                <p className="aa-body">
                  U beschikt zelf over de camera; wij verzorgen de AI-analyse, rapportage, technische ondersteuning en koppeling met uw bestaande
                  systemen. Ideaal voor grotere praktijken of digitale zorgplatforms.
                </p>
              </div>
              <Link to="/eigen-beheer" className="button w-inline-block">
                <p className="aa-button">Lees meer</p>
              </Link>
              <img src={IMG.line4} loading="lazy" alt="" className="image-13" />
            </div>
            <div id="w-node-_29d55adf-02fa-8e4b-9645-3b5028151b8b-23de51f3" className="camera-text-wrapper auto">
              <img src={IMG.line6} loading="lazy" alt="" className="image-13" />
              <div
                style={{ opacity: 0, transform: 'translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
                className="hook-variable-div camera"
              >
                <p className="aa-body-subheader">Rapport: Klaar</p>
                <p className="aa-body">Binnen seconden is er een rapport met risicoindicatie van de bovengenoemde ziektes</p>
              </div>
            </div>
          </div>
          <img src={IMG.cameraFront} loading="lazy" alt="" className="image-9 sticky-right is-visible" />
        </div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid image-wrapper">
            <div id="w-node-_28515a35-e7a5-5cac-2aa1-3833d7ad655d-23de51f3" className="flex-button-left uitdaging-page extraspace">
              <div data-w-id="28515a35-e7a5-5cac-2aa1-3833d7ad655e" style={{ opacity: 0 }} className="header-pre-flex">
                <p className="h4-section-preheader">De toekomst van OculomiX</p>
                <h2 className="h2-section-header-primary">Meer inzicht met elke scan</h2>
              </div>
              <div className="text-wrapper">
                <p data-w-id="28515a35-e7a5-5cac-2aa1-3833d7ad6562" style={{ opacity: 0 }} className="aa-body">
                  Bij OculomiX kijken wij verder dan alleen het oog. Het netvlies is niet alleen een venster naar ooggezondheid, maar ook een unieke
                  toegangspoort tot het hele lichaam. Daarom werken we aan de uitbreiding van de AI-algoritmes om met biomarkers in het oogbeeld
                  ook cardiovasculair risico, oorgaanziekten en neurodegeneratieve aandoeningen te detecteren. Deze uitbreidingen maken van
                  OculomiX een krachtig hulpmiddel voor bredere preventieve zorg.
                </p>
                <div data-w-id="b06b64ef-bfa9-51c1-c663-bb880d0baad7" style={{ opacity: 0 }} className="w-layout-vflex right-column-wrapper is-gap40px">
                  <div className="w-layout-vflex right-column-wrapper">
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <div className="hook-variable-div">
                        <p className="aa-body-subheader">Cardiovasculair risico</p>
                        <p className="aa-body">2026</p>
                      </div>
                    </div>
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <div className="hook-variable-div">
                        <p className="aa-body-subheader">Neurodegeneratieve aandoeningen</p>
                        <p className="aa-body">2028+</p>
                      </div>
                    </div>
                  </div>
                  <Link to="/nieuws" className="button w-inline-block">
                    <p className="aa-button">Nieuws over OculomiX</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="image-wrapper-main">
              <div data-w-id="28515a35-e7a5-5cac-2aa1-3833d7ad656a" className="image_eye-wrapper">
                <img src={IMG.cert} loading="lazy" width={1054} alt="" className="image-camera" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid grid _4-6">
            <div id="w-node-d48f85fe-4441-b3f6-709d-52ab1d8a5cb2-23de51f3" className="header-pre-flex">
              <h2 className="h2-section-header-primary">
                Retinal screening made easy
                <br />
              </h2>
              <p className="aa-body">Ontdek hoe OculomiX de zorg ontlast met snelle, AI-gestuurde netvliesscreening.</p>
            </div>
            <div id="w-node-d48f85fe-4441-b3f6-709d-52ab1d8a5cb7-23de51f3" className="flex-button-right middle">
              <Link to="/voor-wie" className="button _100 w-inline-block">
                <p className="aa-button">Voor wie is Oculomix</p>
              </Link>
              <Link to="/contact" className="button _100 w-inline-block">
                <p className="aa-button">Bestel de camera</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
