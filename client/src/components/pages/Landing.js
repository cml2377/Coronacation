import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name) {
  return { name };
}

const rows = [
  createData(
    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
      World Health Organization
    </a>
  ),
  createData(<a href="http://www.austintexas.gov/COVID19">City of Austin</a>),
  createData(
    <a href="https://www.dshs.state.tx.us/coronavirus/">State of Texas</a>
  ),
  createData(
    <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">
      CDC
    </a>
  ),
  createData(
    <a href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
      Global Spread Map
    </a>
  )
];

export default class Landing extends Component {
  render() {
    return (
      <div>
        <TableContainer className="covidTable" component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell id="landingTitle">COVID-19 Information By Organization:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell className="landingLinks" component="th" scope="row">
                    {row.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
