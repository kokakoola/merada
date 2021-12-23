import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Navbar, Nav, Container } from "react-bootstrap"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Headroom from "react-headroom"

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const SiteNavbar = ({ siteTitle }) => {
  return (
    <Headroom>
      <Navbar className="navbar navbar-expand-md navbar-dark bg-primary">
        <Container>
          <Link to="/" className="navbar-brand" href="#">
            <StaticImage
              src="../images/Logo/Light.svg"
              quality={100}
              formats={["AUTO", "WEBP"]}
              alt={siteTitle}
              className="img-fluid my-2"
              width="110"
            />
          </Link>
          {/* <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link>
                <AnchorLink to="#team" title="Our team">
                  <span>Check out our team!</span>
                </AnchorLink>
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </Headroom>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default SiteNavbar
