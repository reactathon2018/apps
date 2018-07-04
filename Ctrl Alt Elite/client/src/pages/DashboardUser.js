import React from 'react';

import { getColor } from 'utils/colors';


import {
  Card,
CardImg,
Progress,
CardImgOverlay,
CardText,
CardLink,
  CardBody,
  CardHeader,
  CardTitle,
  CardGroup,
  CardDeck,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
} from 'reactstrap';

import {
  MdInsertChart,
  MdBubbleChart,
  MdPieChart,
  MdShowChart,
  MdPersonPin,
  MdRateReview,
  MdThumbUp,
  MdShare,
} from 'react-icons/lib/md';

import InfiniteCalendar from 'react-infinite-calendar';

import { Line, Bar } from 'react-chartjs-2';

import {
  supportTicketsData,
  productsData,
  userProgressTableData,
  avatarsData,
  todosData,
  chartjs,
} from 'demos/dashboardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';

import SupportTicket from 'components/SupportTicket';
import ProductMedia from 'components/ProductMedia';
import UserProgressTable from 'components/UserProgressTable';

import { AnnouncementCard, TodosCard } from 'components/Card';

import { NumberWidget, IconWidget } from 'components/Widget';

import MapWithBubbles from 'components/MapWithBubbles';
import HorizontalAvatarList from 'components/HorizontalAvatarList';

import bg1Image from 'assets/img/bg/hackimg1.png';
import bg3Image from 'assets/img/bg/hackimg2.png';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

class DashboardUserPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title=""
        breadcrumbs={null}>
        <CardGroup style={{ marginBottom: '1rem' }}>
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdThumbUp}
            title="Rank"
            subtitle="120/200"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdRateReview}
            title="Badges"
            subtitle="3/10 Unlocked"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdShare}
            title="Points"
            subtitle="10000"
          />
        </CardGroup>
        <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardImg
              className="card-img-left"
              src={bg1Image}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
              <CardTitle>IOT Hackathon</CardTitle>
              <CardText>
                Current Progress
                    <Progress
                    color='primary'
                    value='25'
                    className="mb-3"
                    >25%</Progress>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardBody>
            <CardTitle>Reactathon</CardTitle>
              <CardText>
                Current Progress
                    <Progress
                    color='primary'
                    value='75'
                    className="mb-3"
                    >75%</Progress>
              </CardText>
            </CardBody>
            <CardImg
              className="card-img-right"
              src={bg3Image}
              style={{ width: 'auto', height: 150 }}
            />
          </Card>
        </Col>
      </Row>

      <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>You may like</CardHeader>
              <CardBody>
                {productsData.map(
                  ({ id, image, title, description, right }) => (
                    <ProductMedia
                      key={id}
                      image={image}
                      title={title}
                      description={description}
                      right={right}
                    />
                  )
                )}
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Leaderboard</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'Name',
                    'Points',
                    'Accuracy',
                    'Rank',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardUserPage;
