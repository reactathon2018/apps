import React from 'react';

import { getColor } from 'utils/colors';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardImg,
  CardText,
  CardGroup,
  CardDeck,
  Row,
  Col,
  Button,
} from 'reactstrap';

import {
  MdAccessAlarm,
  MdEditLocation,
  MdPeople,
} from 'react-icons/lib/md';

import {
  supportTicketsData,
  avatarsData,
} from 'demos/dashboardPage';

import Page from 'components/Page';

import SupportTicket from 'components/SupportTicket';

import { AnnouncementCard, TodosCard } from 'components/Card';

import { NumberWidget, IconWidget } from 'components/Widget';

import HorizontalAvatarList from 'components/HorizontalAvatarList';
import bg11Image from 'assets/img/bg/hackimg1.png';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

class ChallengesPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="ChallengesPage"
        title="IOT Weekend Hackathon">
        {/* <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Total Profit"
              subtitle="This month"
              number="9.8k"
              color="secondary"
              progress={{
                value: 75,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Monthly Visitors"
              subtitle="This month"
              number="5,400"
              color="secondary"
              progress={{
                value: 45,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="New Users"
              subtitle="This month"
              number="3,400"
              color="secondary"
              progress={{
                value: 90,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Bounce Rate"
              subtitle="This month"
              number="38%"
              color="secondary"
              progress={{
                value: 60,
                label: 'Last month',
              }}
            />
          </Col>
        </Row> */}

        {/* <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Total Revenue{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Total Expense</CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Cost of sales{' '}
                  <Badge color="secondary">$3000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdBubbleChart size={25} color={primaryColor} /> Management
                  costs <Badge color="secondary">$1200</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdShowChart size={25} color={primaryColor} /> Financial costs{' '}
                  <Badge color="secondary">$800</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdPieChart size={25} color={primaryColor} /> Other operating
                  costs <Badge color="secondary">$2400</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row> */}

        
        <Row>
        <Col md="12" sm="8" xs="8">
          <Card className="flex-row">
          <CardBody>
              <CardTitle>Here is your big opportunity to build something that the world has never seen before</CardTitle>
              <CardText>
              The multiple, overlapping technology layers involved in building a smarter and connected world make it necessary to bring together diverse sets of thinkers, makers, and coders from different fields. 
              </CardText>
              <CardText>
              We are organizing an IoT hackathon to allow you to push the boundaries of creativity, innovation, reality, and tech to build solutions and concepts that have the potential to make a difference in people’s lives.
              </CardText>
              <CardText>
                  Happy Hacking!
              </CardText>
              <Button  href="widgets">
                    <large>Start Event</large>
              </Button>
            </CardBody>
            <CardImg
              className="card-img-right"
              src={bg11Image}
              style={{ width: 'auto', height: 300 }}
            />
          </Card>
        </Col>
        </Row>
        <Row>
        <Col md="12" sm="8" xs="8">
            <CardGroup style={{ marginBottom: '1rem' }}>
                <IconWidget
                bgColor="white"
                inverse={false}
                icon={MdAccessAlarm}
                title="20 July - 23 July"
                subtitle="50 hours "
                />
                <IconWidget
                bgColor="white"
                inverse={false}
                icon={MdPeople}
                title="Teams of 3"
                />
                <IconWidget
                bgColor="white"
                inverse={false}
                icon={MdEditLocation}
                title="Chennai"
                subtitle="Room 101, Olympia Tech Park"
                />
            </CardGroup>
            </Col>
        </Row>
        <Row>
        <Col md="6" sm="8" xs="8">
        <CardDeck style={{ marginBottom: '1rem' }}>
          <Card body style={{ overflowX: 'auto' }}>
            <HorizontalAvatarList
              avatars={avatarsData}
              avatarProps={{ size: 60 }}
            />
          </Card> 
          </CardDeck>
          </Col>
          <Col md="6" sm="8" xs="8">
            <NumberWidget
              title="Number of developers registered"
              number="354"
              color="secondary"
              progress={{
                value: 65,
                label: 'Last month',
              }}
            />
          </Col>
        </Row>
        <Row>
        <Col md="12" sm="8" xs="8">
          <Card className="flex-row">
            <CardBody>
              <CardTitle>Get the most out of IOT Hackathon!</CardTitle>
              <CardText>
              We are inviting teams of makers, developers, and technologists to collaborate and explore the next-gen technologies of smart homes, smart wearables, smart cities, and connected cars / smart driving experience in an environment that encourages you innovate and build.         
              </CardText>
              <CardText>
              Form teams, explore possibilities, and submit your “big idea” on or before November 13 to our panel of judges through our hackathon platform. The judges will screen the ideas based on factors like innovation, creativity, social impact, and feasibility . The shortlisted teams will be invited to be part of a 24-hr hackathon on November 26 at the HackerEarth HQ in Bangalore.
              </CardText>
              <CardText>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        </Row>

        

        <Row>
          <Col md="6" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header="Announcement"
              avatarSize={60}
              name="Jamy"
              date="1 hour ago"
              text="
              The event cost is $25 for all hackathon participants and they include food throughout the weekend, WWCode swag, giveaways, and prizes for the winners.
              We have scholarships available for anyone who is a student, under-employed, or in need of financial assistance."
              buttonProps={{
                children: 'show',
              }}
              style={{ height: 500 }}
            />
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Discussion Forum</span>
                  <Button>
                    <small>View All</small>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {supportTicketsData.map(supportTicket => (
                  <SupportTicket key={supportTicket.id} {...supportTicket} />
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default ChallengesPage;
