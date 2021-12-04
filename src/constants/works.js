import stellarBurgers from "../assets/images/Stellar Burgers.png";
import stellarBurgersExampleOne from "../assets/images/StellarBurgersExample1.png";
import StellarBurgersExampleTwo from "../assets/images/StellarBurgersExample2.png";

import qrCodeMainImage from "../assets/images/QR-code-mainImage.jpg";
import qrCodeFirstImage from "../assets/images/qrMenuFirstImage.png";
import qrCodeSecondImage from "../assets/images/qrMenuSecondImage.png";

import myKoreaMainImage from "../assets/images/my-korea.jpg";
import myKoreaFirstImage from "../assets/images/myKoreaFirstImage.png";
import myKoreaSecondImage from "../assets/images/myKoreaSecondImage.png";

const worksData = [
  {
    title: "Stellar Burgers",
    shortDescription: "Yandex Practicum Project",
    clientName: "-",
    projectValue: "-",
    date: "28 Oct 2021",
    descriptionFirst:
      "The idea of ​​the project is to create a web application for the fictional company Stellar Burgers, which is based on the sale of fast food",
    descriptionSecond:
      "A project created for the purpose of learning React. This project uses modern technologies such as React, Redux, WebSocket, TypeScript, React Roter, REST API.",
    mainImage: stellarBurgers,
    exampleImageFirst: stellarBurgersExampleOne,
    exampleImageSecond: StellarBurgersExampleTwo,
    link: "https://ramiltanker.github.io/react-burger/",
    id: 1,
  },
  {
    title: "QR-MENU",
    shortDescription: "QR-menu for Tino Pizza",
    clientName: "Tino Pizza",
    projectValue: "-",
    date: "10 Oct 2021",
    descriptionFirst:
      "The application was created to remove the traditional menu and replace it with a more modern counterpart. The application works by scanning a QR code with a phone camera.",
    descriptionSecond:
      "The application was created using technologies such as React, React Router, React Transition Group, Redux",
    mainImage: qrCodeMainImage,
    exampleImageFirst: qrCodeFirstImage,
    exampleImageSecond: qrCodeSecondImage,
    link: "https://qr-menu-jhu5fqc95-ramiltanker.vercel.app/",
    id: 2,
  },
  {
    title: "My Korea",
    shortDescription: "My Korea for Education",
    clientName: "-",
    projectValue: "-",
    date: "15 June 2021",
    descriptionFirst:
      "A project created to help students study in Korea. The site contains information about universities, grants and other information.",
    descriptionSecond:
      "The project is written using the React library in JavaScript.",
    mainImage: myKoreaMainImage,
    exampleImageFirst: myKoreaFirstImage,
    exampleImageSecond: myKoreaSecondImage,
    link: "https://ramiltanker.github.io/mykorea/",
    id: 3,
  },
  // {
  //     title: ,
  //     shortDescription: ,
  //     clientName: ,
  //     projectValue: ,
  //     date: ,
  //     descriptionFirst: ,
  //     descriptionSecond: ,
  //     mainImage: ,
  //     exampleImageFirst: ,
  //     exampleImageSecond:
  //     },
];

export default worksData;