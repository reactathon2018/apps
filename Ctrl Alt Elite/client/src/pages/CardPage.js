import React from 'react';

import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardText,
  CardLink,
  Row,
  Col,
} from 'reactstrap';

import Page from 'components/Page';

import bg1 from 'assets/img/bg/hackimg1.png';
import bg2 from 'assets/img/bg/hackimg2.png';
import bg3 from 'assets/img/bg/hackimg3.png';
import bg4 from 'assets/img/bg/hackimg4.png';
import bg5 from 'assets/img/bg/hackimg5.png';
import bg6 from 'assets/img/bg/hackimg6.png';
import bg7 from 'assets/img/bg/hackimg7.png';
import bg8 from 'assets/img/bg/hackimg8.png';
import bg9 from 'assets/img/bg/hackimg9.png';

const CardPage = () => {
  return (
    <Page title="Ongoing Challenges">    
      <Row>
      <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg style={{ width: 370, height: 250 }} top src={bg1} />
            <CardBody>
              <CardTitle>IOT Hackathon</CardTitle>
              <CardText>
              With technology being so close to the everyday lives of almost every person. This hackathon is about touching lives, shaping the future, and making a difference. 
              </CardText>
            </CardBody>
            <CardBody>
              <CardLink tag="a" href="challenges">
                Details
              </CardLink>
              <CardLink tag="a" href="challenges">
                Enroll
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg style={{ width: 380, height: 250 }} top src={bg5} />
            <CardBody>
              <CardTitle>Reactathon</CardTitle>
              <CardText>
             Reactathon is an orgwide Hackathon event, where groups of developers team up to compete against another team to bring out the evolution of solutions to solve real-world business problems.
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
                Details
              </CardLink>
              <CardLink tag="a" href="#">
                Enroll
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg style={{ width: 380, height: 250 }} top src={bg3} />
            <CardBody>
              <CardTitle>A.S. Watson Hackathon</CardTitle>
              <CardText>
              The hackathon objective is to build a prototype using Python with emphasis on maximizing utilization of parallel processing and other performance features available on state-of-the-art Intel®-based platforms.
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
               Details
              </CardLink>
              <CardLink tag="a" href="#">
                Enroll
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
      <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 370, height: 250 }} src={bg4} />
            <CardBody>
              <CardTitle>Girl Hackathon</CardTitle>
              <CardText>
               Let's collaborate and create sustainable solutions to make a difference in our community and the city we call home.
              </CardText>
            </CardBody>
            <CardBody>
              <CardLink tag="a" href="#">
               Details
              </CardLink>
              <CardLink tag="a" href="#">
                Enroll
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 380, height: 250 }} src={bg2} />
            <CardBody>
              <CardTitle>Codeathon</CardTitle>
              <CardText>
              This year's competition seeks to bring startups of all industries to showcase their innovative ideas and compete for some amazing prizes.
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
                Details
              </CardLink>
              <CardLink tag="a" href="#">
                Enroll
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 380, height: 250 }} src={bg6} />
            <CardBody>
              <CardTitle>The 36 Hour Challenge</CardTitle>
              <CardText>
              The intention of this hackathon is not only to code but to come up with ingenious and well thought out business solutions.
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
                Details
              </CardLink>
              <CardLink tag="a" href="#">
               Enroll
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 380, height: 250 }} src={bg7} />
            <CardBody>
              <CardTitle>Speedathon</CardTitle>
              <CardText>
              This Hackathon addresses real and urgent challenges in the financial and insurance sector. It’s backed by 6 major European banks, insurers and market infrastructure players. These partners intend to take on and fund the most interesting solutions presented at the hackathon as Proof of Concept projects.
              </CardText>
            </CardBody>
            <CardBody>
              <CardLink tag="a" href="#">
                Details
              </CardLink>
              <CardLink tag="a" href="#">
                Enroll
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 370, height: 250 }} src={bg8} />
            <CardBody>
              <CardTitle>Live Chat Hackathon</CardTitle>
              <CardText>
              It's finally here! December 2nd, 2017 marks the 4th annual MLH Local Hack Day - a worldwide celebration of learning, building, and sharing. 
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
                Details
              </CardLink>
              <CardLink tag="a" href="#">
                Enroll
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 380, height: 250 }} src={bg9} />
            <CardBody>
              <CardTitle>Save The Hacker</CardTitle>
              <CardText>
              We expect a hack from you that broadens the horizon of any domain. With technology being so close to the everyday lives of almost every person, this hackathon is about touching lives, shaping the future, and making a difference.
              </CardText>
            </CardBody>
            {/* <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup> */}
            <CardBody>
              <CardLink tag="a" href="#">
               Details
              </CardLink>
              <CardLink tag="a" href="#">
              Enroll
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default CardPage;
