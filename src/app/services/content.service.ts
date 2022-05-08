import { Injectable } from '@angular/core';
import { Content } from '../models/content.model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  allContent: Content[] = [
    {
      type: 'Full Stack Web-Dev',
      title: 'Mil AR App',
      description:
        'An Angular/Ionic cross-platform app built to increase speed, reduce errors, and add images to the Mil AR process. All ‘snags’ are saved to a csv file and any associated images are added to a zip file and shared via the devices native sharing functionality. All data is stored encrypted on the device. The app has been iterated on since completion. The app originally had a light theme, but the bright screen was counter-productive when inside a dark aircraft.',
      techUsed: [
        'Angular',
        'Ionic',
        'Capacitor Native Services:',
        '- Camera',
        '- Sharing',
        '- Secure Storage',
      ],
      githubUrl: 'https://github.com/goblinsasquatch/MilAR-Phys-Eqpt-Survey',
      images: ['1-web/milar-a.png', '1-web/milar-b.png'],
    },
    {
      type: 'Full Stack Web-Dev',
      title: 'Arrakis',
      description:
        'A Vue 3 frontend accessing multiple API end points, built in a modularised manner. Development of a mapbox powered heat map was ongoing at the close of the project.',
      techUsed: ['Vue JS 3', 'Vuetify 3'],
      githubUrl: 'https://github.com/SAITSandbox/glow_worm_frontend',
      images: ['1-web/arrakis1.png', '1-web/arrakis2.png'],
    },
    {
      type: 'Full Stack Web-Dev',
      title: 'SAIT Vue Template',
      description:
        'Following the completion of the Arrakis project, I designed and built a Vue 3 template for the team to use on future projects. Built around a single page application for ease of hosting, with integrated navigation sidebar, and modularised component based main panel. Instructions for use are included in README.md and within HTML templates.',
      techUsed: ['Vue JS 3', 'Vuetify 3', 'Custom Theming'],
      githubUrl: 'https://github.com/SAITSandbox/Vue-Template',
      images: ['1-web/vuetemplate1.png', '1-web/vuetemplate2.png'],
    },
    {
      type: 'Python',
      title: 'Documentation Audit',
      description:
        "An early Python script that I built to carry out the time intensive work of a Military Airworthiness Review Docs Audit. The process required manually comparing a default maintenance schedule with an aircraft's actual schedule. Dull repetitive work that could take up to 3 days to complete by a human. The script compares 6 input files, produces an Excel document of the results - highlighting any discrepancies - builds 3 Word document reports, and produces 2 template pdfs for the aircraft log book. All the user has to do is input the aircraft tail number, and the script pulls in the required default data. This allowed me the time to do JCS modules 4 and 5 😀 ",
      techUsed: ['Pandas', 'OpenPyXl', 'Docx-Compose'],
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['2-python/docsaudit1.png', '2-python/docsaudit2.png'],
    },
    {
      type: 'Python',
      title: 'Plotly-Dash',
      description:
        'A small experiment with Plotly-Dash that used interactive user controls to modify the visualisation in real-time.',
      techUsed: ['Plotly-Dash', 'Dash Bootstrap Components'],
      images: ['2-python/plotly1.png', '2-python/plotly2.png'],
    },
    {
      type: 'Python',
      title: 'SQLite - Flask SQLAlchemy',
      description:
        "A full-stack technology experiment built to generate API endpoints for CRUD operations to an SQLite database. Structured to allow for effective unit testing, breaking out all database operations to a custom module. The API endpoints then simply call the functions with no db logic in the app.py file. The db schema includes two relational tables and the 'get_books' function performs the join. The application is then containerised and run locally.",
      techUsed: [
        'SQLite',
        'Flask-API',
        'Flask-SQLAlchemy',
        'Docker',
        'Custom Python Modules',
      ],
      githubUrl: 'https://github.com/goblinsasquatch/python-sql-testing',
      images: ['2-python/sql1.png', '2-python/sql2.png'],
    },
    {
      type: 'Python',
      title: 'PyTest in AzDO',
      description:
        'PyTest implementation during Microsoft CSE engagement. Uses unittest.mock to simulate database operations during Continuous Integration testing. The .yaml pipeline is split into self-contained scripts that install dependencies, runs linting and PyTest, then builds the container image before pushing it to the Azure Container Registry. This is then handed off to the Continuous Deployment pipeline.',
      techUsed: [
        'PyTest',
        'Mocking database operations',
        'Flake8 Linting',
        'Azure Dev Ops',
        'Azure Cloud Services',
        'Docker',
        'CI/CD yaml Pipelines',
      ],
      images: ['2-python/azdo1.png', '2-python/azdo2.png'],
    },
    {
      type: 'Machine Learning',
      title: 'JCS Module 4',
      description:
        'The most challenging and time-consuming part of this project was the data pre-processing. The model training was simple - though not particularly accurate, given the small dataset.',
      techUsed: [
        'Pandas',
        'NumPy',
        'Scikit-Learn',
        'Tensorflow Neural Networks',
      ],
      githubUrl:
        'https://gist.github.com/goblinsasquatch/d6e69666097ca1c9bc2b1185c7afe4f4',
      images: ['3-ml/4c.png'],
    },
    {
      type: 'Natural Language Processing',
      title: 'JCS Module 5',
      description:
        'Similar to JCS Mod 4, the most complex element here was the web scraping and data preprocessing. Collecting the data required inspecting the website to find the most appropriate tag to collect. Extracting the entities is the function shown.',
      techUsed: ['Beautiful Soup 4', 'Spacy'],
      githubUrl:
        'https://gist.github.com/goblinsasquatch/ae1928db274c4ed8f7972527704df835',
      images: ['4-nlp/5.png'],
    },
    {
      type: 'Palantir Foundry - PySpark',
      title: 'Contour',
      description:
        "A data analysis report generated within Foundry's Contour GUI. The tool allows for quick easy analysis of OSINT by an analyst without using coding tools. A useful tool for initial data exploration. From this exploration I determined that while extremely rare, suicide bombings were disproportionately deadly - likely due to the targets being populated market squares.",
      techUsed: ['Palantir Foundry Contour Data Analysis GUI'],
      images: [
        '5-palantir/contour1.png',
        '5-palantir/contour2.png',
        '5-palantir/contour3.png',
      ],
    },
    {
      type: 'Palantir Foundry - PySpark',
      title: 'ACLED ML model',
      description:
        "An experiment with Foundry's Code Workbooks. Using PySpark libraries to build a simple (and not very useful or accurate) logistic regression model to predict the number of fatalities for a given attack. The dataset would require considerable cleaning and some constraints applied to the model to be at all useful - it appears to predict a significant number of resurrections...",
      techUsed: [
        'PySpark:',
        '- SQL',
        '- Machine Learning',
        'Palantir Foundry Code Workbooks',
      ],
      images: [
        '5-palantir/Palantir-ML-Code-Snippet.jpg',
        '5-palantir/Palantir-ML-Graph.jpg',
      ],
    },
    {
      type: 'Raspberry Pi',
      title: 'AES Project - AC Circuit Phase Meter Training Aid',
      description:
        'The instructors at MOD Lyneham used to teach phase shift in AC circuits using a 3" oscilloscope screen; not a good solution for classes of 12+ students. The brief for my BSc Advanced Electronic Systems module was to improve upon that. The result is a complex system of multiple modules. It includes a signal conditioning circuit, feeding 4 Arduino Micros, that communicate with a Raspberry Pi over I2C, that then uses HDMI for display on a projector. This is built on a custom designed and built PCB, and pushed the limit of what is possible with microcontrollers. The system takes input from 100mV - 10V at 10Hz - 10kHz. At 10kHz the response time required for the system was less than 50nSecs.',
      techUsed: [
        'Raspberry Pi',
        'Arduino',
        'I2C',
        'Design & Manufacture:',
        '- Discrete electronics',
        '- Custom PCB',
      ],
      images: [
        '6-rpi/display.png',
        '6-rpi/circuitdiagram.png',
        '6-rpi/circuitboard1.png',
        '6-rpi/circuitboard2.png',
      ],
    },
    {
      type: 'Other Tech Skills',
      title: 'Octoprint',
      description:
        'A custom designed and printed enclosure for a Raspberry Pi to remotely manage my 3D printer. The enclosure includes 2 buck convertors to power the Pi and the LED strip. This allows remote monitoring of prints via webcam, and control of the printer over the internet. I also designed and printed the webcam arm that moves with the print bed.',
      techUsed: [
        '3D Design',
        '- Autocad Fusion 360',
        '- Ultimaker Cura',
        '3D Printing',
        'Custom electronics - Buck Convertor',
        'Pi Camera',
      ],
      images: [
        '7-other/octo1.jpg',
        '7-other/octo2.jpg',
        '7-other/octo3.jpg',
        '7-other/octo4.jpg',
      ],
    },
    {
      type: 'Other Tech Skills',
      title: '3D Printing Design and Manufacture',
      description: 'Numerous items designed and printed.',
      techUsed: [
        '3D Design',
        '- Autocad Fusion 360',
        '- Ultimaker Cura',
        '3D Printing',
        'Iterative Design',
      ],
      images: ['7-other/miniclamp.png', '7-other/midiclamp.png'],
    },
  ];

  constructor() {}

  getContent(folder: string) {
    return this.allContent.filter((x) => x.type == folder);
  }
}
