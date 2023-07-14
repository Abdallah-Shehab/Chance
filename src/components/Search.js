import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const Search = () => {
  const [term, setTerm] = useState(" ");
  const [list, setList] = useState([]);
  useEffect(() => {
    const searchAPI = async () => {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          origin: "*",
          list: "search",
          srsearch: term,
        },
      });
      setList(response.data.query.search);
    };
    const deobounce = setTimeout(() => {
      if (term) {
        searchAPI();
      }
    }, 2000);
    return () => {
      clearTimeout(deobounce);
    };
  }, [term]);

  const showList = list.map((el) => (
    <TableRow
      key={el.pageid}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{el.title}</TableCell>
      <TableCell align="left">
        {" "}
        <span dangerouslySetInnerHTML={{ __html: el.snippet }} />
      </TableCell>
    </TableRow>
    // <tr key={el.pageid} style={{ border: "1px solid gray" }}>
    //   <td>{el.title}</td>
    //   <td>
    //     <span dangerouslySetInnerHTML={{ __html: el.snippet }} />
    //   </td>
    // </tr>
  ));

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Search..."
                onChange={(e) => setTerm(e.target.value)}
                value={term}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      {term === " " ? null : (
        <Row className="mt-3">
          <Col>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{showList}</TableBody>
              </Table>
            </TableContainer>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Search;
