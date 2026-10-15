import { Link } from 'react-router-dom'
import { IMG } from '../lib/assets'

export default function EigenBeheer() {
  return (
    <>
      <section className="section">
        <div
          data-w-id="ce84e2e6-86f0-92be-e65f-7a37a569cff6"
          style={{ opacity: 0, transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
          className="blob-background top"
        ></div>
        <div className="background-fade-div small-top"></div>
        <div className="w-layout-blockcontainer container header w-container">
          <h2 data-w-id="ce84e2e6-86f0-92be-e65f-7a37a569cff9" style={{ opacity: 0 }} className="h5-page-header">
            Eigen beheer
          </h2>
          <p data-w-id="ce84e2e6-86f0-92be-e65f-7a37a569cffb" style={{ opacity: 0 }} className="h6-page-subheader">
            AI-gedreven retina screening met uw eigen camera, waarmee u zelf de screening uitvoert.
          </p>
        </div>
      </section>
      <section className="section no-buffer header">
        <div className="w-layout-blockcontainer container is-buttons w-container">
          <div data-w-id="dabc1c0d-4cf6-49cc-40f1-30fc02f5674e" style={{ opacity: 0 }} className="two-buttons-wrapper">
            <Link to="/de-camera" className="button w-inline-block">
              <p className="aa-button">De camera</p>
            </Link>
            <Link to="/oculomix-managed-service" className="button w-inline-block">
              <p className="aa-button">oculomix managed service</p>
            </Link>
            <Link to="/contact" className="button w-inline-block">
              <p className="aa-button">Bestellen</p>
            </Link>
            <Link to="/nieuws" className="button w-inline-block">
              <p className="aa-button">Niews</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="section no-upper-pad">
        <div className="w-layout-blockcontainer container w-container">
          <div data-w-id="3b646aeb-395a-f0d6-4517-ba8d11795012" style={{ opacity: 0 }} className="hook-content-flex">
            <h3 className="h3-section-header-large smaller">
              Je eigen patiënten helpen:
              <br />
              met één simpele scan
              <br />
            </h3>
            <p className="aa-body">
              Wilt u zelf uw patiënten screenen op oogaandoeningen? Met Eigen Beheer introduceert u AI-ondersteunde netvliesanalyse in uw
              praktijk. Ideaal voor artsen die zelf willen screenen en daarmee de arts-patiënt relatie willen verbeteren.
            </p>
          </div>
        </div>
      </section>
      <section className="section white-fade">
        <div className="w-layout-blockcontainer container w-container">
          <div className="klik-check-klaar-wrapper">
            <div data-w-id="6d044e01-26c6-e4b3-3ea5-d93bfe173c15" style={{ opacity: 0 }} className="klik-check-klaar-div">
              <p className="aa-body-subheader">Klik</p>
              <p className="aa-body centered">Met de camera wordt een hoogwaardige netvliesfoto gemaakt.</p>
            </div>
            <div data-w-id="6d044e01-26c6-e4b3-3ea5-d93bfe173c1a" style={{ opacity: 0 }} className="klik-check-klaar-div">
              <p className="aa-body-subheader">Check</p>
              <p className="aa-body centered">
                Binnen seconden controleerd CE-gecertificeerde AI de foto op tekenen van diabetische retinopathie, AMD en glaucoom.
              </p>
            </div>
            <div data-w-id="6d044e01-26c6-e4b3-3ea5-d93bfe173c1f" style={{ opacity: 0 }} className="klik-check-klaar-div">
              <p className="aa-body-subheader">Klaar</p>
              <p className="aa-body centered">U ontvangt meteen een rapport</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-overflow-hidden">
        <div className="w-layout-blockcontainer container w-container">
          <div data-w-id="9db0bcad-32f1-e72a-b006-eb661b1f5ab4" style={{ opacity: 0 }} className="blob-background right"></div>
          <div className="w-layout-grid image-wrapper is-horizontal">
            <div id="w-node-_9db0bcad-32f1-e72a-b006-eb661b1f5ab6-7c815c5d" className="flex-button-left uitdaging-page extraspace">
              <div data-w-id="9db0bcad-32f1-e72a-b006-eb661b1f5ab7" style={{ opacity: 0 }} className="header-pre-flex">
                <p className="h4-section-preheader">Eigen beheer</p>
                <h2 className="h2-section-header-primary">Eigen retinascreening, volledig ondersteund</h2>
              </div>
              <div className="text-wrapper">
                <div
                  data-w-id="9db0bcad-32f1-e72a-b006-eb661b1f5abf"
                  style={{ opacity: 0 }}
                  className="w-layout-vflex right-column-wrapper is-full-width"
                >
                  <div className="w-layout-vflex right-column-wrapper">
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <p className="aa-body">U koopt en bezit de netvliescamera zelf</p>
                    </div>
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <p className="aa-body">OculomiX levert AI-analyse van diabetis retinopathie, AMD en glaucoom</p>
                    </div>
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <p className="aa-body">
                        Inclusief veilige rapportage via ons digitale platform, met koppeling naar huisartsinformatiesystemen (HIS)
                      </p>
                    </div>
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <p className="aa-body">Volledige technische ondersteuning van OculomiX</p>
                    </div>
                  </div>
                  <Link to="/contact" className="button w-inline-block">
                    <p className="aa-button">bestel deze service</p>
                  </Link>
                </div>
              </div>
            </div>
            <div data-w-id="9db0bcad-32f1-e72a-b006-eb661b1f5ad4" style={{ opacity: 0 }} className="image-wrapper-main">
              <div className="image_eye-wrapper is-big">
                <img src={IMG.eigenHero} loading="lazy" width={1054} alt="" className="image-oms" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section white-fade remove-padding">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid grid _4-6">
            <div
              id="w-node-_5ce40268-607c-1244-815b-d81ce2f821fa-7c815c5d"
              data-w-id="5ce40268-607c-1244-815b-d81ce2f821fa"
              style={{ opacity: 0 }}
              className="header-pre-flex"
            >
              <h2 className="h2-section-header-primary">Retinal screening made easy</h2>
              <p className="aa-body">Neem gerust contact met ons op voor meer informatie.</p>
            </div>
            <div id="w-node-_5ce40268-607c-1244-815b-d81ce2f821ff-7c815c5d" className="flex-button-right middle">
              <Link to="/contact" className="button w-inline-block">
                <p className="aa-button">Neem contact op</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
