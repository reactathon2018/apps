import product1Image from 'assets/img/products/product_640-1.jpg';
import product2Image from 'assets/img/products/product_640-2.jpg';
import product3Image from 'assets/img/products/product_640-3.jpg';
import product4Image from 'assets/img/products/product_640-4.jpg';
import product5Image from 'assets/img/products/product_640-5.jpg';
import product6Image from 'assets/img/products/product_640-6.jpg';

import user1Image from 'assets/img/users/100_1.jpg';
import user2Image from 'assets/img/users/100_2.jpg';
import user3Image from 'assets/img/users/100_3.jpg';
import user4Image from 'assets/img/users/100_4.jpg';
import user5Image from 'assets/img/users/100_5.jpg';
import user6Image from 'assets/img/users/100_6.jpg';
import user7Image from 'assets/img/users/100_7.jpg';
import user8Image from 'assets/img/users/100_8.jpg';
import user9Image from 'assets/img/users/100_9.jpg';
import user10Image from 'assets/img/users/100_10.jpg';
import user11Image from 'assets/img/users/100_11.jpg';
import user12Image from 'assets/img/users/100_12.jpg';
import user13Image from 'assets/img/users/100_13.jpg';
import user14Image from 'assets/img/users/100_14.jpg';

export const productsData = [
  {
    id: 1,
    image: product1Image,
    title: 'Reactathon',
    description: 'UI/ UX based hackathon - 2nd July',
    right: '',
  },
  {
    id: 2,
    image: product2Image,
    title: 'Codeathon',
    description: 'Open hackathon - 8th July',
    right: '',
  },
  {
    id: 3,
    image: product3Image,
    title: 'Secure Code Warrior',
    description: 'security hackathon - 5th August',
    right: '',
  },
  {
    id: 4,
    image: product4Image,
    title: 'Data Hack',
    description: 'Analytics hackathon - 27th August',
    right: '',
  },
  {
    id: 5,
    image: product5Image,
    title: 'Google Wars',
    description: 'open hackathon - 5th September',
    right: '',
  },
  {
    id: 6,
    image: product6Image,
    title: 'verizon Hack Day',
    description: 'Ideathon - 10th September',
    right: '',
  },
];

export const avatarsData = [
  {
    avatar: user1Image,
    name: 'Tom',
    date: '3 month ago',
  },
  {
    avatar: user2Image,
    name: 'Jenny',
    date: '1 year ago',
  },
  {
    avatar: user3Image,
    name: 'Sim',
    date: '2 hour ago',
  },
  {
    avatar: user4Image,
    name: 'Christine',
    date: 'a month ago',
  },
  {
    avatar: user5Image,
    name: 'Bread',
    date: '6 months ago',
  },
  {
    avatar: user6Image,
    name: 'Dan',
    date: '2 years ago',
  },
  {
    avatar: user7Image,
    name: 'Merry',
    date: '3 month ago',
  },
  {
    avatar: user8Image,
    name: 'John',
    date: '1 month ago',
  },
  {
    avatar: user9Image,
    name: 'Shane',
    date: '7 month ago',
  },
  {
    avatar: user10Image,
    name: 'Star',
    date: '1 year ago',
  },
  {
    avatar: user11Image,
    name: 'Jenny',
    date: '3 month ago',
  },
  {
    avatar: user12Image,
    name: 'Park',
    date: '4 month ago',
  },
  {
    avatar: user13Image,
    name: 'Dave',
    date: '9 month ago',
  },
  {
    avatar: user14Image,
    name: 'Jackson',
    date: '10 month ago',
  },
];

export const userProgressTableData = [
  {
    avatar: user1Image,
    name: 'Tom',
    points: '33000',
    progress: 80,
    rank:1
  },
  {
    avatar: user2Image,
    name: 'Jenny',
    points: '32000',
    progress: 73,
    rank:2
  },
  {
    avatar: user3Image,
    name: 'Sim',
    points: '30000',
    progress: 70,
    rank:3
  },
  {
    avatar: user7Image,
    name: 'Christine',
    points: '25000',
    progress: 56,
    rank:4
  },
  {
    avatar: user5Image,
    name: 'Bread',
    points: '23000',
    progress: 67,
    rank:5
  },
  {
    avatar: user4Image,
    name: 'you',
    points: '10000',
    progress: 70,
    rank:120
  },
];

export const supportTicketsData = [
  {
    id: 1,
    avatar: user1Image,
    name: 'Sim',
    date: '30 mins ago',
    text:
      'I have one free ticket to IoT hackathon. Unfortunately I will not be able to attend :( Message me with your email and I can mail you a pdf copy.',
    status: '',
    likes:20
  },
  {
    id: 2,
    avatar: user2Image,
    name: 'Jane',
    date: '1 hour ago',
    text:
      'Please check your Inbox. Just emailed you the discount code for ticket.',
    status: '',
    likes:3
  },
  {
    id: 3,
    avatar: user3Image,
    name: 'Tom',
    date: 'yesterday',
    text:
      'I have come down with the flu and am thinking tomorrow might be too much. I’m not sure who to notify.',
    status: '',
    likes:-2
  },
];

export const todosData = [
  { id: 1, title: 'task -1', done: true },
  { id: 2, title: 'task -2', done: false },
  { id: 3, title: 'task -3', done: true },
  { id: 4, title: 'task -4', done: true },
  { id: 5, title: 'task -5', done: false },
];

export const chartjs = {
  bar: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Tournaments',
          backgroundColor: '#6a82fb',
          stack: 'Tournaments',
          data: [10000, 30000, 50000, 80000, 60000, 20000, 10000],
        },
        {
          label: 'Tournaments',
          backgroundColor: '#fc5c7d',
          stack: 'Tournaments',
          data: [30000, 80000, 50000, 100000, 60000, 40000, 90000],
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: 'Chart.js Bar Chart - Stacked',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
        yAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
      },
    },
  },
  doughnut: {
    data: {
      datasets: [
        {
          data: [20, 30, 40, 50, 60],
          backgroundColor: [
            '#6a82fb',
            '#fc5c7d',
            '#45b649',
            '#00c9ff',
            '#ffd700',
          ],
          label: 'Dataset 1',
        },
      ],
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart',
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  },
  line: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Number of participants',
          borderColor: '#6a82fb',
          backgroundColor: '#6a82fb',
          data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
        },

        {
          label: 'Number of participants',
          borderColor: '#fc5c7d',
          backgroundColor: '#fc5c7d',
          data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart - Stacked Area',
      },
      tooltips: {
        intersect: false,
        mode: 'nearest',
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: 'Month',
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: false,
              labelString: 'Value',
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  },
};
