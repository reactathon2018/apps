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

const Your = () => {
  return (
    <Page title="Your Challenges">    
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

      </Row>

    </Page>
  );
};

export default Your;
