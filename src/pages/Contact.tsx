export default function Contact() {
  return (
    <section className="split-screen">
      <div className="w-layout-grid grid form">
        <div className="div-form">
          <h1 data-w-id="5fefe3d4-a88d-3e88-1ec2-98ef694d6ca0" style={{ opacity: 0 }} className="h3-section-header-large">
            CONTACT
          </h1>
          <p data-w-id="6b7b40b1-de72-9dac-559e-fd91fcccda21" style={{ opacity: 0 }} className="h6-page-subheader left">
            Heeft u vragen, interesse in onze diensten, of wilt u samenwerken met OculomiX? Vul het contactformulier in, dan helpen wij u graag
            verder.
            <br />
            <br />
            LET OP: veel antwoorden op vragen over de gebruiksaanwijzing van het product staan op de FAQ.
            <br />
          </p>
          <div className="w-form">
            <form
              method="get"
              name="wf-form-Contactformulier"
              data-name="Contactformulier"
              style={{ opacity: 0 }}
              data-w-id="6eb0d2f0-d99c-8ac4-6ac6-c4dc58aa811e"
              id="wf-form-Contactformulier"
            >
              <div className="form-wrapper">
                <label htmlFor="Volledige-naam" className="h2-section-header-primary form">
                  Volledige naam:
                </label>
                <input
                  className="form-fields w-input"
                  autoFocus
                  maxLength={256}
                  name="Volledige-naam"
                  data-name="Volledige naam"
                  placeholder=""
                  type="text"
                  id="Volledige-naam"
                  required
                />
              </div>
              <div className="form-wrapper">
                <label htmlFor="E-mailadres" className="h2-section-header-primary form">
                  E-mailadres:
                </label>
                <input
                  className="form-fields w-input"
                  maxLength={256}
                  name="E-mailadres"
                  data-name="E-mailadres"
                  placeholder=""
                  type="email"
                  id="E-mailadres"
                  required
                />
              </div>
              <div className="form-wrapper">
                <label htmlFor="field" className="h2-section-header-primary form">
                  Telefoonnummer:
                </label>
                <input className="form-fields w-input" maxLength={256} name="field" data-name="" placeholder="" type="tel" id="field" />
              </div>
              <div className="form-wrapper">
                <label htmlFor="Onderwerp" className="h2-section-header-primary form">
                  Onderwerp:
                </label>
                <select id="Onderwerp" name="Onderwerp" data-name="Onderwerp" required className="form-fields select-button w-select">
                  <option value="">Kies...</option>
                  <option value="OculomiX Managed Service">OculomiX Managed Service</option>
                  <option value="Eigen Beheer">Eigen beheer</option>
                  <option value="Vraag over product">Vraag over product</option>
                  <option value="Overig">Overig</option>
                </select>
              </div>
              <div className="form-wrapper">
                <label htmlFor="Bericht" className="h2-section-header-primary form">
                  Bericht:
                </label>
                <input
                  className="form-fields w-input"
                  maxLength={256}
                  name="Bericht"
                  data-name="Bericht"
                  placeholder=""
                  type="text"
                  id="Bericht"
                  required
                />
              </div>
              <label className="w-checkbox checkbox-field">
                <input type="checkbox" name="checkbox" id="checkbox" data-name="Checkbox" required className="w-checkbox-input checkbox" />
                <span className="aa-body small w-form-label">Ik heb de privacyverklaring gelezen &amp; ga akkoord</span>
              </label>
              <input type="submit" data-wait="Even wachten svp..." className="button submit w-button" value="Versturen" />
            </form>
            <div className="w-form-fail">
              <div className="aa-body">Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="div-block">
          <div className="background-fade-div small-top sideways"></div>
          <div
            data-w-id="f9265704-1acf-86a2-c34d-69cb2434e45b"
            style={{ transform: 'translate3d(0px, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0deg, 0deg)' }}
            className="blob-background form"
          ></div>
        </div>
      </div>
    </section>
  )
}
