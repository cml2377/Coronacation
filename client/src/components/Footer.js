import React, { Component } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default class Footer extends Component {
  render() {
    return (
      <div className="footerText">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            className="linkNames"
            href="https://github.com/cml2377/Coronacation"
            target="_blank"
          >
            Need ATX
          </Link>
          <Link
            className="linkNames"
            href="https://github.com/joshkuruvilla512"
            target="_blank"
          >
            Joshua Kuruvilla
          </Link>
          <Link
            className="linkNames"
            href="https://github.com/livingkurt"
            target="_blank"
          >
            Kurt LaVacque
          </Link>

          <Link
            className="linkNames"
            href="https://github.com/cml2377"
            target="_blank"
          >
            Crystal Ly
          </Link>

          <Link
            className="linkNames"
            href="https://github.com/bwmccray"
            target="_blank"
          >
            Brianna McCray
          </Link>

          <Link
            className="linkNames"
            href="https://github.com/N0matic"
            target="_blank"
          >
            Z Naddaf
          </Link>

          <Link
            className="linkNames"
            href="https://github.com/JayDub21"
            target="_blank"
          >
            Justin Wofford
          </Link>

          <Link
            className="linkNames"
            href="https://github.com/cml2377/Coronacation"
            target="_blank"
          >
            GitHub
          </Link>
        </Breadcrumbs>
      </div>
    );
  }
}
