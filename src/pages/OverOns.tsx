import { Link } from 'react-router-dom'
import { IMG } from '../lib/assets'

export default function OverOns() {
  return (
    <>
      <section className="section">
        <div
          data-w-id="01ffc1ff-147d-f283-2f69-8621d973eea5"
          style={{ transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0 }}
          className="blob-background top"
        ></div>
        <div className="background-fade-div small-top"></div>
        <div className="w-layout-blockcontainer container header w-container">
          <h2 data-w-id="01ffc1ff-147d-f283-2f69-8621d973eea8" style={{ opacity: 0 }} className="h5-page-header">
            Over ons
          </h2>
          <p data-w-id="01ffc1ff-147d-f283-2f69-8621d973eeaa" style={{ opacity: 0 }} className="h6-page-subheader is-small">
            De vraag naar retinascannen groeit sneller dan het aanbod; daarom streven wij naar patiënt identificatie en behandeling vóór het te
            laat is.
          </p>
        </div>
      </section>
      <section className="section no-buffer header">
        <div className="w-layout-blockcontainer container with-buffer w-container">
          <div data-w-id="84ae7921-4f3b-abfd-cfea-44bc594b0e8f" style={{ opacity: 0 }} className="two-buttons-wrapper">
            <Link to="/uitdaging" className="button w-inline-block">
              <p className="aa-button">De uitdaging</p>
            </Link>
            <Link to="/de-camera" className="button w-inline-block">
              <p className="aa-button">De camera</p>
            </Link>
            <Link to="/voor-wie" className="button w-inline-block">
              <p className="aa-button">Voor wie</p>
            </Link>
            <Link to="/eigen-beheer" className="button w-inline-block">
              <p className="aa-button">Nieuws</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid image-wrapper is-horizontal">
            <div id="w-node-bd0a415f-aba6-8fd3-125d-0ef3e3f9a424-0a79e318" className="flex-button-left uitdaging-page extraspace">
              <div data-w-id="bd0a415f-aba6-8fd3-125d-0ef3e3f9a425" style={{ opacity: 0 }} className="header-pre-flex">
                <p className="h4-section-preheader">Onze Visie</p>
                <h2 className="h2-section-header-primary">Het netvlies als spiegel van de algemene gezondheid</h2>
              </div>
              <div className="text-wrapper">
                <div data-w-id="bd0a415f-aba6-8fd3-125d-0ef3e3f9a42b" style={{ opacity: 0 }} className="w-layout-vflex right-column-wrapper is-full-width">
                  <div className="w-layout-vflex right-column-wrapper">
                    <p className="aa-body">
                      Het netvlies; een klein oppervlak met ongekende waarde. Een unieke toegangspoort tot iemands gezondheid, zichtbaar zonder
                      ingrijpende handelingen. Maar ondanks bestaande technologieën, werd deze toegang nauwelijks benut. Waarom? Omdat de zorgketen
                      vastzit in oude structuren. Omdat retina-scanners ontworpen zijn voor specialisten, niet voor schaalbare zorg. En omdat
                      niemand écht verder keek dan alleen het apparaat.
                      <br />
                      <br />
                      Wij besloten dat het anders moest. We begonnen niet met het bouwen van een betere camera; die bestond al. In plaats daarvan
                      beantwoordden wij de vraag hoe we deze technologie toegankelijk, schaalbaar en écht impactvol konden maken. Zo ontstond
                      OculomiX: een volledig geïntegreerde AI-gedreven screeningoplossing die de kracht van het netvlies benut zoals nooit eerder
                    </p>
                  </div>
                  <Link to="/contact" className="button w-inline-block">
                    <p className="aa-button">bestel deze service</p>
                  </Link>
                </div>
              </div>
            </div>
            <div data-w-id="bd0a415f-aba6-8fd3-125d-0ef3e3f9a441" style={{ opacity: 0 }} className="image_eye-wrapper is-sticky">
              <img src={IMG.cameraFront2} loading="lazy" width={1054} alt="" className="image-eye _75vh" />
            </div>
          </div>
          <div className="w-layout-grid image-wrapper is-horizontal is-gap-top">
            <div id="w-node-_257ece5a-4c60-6963-2748-bcd0c36e1561-0a79e318" className="flex-button-left uitdaging-page extraspace">
              <div data-w-id="257ece5a-4c60-6963-2748-bcd0c36e1562" style={{ opacity: 0 }} className="header-pre-flex">
                <p className="h4-section-preheader">Zichtverlies in de wachtrij</p>
                <h2 className="h2-section-header-primary">Wazig beleid, scherpe gevolgen</h2>
              </div>
              <div className="text-wrapper">
                <div data-w-id="257ece5a-4c60-6963-2748-bcd0c36e1568" style={{ opacity: 0 }} className="w-layout-vflex right-column-wrapper is-full-width">
                  <div className="w-layout-vflex text-wrapper is-horizontal">
                    <p className="aa-body">
                      Tijdens onze zoektocht werd één ding duidelijk: de Nederlandse oogzorgsector is totaal overbelast. Met circa 600 oogartsen
                      tegenover meer dan een miljoen mensen die oogzorg nodig hebben, lopen de wachttijden op. Dat leidt niet alleen tot
                      frustratie, maar ook tot onnodige blindheid die voorkomen had kunnen worden met tijdige screening.
                      <br />
                    </p>
                    <p className="aa-body">
                      Wij willen dat anders gaan doen. Het netvlies is uniek: het is het enige deel van het lichaam waar je bloedvaten en zenuwen
                      direct kunt observeren zonder invasieve ingreep. Door dat slim te gebruiken, met de hulp van AI en schaalbare technologie,
                      kunnen we chronische oogaandoeningen vroegtijdig opsporen en onnodige schade voorkomen.
                    </p>
                  </div>
                  <Link to="/contact" className="button w-inline-block">
                    <p className="aa-button">bestel deze service</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section no-lower-pad">
        <div className="w-layout-blockcontainer container w-container">
          <div className="hook-content-flex">
            <h3 className="h2-section-header-primary">
              Onze missie
              <br />
            </h3>
            <p className="aa-body">
              Bij OculomiX geloven we dat niemand onnodig zijn zicht zou moeten verliezen.
              <br />
              Wij <strong>voorkomen onnodige blindheid</strong> door het netvlies als spiegel van de algemene gezondheid te gebruiken.
            </p>
          </div>
        </div>
        <div className="w-layout-blockcontainer container w-container"></div>
      </section>
      <section className="section is-overflow-hidden">
        <div className="w-layout-blockcontainer container w-container">
          <div
            data-w-id="bf05da37-044d-b9e0-2b56-52ec6c3d534b"
            style={{ transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0 }}
            className="blob-background right"
          ></div>
          <div className="w-layout-grid image-wrapper">
            <div id="w-node-bf05da37-044d-b9e0-2b56-52ec6c3d534d-0a79e318" className="flex-button-left uitdaging-page extraspace">
              <div className="text-wrapper">
                <div
                  data-w-id="bf05da37-044d-b9e0-2b56-52ec6c3d5354"
                  style={{ opacity: 0 }}
                  className="w-layout-vflex right-column-wrapper is-full-width"
                >
                  <div className="w-layout-vflex right-column-wrapper">
                    <div className="subheader-wrapper big-gap">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon long" />
                      <div className="hook-variable-div">
                        <p className="aa-body-subheader">screening beschikbaar maken bij de huisarts</p>
                        <p className="aa-body">
                          We maken het mogelijk voor huisartsen om eenvoudig retinascreening uit te voeren, zonder extra werkdruk. Dit voorkomt
                          onnodige verwijzingen, vermindert wachttijden bij oogartsen en brengt preventie dichter bij de patiënt.
                        </p>
                      </div>
                    </div>
                    <div className="subheader-wrapper big-gap">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon long" />
                      <div className="hook-variable-div">
                        <p className="aa-body-subheader">Glaucoomscreening toegankelijk maken voor diabetici</p>
                        <p className="aa-body">
                          Diabetespatiënten hebben ook een verhoogd risico op glaucoom, maar worden hier vaak niet op gescreend. OculomiX
                          combineert DR-, AMD- en glaucoomscreenings in één sessie, waardoor efficiëntie en vroege detectie hand in hand gaan.
                        </p>
                      </div>
                    </div>
                    <div className="subheader-wrapper big-gap">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon long" />
                      <div className="hook-variable-div">
                        <p className="aa-body-subheader">Jaarlijkse netvliesscreening</p>
                        <p className="aa-body">
                          Door jaarlijkse glaucoom screeningen op te zetten proberen we patiënten sneller op te sporen die niet bekend zijn,
                          voordat het te laat is voor een behandeling.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to="/contact" className="button w-inline-block">
                    <p className="aa-button">bestel deze service</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="image-wrapper-main">
              <div data-w-id="977191f8-f466-e09e-a5de-94fc32f73132" className="image_eye-wrapper">
                <img src={IMG.practice} loading="lazy" alt="" className="image-18" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container"></div>
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid grid _2-2">
            <div
              id="w-node-cfc23a50-975b-b2b9-32b4-76a7481c366f-0a79e318"
              data-w-id="cfc23a50-975b-b2b9-32b4-76a7481c366f"
              className="profile-total"
            >
              <img src={IMG.erik} loading="lazy" data-w-id="cfc23a50-975b-b2b9-32b4-76a7481c3670" alt="" className="image-16 is-portrait" />
              <div data-w-id="2f72609c-b6f8-20d9-2533-f10490fc0334" className="profile-overlay"></div>
              <div data-w-id="7ad810af-9f46-a0f9-75ea-cfb1d9cad30d" className="name-wrapper">
                <h3 className="h2-section-header-primary">Erik Hoving</h3>
                <p className="aa-body">
                  Co-Founder
                  <br />
                </p>
              </div>
            </div>
            <div
              id="w-node-f48346d6-9648-9e3a-3d8f-c0f2c773713b-0a79e318"
              data-w-id="f48346d6-9648-9e3a-3d8f-c0f2c773713b"
              className="profile-total"
            >
              <img src={IMG.jerome} loading="lazy" data-w-id="f48346d6-9648-9e3a-3d8f-c0f2c773713c" alt="" className="image-16 is-portrait" />
              <div data-w-id="f48346d6-9648-9e3a-3d8f-c0f2c773713d" className="profile-overlay"></div>
              <div data-w-id="f48346d6-9648-9e3a-3d8f-c0f2c773713e" className="name-wrapper">
                <h3 className="h2-section-header-primary">Jérôme Koelewijn</h3>
                <p className="aa-body">Co-Founder</p>
              </div>
            </div>
            <div
              id="w-node-cbc6e37e-a745-9b42-9277-a45ca20392d9-0a79e318"
              data-w-id="cbc6e37e-a745-9b42-9277-a45ca20392d9"
              className="profile-total"
            >
              <img src={IMG.jamie} loading="lazy" data-w-id="cbc6e37e-a745-9b42-9277-a45ca20392da" alt="" className="image-16 is-portrait" />
              <div data-w-id="cbc6e37e-a745-9b42-9277-a45ca20392db" className="profile-overlay"></div>
              <div data-w-id="cbc6e37e-a745-9b42-9277-a45ca20392dc" className="name-wrapper">
                <h3 className="h2-section-header-primary">Jamie Tjoe Ny</h3>
                <p className="aa-body">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-overflow-hidden">
        <div className="w-layout-blockcontainer container w-container">
          <div
            data-w-id="175fb09b-2fd3-1412-efbe-4edf5faa969f"
            style={{ opacity: 0, transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
            className="blob-background right"
          ></div>
          <div data-w-id="7c0dee0e-c442-d64b-5e60-dcfd2f914d81" style={{ opacity: 0 }} className="header-pre-flex">
            <p className="h4-section-preheader">Zichtverlies in de wachtrij</p>
            <h2 className="h2-section-header-primary">In samenwerking met de top van de Nederlandse oogzorg</h2>
            <div className="w-layout-vflex text-wrapper is-horizontal">
              <p className="aa-body">
                OculomiX werkt samen met een van de meest vooraanstaande medische instellingen in Nederland om de betrouwbaarheid, kwaliteit en
                impact van het AI-gestuurde netvliesdiagnostiek te beoordelen. Deze samenwerkingen is essentieel om onze technologie klinisch te
                valideren en landelijk op te schalen. Hieruit is gekomen dat het glaucoom-algoritme, geëvalueerd door dr. Hans Lemij van het
                Oogziekenhuis Rotterdam, goede resultaten heeft op het gebied van nauwkeurigheid en toepasbaarheid in de eerstelijnszorg.
                <br />
              </p>
              <p className="aa-body">
                Daarnaast bereiden we grootschalige pilotprojecten voor met onder andere Rijnmond Dokters (meer dan 350 huisartsenpraktijken) en
                Bergman Clinics, de grootste commerciële aanbieder van oogzorg in Nederland.
              </p>
            </div>
          </div>
          <div className="w-layout-grid image-wrapper">
            <div id="w-node-_175fb09b-2fd3-1412-efbe-4edf5faa96a1-0a79e318" className="flex-button-left uitdaging-page extraspace">
              <div className="text-wrapper">
                <div
                  data-w-id="175fb09b-2fd3-1412-efbe-4edf5faa96a3"
                  style={{ opacity: 0 }}
                  className="w-layout-vflex right-column-wrapper is-full-width"
                >
                  <Link to="/contact" className="button w-inline-block">
                    <p className="aa-button">bestel deze service</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="image-wrapper-main">
              <div data-w-id="175fb09b-2fd3-1412-efbe-4edf5faa96be" className="image_eye-wrapper">
                <img src={IMG.results} loading="lazy" width={1054} alt="" className="image-eye v2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section white-fade">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid grid _4-6">
            <div id="w-node-e35c33ee-ab19-b5d2-96ad-8ba8bb877913-0a79e318" className="header-pre-flex">
              <h2 className="h2-section-header-primary">Retinal screening made easy</h2>
              <p className="aa-body">Neem gerust contact met ons op voor meer informatie.</p>
            </div>
            <div id="w-node-e35c33ee-ab19-b5d2-96ad-8ba8bb877918-0a79e318" className="flex-button-right middle">
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
