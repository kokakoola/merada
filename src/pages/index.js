import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col, Badge } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <section className="bg-primary  mt-0 pb-5 pt-4">
        <Container className="px-lg-5">
          <StaticImage
            src="../images/banner.svg"
            quality={100}
            formats={["AUTO", "WEBP"]}
            alt="Background"
            className="img-fluid mx-auto"
          />
        </Container>
      </section>
      <Container className="py-5">
        <Row className="py-lg-5">
          <Col lg="8" md="10" className="mx-auto">
            <h5>Digital solutions with impact</h5>
            <p className="lead">
              We build digital solutions for small - and large companies, from
              the idea stage to our customers appearing on the cover of Forbes.
            </p>
          </Col>
        </Row>
        {/* <Row className="my-5">
          <h5>Smaller. Faster. Modular </h5>
          <p>
            We believe SMALL is beautiful, because it's faster and more agile
            (in the original meaning of the word!) and, in our opinion, produces
            the best results. We mean it, too: We're not out to see how big we
            can get before we get bad. MODULAR means we have an extensive
            network of trusted partners to access the right specialists at the
            right time, without always keeping them unused in a dark room (as
            overhead).{" "}
          </p>
          <div id="team">Team</div>
          <div id="pricing">Pricing</div>
          <Link to="/about/" className="btn btn-primary my-2">
            About
          </Link>
          <Link to="/page-2/" className="btn btn-secondary my-2">
            Go to page 2
          </Link>
        </Row> */}
        <Row className="py-lg-4">
          <Col lg="10" md="9" className="mx-auto my-auto">
            <h5>
              <Badge pill bg="primary" className="px-3 py-2 my-1">
                Digital Strategy
              </Badge>
              {"   "}
              <Badge pill bg="primary" className="px-3 py-2 my-1">
                Business and System Analysis
              </Badge>
              {"   "}
              <Badge pill bg="primary" className="px-3 py-2 my-1">
                User Experience and Interface Design
              </Badge>
              {"   "}
              <Badge pill bg="primary" className="px-3 py-2 my-1">
                End-to-End Development
              </Badge>
              {"   "}
              <Badge pill bg="primary" className="px-3 py-2 my-1">
                Quality Management
              </Badge>
              {"   "}
              <Badge pill bg="primary" className="px-3 py-2 my-1">
                Data and Analytics
              </Badge>
              {"   "}
              <Badge pill bg="primary" className="px-3 py-2 my-1">
                DevOps Consultation and Implementation
              </Badge>
              {"   "}
              <Badge pill bg="primary" className="px-3 py-2 my-1">
                Business Application and IT helpdesk
              </Badge>
              {"   "}
              <Badge pill bg="primary" className="px-3 py-2 my-1">
                Cloud Application Management
              </Badge>
              {"   "}
              <Badge pill bg="primary" className="px-3 py-2 my-1">
                Continuous Services
              </Badge>
              {"   "}
              <Badge pill bg="secondary" className=" my-1">
                <span className="invisible">s</span>
              </Badge>
              {"   "}
              <Badge pill bg="secondary" className=" my-1">
                <span className="invisible">s</span>
              </Badge>
              {"   "}
            </h5>
          </Col>
          <Col lg="2" md="3" className="mx-auto">
            <ul className="list-unstyled text-primary float-lg-end">
              <li>Merada OÜ</li>
              <li>reg nr 11951320</li>
              <li>
                <a
                  href="mailto:info@merada.ee?subject=Mail from Our Site"
                  className="text-secondary"
                >
                  info@merada.ee
                </a>
              </li>
              <li>+372 6505520</li>
              <li>Mustjuure 9, </li>
              <li>Tallinn 10618</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
