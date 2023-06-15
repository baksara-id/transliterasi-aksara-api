<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Transliteration API</h3>

  <p align="center">
    Translate Your Latin Script to Aksara Jawa Script!
    <br />
    <a href="https://github.com/baksara-id/transliterasi-aksara-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="mailto:baksara.official@gmail.com">Report Bug</a>
    ·
    <a href="https://github.com/baksara-id/transliterasi-aksara-api/issues">Request Feature</a>
  </p>
</div>





<!-- ABOUT THE PROJECT -->
## About The Project

<img width="954" alt="image" src="https://github.com/baksara-id/transliterasi-aksara-api/assets/32472207/5974da37-f23b-47d5-a9fb-871609cd6ac4">


API service to translate letters, words, or sentences from latin (bahasa indonesia) to aksara jawa



### Built With

This API Service built using those frameworks/libraries :

* [![ExpressJS][ExpressJS]][ExpressJS-url]
* [![CarakanJS][CarakanJS]][CarakanJS-url]




<!-- GETTING STARTED -->
## Getting Started

This service can used in two ways, local service and cloud/deployed service.

<font color="red"><h2>LOCAL SERVICE</h2></font>

Make sure that you already have NodeJS Installation in your terminal. Here are the standard steps to install The API service:

### Pre-Installation

Clone this repository, the example below using https way to clone. If you want to use SSH or Github CLI, you can modify as your wish
* Git Clone
  ```sh
  git clone https://github.com/baksara-id/transliterasi-aksara-api.git
  ```

### Prerequisites

Install dependencies required to run this service :
* Install Dependencies in Package.json
  ```sh
  npm install
  ```

### Run and Use The Service

1. Run command, make sure your command line refers to api_model directory :
   ```sh
   npm run start
   ```
2. Available endpoint :
   ```sh
   http://localhost:{PORT}/tojavanese
   ```
   ```sh
   http://localhost:{PORT}/reversetrans
   ```
3. Test endpoint in Postman : 

   <img width="641" alt="image" src="https://github.com/baksara-id/transliterasi-aksara-api/assets/32472207/ad622bbc-9b94-4639-9b60-50cdb4604c45">
   <img width="643" alt="image" src="https://github.com/baksara-id/transliterasi-aksara-api/assets/32472207/2e629197-0d69-4809-b8f7-0446d99d467f">



   



<font color="red"><h2>CLOUD SERVICE</h2></font>

### Run and Use The Service

1. Deployed URL on Cloud Run :
   ```sh
   https://python-api-qohpfhypea-et.a.run.app
   ```
2. Available endpoint :
   ```sh
   https://aksara-api-v4-qohpfhypea-et.a.run.app/tojavanese
   ```
   ```sh
   https://aksara-api-v4-qohpfhypea-et.a.run.app/reversetrans
   ```
3. Test endpoint in Postman :




   <img width="653" alt="image" src="https://github.com/baksara-id/transliterasi-aksara-api/assets/32472207/7e7dce29-1585-4f32-840c-d7117014d8fb">
   <img width="650" alt="image" src="https://github.com/baksara-id/transliterasi-aksara-api/assets/32472207/449ba5f8-4a52-4a9a-9601-dee722fa0aee">






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Flask]: https://img.shields.io/badge/-Flask-blue
[Flask-url]: https://flask.palletsprojects.com/en/2.3.x/
[OpenCV]: https://img.shields.io/badge/-OpenCV--Python-red
[OpenCV-url]: https://pypi.org/project/opencv-python/
[NumPy]: https://img.shields.io/badge/-NumPy-9cf
[NumPy-url]: https://numpy.org/
[Tensorflow]: https://img.shields.io/badge/-TensorFlow-important
[Tensorflow-url]: https://www.tensorflow.org/
[Pillow]: https://img.shields.io/badge/-Pillow-brightgreen
[Pillow-url]: https://pillow.readthedocs.io/en/stable/
[ExpressJS]: https://img.shields.io/badge/-Express%20JS-lightgrey
[ExpressJS-url]: https://expressjs.com/
[CarakanJS]: https://img.shields.io/badge/-Carakan%20JS-yellow
[CarakanJS-url]: https://nourman.com/works/carakanjs
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

