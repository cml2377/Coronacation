import React, { Component } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default class Footer extends Component {
  render() {
    return (
      <div className="footerText">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            href="https://github.com/cml2377/Coronacation"
            target="_blank"
          >
            Need ATX
          </Link>
          <Link
            color="inherit"
            href="https://github.com/joshkuruvilla512"
            target="_blank"
          >
            Joshua Kuruvilla
          </Link>

          <Link
            color="inherit"
            href="https://github.com/livingkurt"
            target="_blank"
          >
            Kurt LaVacque
          </Link>

          <Link
            color="inherit"
            href="https://github.com/leolopez10"
            target="_blank"
          >
            Leo Lopez
          </Link>

          <Link
            color="inherit"
            href="https://github.com/cml2377"
            target="_blank"
          >
            Crystal Ly
          </Link>

          <Link
            color="inherit"
            href="https://github.com/bwmccray"
            target="_blank"
          >
            Brianna McCray
          </Link>

          <Link
            color="inherit"
            href="https://github.com/N0matic"
            target="_blank"
          >
            Z Naddaf
          </Link>

          <Link
            color="inherit"
            href="https://github.com/N0matic"
            target="_blank"
          >
            Z Naddaf
          </Link>

          <Link
            color="inherit"
            href="https://github.com/JayDub21"
            target="_blank"
          >
            Justin Wofford
          </Link>
        </Breadcrumbs>
      </div>
    );
  }
}
