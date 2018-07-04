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

import bg6 from 'assets/img/bg/hackimg2.png';
import bg7 from 'assets/img/bg/hackimg7.png';
import bg8 from 'assets/img/bg/hackimg8.png';
import bg9 from 'assets/img/bg/hackimg9.png';

const Upcoming = () => {
  return (
    <Page title="Upcoming Challenges">    
      <Row>
      <Col md={4} sm={3} xs={12} className="mb-3">
          <Card>
            <CardImg top style={{ width: 370, height: 250 }} src={bg6} />
            <CardBody>
              <CardTitle>Hack Away!</CardTitle>
              <CardText>
              With technology being so close to the everyday lives of almost every person. This hackathon is about touching lives, shaping the future, and making a difference.               </CardText>
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
            <CardImg top style={{ width: 370, height: 250 }} src={bg7} />
            <CardBody>
              <CardTitle>ASU Startup Challenge</CardTitle>
              <CardText>
              With technology being so close to the everyday lives of almost every person. This hackathon is about touching lives, shaping the future, and making a difference.               </CardText>
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
              <CardTitle>Summer Meetup</CardTitle>
              <CardText>
              With technology being so close to the everyday lives of almost every person. This hackathon is about touching lives, shaping the future, and making a difference.               </CardText>
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
            <CardImg top style={{ width: 370, height: 250 }} src={bg9} />
            <CardBody>
              <CardTitle>Capture The Flag</CardTitle>
              <CardText>
              With technology being so close to the everyday lives of almost every person. This hackathon is about touching lives, shaping the future, and making a difference.               </CardText>
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

      </Row>
    </Page>
  );
};

export default Upcoming;
