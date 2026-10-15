import { Link } from 'react-router-dom'
import { IMG } from '../lib/assets'

export default function Home() {
  return (
    <>
      <section className="section hero">
        <div data-w-id="3571ab09-8ece-5b2f-a044-3c6aab42ef45" className="blob-background header"></div>
        <div className="w-layout-blockcontainer container hero w-container">
          <h1 className="heading is-center">Retinal screening made easy</h1>
          <div className="image_hero-wrappper">
            <div>
              <div className="text-block">
                <span></span>
              </div>
            </div>
            <img src={IMG.phone} loading="lazy" alt="" className="image-hero" />
            <h1 className="heading-absolute">voor Glaucoom</h1>
            <h1 className="heading-absolute is-right">DR en AMD</h1>
            <div className="text-block">
              <span></span>
            </div>
          </div>
        </div>
      </section>
      <section className="section no-buffer"></section>
      <section className="section no-buffer header">
        <div className="w-layout-blockcontainer container with-buffer w-container">
          <div className="two-buttons-wrapper">
            <Link to="/uitdaging" className="button w-inline-block">
              <p className="aa-button">De uitdaging</p>
            </Link>
            <Link to="/de-camera" className="button w-inline-block">
              <p className="aa-button">De camera</p>
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
      <section className="section home-below-header">
        <div className="w-layout-blockcontainer container w-container">
          <div className="hook-content-flex">
            <h2 data-w-id="e1443e60-e18b-0ade-e40d-601773a4afd7" style={{ opacity: 0 }} className="h3-section-header-large">
              AI-Gestuurde <br />
              Netvliesscreening
            </h2>
            <p data-w-id="efcbc252-ab2b-7d46-44ee-badc239ac64e" style={{ opacity: 0 }} className="aa-body">
              De innovatieve technologie en slimme AI-integratie maakt diabetische retinopathie, AMD en glaucoom-screening eenvoudig, snel en betrouwbaar — zonder onnodige doorverwijzingen en wachttijden.{' '}
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container hook w-container">
          <div className="w-layout-grid grid product-hook">
            <img
              src={IMG.stepsPhoto}
              loading="lazy"
              id="w-node-a5da6135-d850-dd20-27db-7541c7e923eb-d6828f35"
              alt=""
              className="image-hook"
            />
            <div
              id="w-node-_1938c451-8a8d-a28f-900d-383f798c5486-d6828f35"
              data-w-id="1938c451-8a8d-a28f-900d-383f798c5486"
              className="hook-variable-wrapper x"
            >
              <div
                id="w-node-_32f2e67a-2588-09b0-acd1-94692f329c75-d6828f35"
                data-w-id="32f2e67a-2588-09b0-acd1-94692f329c75"
                style={{ opacity: 0 }}
                className="hook-variable-div"
              >
                <h3 className="aa-body-subheader hook">Klik</h3>
                <p className="aa-body">Met de camera wordt een hoogwaardige netvliesfoto gemaakt.</p>
              </div>
              <div
                id="w-node-_58782e2b-7989-537a-76da-1fa060669b54-d6828f35"
                data-w-id="58782e2b-7989-537a-76da-1fa060669b54"
                style={{ opacity: 0 }}
                className="hook-variable-div"
              >
                <p className="aa-body-subheader hook">Check</p>
                <p className="aa-body">
                  Binnen seconden controleert CE-gecertificeerde AI de foto op indicaties van diabetische retinopathie, AMD en glaucoom.
                </p>
              </div>
              <div data-w-id="7cc0c9fb-59cf-7133-0b22-8d728c6f07d1" style={{ opacity: 0 }} className="hook-variable-div">
                <p className="aa-body-subheader hook">Klaar</p>
                <p className="aa-body">U ontvangt meteen een rapport.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid grid _4-6">
            <div
              id="w-node-_8adc1ce1-e2b2-f152-a2bf-a3fd4e81c3bc-d6828f35"
              data-w-id="8adc1ce1-e2b2-f152-a2bf-a3fd4e81c3bc"
              style={{ opacity: 0 }}
              className="header-pre-flex"
            >
              <h4 className="h4-section-preheader">Uw Uitdaging</h4>
              <h2 className="h2-section-header-primary">Als Onze Drijfveer Voor Innovatie</h2>
            </div>
            <div
              id="w-node-ae6d2662-459d-879e-e57f-875f8052b100-d6828f35"
              data-w-id="ae6d2662-459d-879e-e57f-875f8052b100"
              style={{ opacity: 0 }}
              className="flex-button-right"
            >
              <p className="aa-body">
                Het Nederlandse oogzorgsysteem staat onder toenemende druk. De constante groei van patiënten met oogziektes, de lange wachttijden
                en een structureel tekort aan oogartsen vormen een groeiend risico voor de toekomst
                <br />
                <br />
                Een miljoen mensen heeft inmiddels oogzorg nodig, terwijl er in Nederland slechts circa 600 oogartsen beschikbaar zijn. Om deze
                groeiende vraag ook in de toekomst te kunnen beantwoorden, moeten op korte termijn toegankelijke screeningsmethoden mogelijk
                gemaakt worden. Op deze manier kunnen wij zowel de patiënt helpen als de oogzorg ontlasten.
              </p>
              <Link to="/uitdaging" className="button w-inline-block">
                <p className="aa-button">Lees meer</p>
              </Link>
            </div>
          </div>
        </div>
        <div data-w-id="38300f91-1081-3ea6-2a22-273c5af560fa" className="blob-background lr"></div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div
            data-w-id="2bb52dc2-e4f7-cc27-f5fb-eed295b59bb4"
            style={{
              transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 0,
            }}
            className="w-layout-grid grid numbers"
          >
            <div className="numbers-div">
              <div className="numbers-variable-div">
                <p {...({ duration: '650', 'counter-element': 'number' } as Record<string, string>)} className="aa-numbers-no">
                  &gt;<span>56</span>%
                </p>
                <p className="aa-numbers-text">Van Europese glaucoom-gevallen niet gediagnostiseerd</p>
              </div>
            </div>
            <div className="numbers-div">
              <div className="numbers-variable-div">
                <p className="aa-numbers-no">
                  &gt;<span>40.000</span>
                </p>
                <p className="aa-numbers-text">Nieuwe patiënten met oogziekten per jaar</p>
              </div>
            </div>
            <div className="numbers-div">
              <div className="numbers-variable-div">
                <p className="aa-numbers-no">~23</p>
                <p className="aa-numbers-text">Totaal aantal gespecialiseerde glaucoomartsen in Nederland</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section white-fade">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid eye-text-wrapper">
            <div
              id="w-node-_0534549f-426f-817c-ecd3-b937738f82af-d6828f35"
              data-w-id="0534549f-426f-817c-ecd3-b937738f82af"
              style={{ opacity: 0 }}
              className="flex-button-left"
            >
              <div className="header-pre-flex">
                <h4 className="h4-section-preheader">Onze missie</h4>
                <h2 className="h2-section-header-primary">
                  Het voorkomen van onnodige blindheid, door toegankelijke screening mogelijk te maken binnen de oogzorg
                </h2>
              </div>
              <div>
                <p className="aa-body">
                  OculomiX is opgericht met een simpele doelstelling: netvliesscreening moet zo snel mogelijk toegankelijk worden in de zorg. Wij
                  bouwen aan een toekomst waarin preventieve screening beschikbaar is zonder wachttijden. De CE-goedgekeurde AI-oplossingen maken
                  zorgtrajecten efficiënter, zodat oogzorgprofessionals zich kunnen richten op patiënten die behandeling nodig hebben, terwijl
                  vroege screening op diabetische retinopathie, glaucoom en AMD mogelijk wordt.
                  <br />
                  <br />
                  Onze rol: het toegankelijk maken van netvliesscreening in de eerste- en tweedelijnszorg.
                </p>
              </div>
              <Link to="/over-ons" className="button w-inline-block">
                <p className="aa-button">Lees meer</p>
              </Link>
            </div>
            <div
              id="w-node-bb47cc67-c8e8-d0be-f4ef-9420fb39bf2c-d6828f35"
              data-w-id="bb47cc67-c8e8-d0be-f4ef-9420fb39bf2c"
              className="image_eye-wrapper"
            >
              <img src={IMG.iris} loading="lazy" alt="" className="image-eye" />
            </div>
          </div>
        </div>
        <div className="blob-background rs"></div>
      </section>
      <section className="section white-fade">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid grid is-vertical">
            <div
              id="w-node-de507844-a4d3-8ec2-dd1d-1772db761773-d6828f35"
              data-w-id="de507844-a4d3-8ec2-dd1d-1772db761773"
              style={{ opacity: 0 }}
              className="header-pre-flex"
            >
              <h2 className="h2-section-header-primary">Onze diensten</h2>
            </div>
            <div
              id="w-node-de507844-a4d3-8ec2-dd1d-1772db761776-d6828f35"
              data-w-id="de507844-a4d3-8ec2-dd1d-1772db761776"
              style={{ opacity: 0 }}
            >
              <p className="aa-body is-full-width">
                OculomiX biedt twee verschillende service vormen aan om netvliesscreening toegankelijk te maken: het Oculomix Managed Service en
                het Eigen Beheer
                <br />
              </p>
            </div>
            <div
              id="w-node-_14f50f37-91c8-195d-2a48-08ce5b58d3c4-d6828f35"
              data-w-id="14f50f37-91c8-195d-2a48-08ce5b58d3c4"
              style={{ opacity: 0 }}
              className="is-top"
            >
              <p className="aa-body is-full-width">
                Beide vormen zijn integreerbaar in uw informatiesystemen, waarmee we snelle, betrouwbare screening faciliteren.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer container diensten w-container">
          <div className="w-layout-grid grid _2-columns">
            <div
              id="w-node-de507844-a4d3-8ec2-dd1d-1772db76177c-d6828f35"
              data-w-id="de507844-a4d3-8ec2-dd1d-1772db76177c"
              style={{ opacity: 0 }}
              className="flex-button-left"
            >
              <p id="w-node-de507844-a4d3-8ec2-dd1d-1772db76177d-d6828f35" className="aa-body-subheader">
                OculomiX Managed Service
              </p>
              <p className="aa-body">
                OculomiX Managed Service biedt een volledig uitgewerkt en geregeld screeningsproces op locatie. OculomiX levert de camera, een
                getrainde screener, de AI-analyse, de rapportage en de systeemkoppeling. Ideaal voor praktijken die ter plaatse willen screenen,
                zonder zelf daarmee belast te worden.
              </p>
              <Link to="/oculomix-managed-service" className="button w-inline-block">
                <p className="aa-button">Lees meer</p>
              </Link>
            </div>
            <div
              id="w-node-de507844-a4d3-8ec2-dd1d-1772db761784-d6828f35"
              data-w-id="de507844-a4d3-8ec2-dd1d-1772db761784"
              style={{ opacity: 0 }}
              className="flex-button-left"
            >
              <p id="w-node-de507844-a4d3-8ec2-dd1d-1772db761785-d6828f35" className="aa-body-subheader">
                Eigen beheer
              </p>
              <p className="aa-body">
                Eigen Beheer biedt de zorgprofessional de mogelijkheid om zelf de netvliesscreening uit te voeren. OculomiX levert hier een
                screening training, de AI-analyse, de rapportage en technische ondersteuning. Ideaal voor praktijken die zelf periodiek hun
                patiënten willen screenen.
              </p>
              <Link to="/eigen-beheer" className="button w-inline-block">
                <p className="aa-button">Lees meer</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="stack-wrapper">
            <div className="stack-card">
              <div className="nav-bar-glass-effect"></div>
              <div className="nav-bar-glass-tint stack-cards"></div>
              <div className="nav-bar-glass-shine"></div>
              <div className="stack-card-division">
                <div className="stack-card-text">
                  <div className="header-pre-flex">
                    <div className="h4-section-preheader">OculomiX in de praktijk</div>
                    <h3 className="h2-section-header-primary">Veelbelovende Resultaten Bevestigen Onze Werkwijze</h3>
                  </div>
                  <p className="aa-body">
                    De eerste pilots, waarbij gebruikgemaakt werd van de camera en AI, zijn succesvol afgerond bij huisartsenpraktijk De Meidoorn
                    in Brummen en huisartsenpraktijk Hohmann &amp; de Vett in Rotterdam. Bij deze pilots zijn tientallen diabetespatiënten op zowel
                    diabetische retinopathie (DR) als glaucoom parallel in een sessie gescreend. Bij deze screenings zijn meerdere indicaties
                    vastgesteld van zowel DR als Glaucoom die tot op dit moment niet bekend waren bij huisarts en patiënt.
                  </p>
                </div>
                <img src={IMG.results} loading="lazy" alt="" className="image-12" />
              </div>
            </div>
            <div className="stack-card v2">
              <div className="nav-bar-glass-effect"></div>
              <div className="nav-bar-glass-tint stack-cards"></div>
              <div className="nav-bar-glass-shine"></div>
              <div className="stack-card-division">
                <div className="stack-card-text">
                  <div className="flex-button-left">
                    <div className="h4-section-preheader">OculomiX in de praktijk</div>
                    <h3 id="w-node-e4067d05-b29a-103d-8d10-efe1f372a7f3-d6828f35" className="h2-section-header-primary">
                      Certificering
                    </h3>
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <div className="hook-variable-div">
                        <p className="aa-body">De camera beschikt over Europese Medical Device Registration (EU-MDR)</p>
                      </div>
                    </div>
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <div className="hook-variable-div">
                        <p className="aa-body">Het diabetische retinopathie AI-algoritme is CE-gecertificeerd</p>
                      </div>
                    </div>
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <div className="hook-variable-div">
                        <p className="aa-body">Het glaucoom AI-algoritme is CE-gecertificeerd</p>
                      </div>
                    </div>
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <div className="hook-variable-div">
                        <p className="aa-body">Het AMD AI-algoritme is CE-gecertificeerd</p>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={IMG.cert} loading="lazy" alt="" className="image-12" />
              </div>
            </div>
            <div className="stack-card v4">
              <div className="nav-bar-glass-effect"></div>
              <div className="nav-bar-glass-tint stack-cards"></div>
              <div className="nav-bar-glass-shine"></div>
              <div className="stack-card-division">
                <div className="stack-card-text">
                  <div className="flex-button-left">
                    <div className="h4-section-preheader">OculomiX in de praktijk</div>
                    <p id="w-node-af51193e-8fce-cfe7-5414-46e45bcfcaad-d6828f35" className="h2-section-header-primary">
                      Evaluatie van AI-algoritme
                    </p>
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <div className="hook-variable-div">
                        <p className="aa-body">
                          De externe validatie van het glaucoom AI-algoritme CE-certificering is uitgevoerd door Oogziekenhuis Rotterdam
                        </p>
                      </div>
                    </div>
                    <div className="subheader-wrapper">
                      <img src={IMG.circle} loading="lazy" alt="" className="circle-icon" />
                      <div className="hook-variable-div">
                        <p className="aa-body">
                          De externe validatie van het AMD AI-algoritme voor CE-certificering is uitgevoerd door Erasmus Universiteit
                        </p>
                      </div>
                    </div>
                    <div className="hook-variable-div"></div>
                  </div>
                </div>
                <img src={IMG.eval} loading="lazy" alt="" className="image-12" />
              </div>
            </div>
            <div className="div-empty-stack-card"></div>
          </div>
        </div>
      </section>
      <section className="section white-fade">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid grid _4-6">
            <div
              id="w-node-adc758a0-3e84-492c-9ab0-bfb9b5f0fea2-d6828f35"
              data-w-id="adc758a0-3e84-492c-9ab0-bfb9b5f0fea2"
              style={{ opacity: 0 }}
              className="header-pre-flex"
            >
              <h2 className="h2-section-header-primary">Retinal screening made easy</h2>
              <p className="aa-body">Neem gerust contact met ons op voor meer informatie.</p>
            </div>
            <div id="w-node-adc758a0-3e84-492c-9ab0-bfb9b5f0fea7-d6828f35" className="flex-button-right middle">
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
