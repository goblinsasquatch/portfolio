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
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/MilAR-Phys-Eqpt-Survey',
      images: [
        '1-web/milar1.png',
        '1-web/milar2.png',
        '1-web/milar3.png',
        '1-web/milar4.png',
        '1-web/milar5.png',
      ],
    },
    // {
    //   type: 'Full Stack Web-Dev',
    //   title: 'Warmup frontend',
    //   description: 'Words',
    //   lessonsLearned: 'More words',
    //   githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
    //   images: ['/assets/python-coding.jpg'],
    // },
    {
      type: 'Full Stack Web-Dev',
      title: 'Arrakis',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/SAITSandbox/glow_worm_frontend',
      images: ['1-web/arrakis1.png', '1-web/arrakis2.png'],
    },
    {
      type: 'Full Stack Web-Dev',
      title: 'SAIT Vue Template',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/SAITSandbox/Vue-Template',
      images: ['1-web/vuetemplate1.png', '1-web/vuetemplate2.png'],
    },
    {
      type: 'Python',
      title: 'Documentation Audit',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['2-python/docsaudit1.png', '2-python/docsaudit2.png'],
    },
    {
      type: 'Python',
      title: 'Plotly-Dash',
      description: 'Words',
      lessonsLearned: 'More words',
      images: ['2-python/plotly1.png', '2-python/plotly2.png'],
    },
    {
      type: 'Python',
      title: 'SQLite - Flask SQLAlchemy',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/python-sql-testing',
      images: ['2-python/sql1.png', '2-python/sql2.png', '2-python/sql2.png'],
    },
    {
      type: 'Python',
      title: 'PyTest in AzDO',
      description: 'Words',
      lessonsLearned: 'More words',
      images: ['2-python/azdo1.png', '2-python/azdo2.png'],
    },
    {
      type: 'Machine Learning',
      title: 'JCS Mod 4 assessment',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl:
        'https://gist.github.com/goblinsasquatch/d6e69666097ca1c9bc2b1185c7afe4f4',
      images: ['3-ml/4c.png'],
    },
    {
      type: 'Natural Language Processing',
      title: 'JCS Mod 5 assessment',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl:
        'https://gist.github.com/goblinsasquatch/ae1928db274c4ed8f7972527704df835',
      images: ['4-nlp/5.png'],
    },
    {
      type: 'Palantir Foundry - PySpark',
      title: 'Contour analysis',
      description: 'Words',
      lessonsLearned: 'More words',
      images: [
        '5-palantir/contour1.png',
        '5-palantir/contour2.png',
        '5-palantir/contour3.png',
      ],
    },
    {
      type: 'Palantir Foundry - PySpark',
      title: 'ACLED ML model',
      description: 'Words',
      lessonsLearned: 'More words',
      images: [
        '5-palantir/Palantir-ML-Code-Snippet.jpg',
        '5-palantir/Palantir-ML-Graph.jpg',
      ],
    },
    {
      type: 'Raspberry Pi',
      title: 'AES Project',
      description: 'Words',
      lessonsLearned: 'More words',
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
      description: 'Words',
      lessonsLearned: 'More words',
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
      description: 'Words',
      lessonsLearned: 'More words',
      images: ['7-other/miniclamp.png', '7-other/midiclamp.png'],
    },
  ];

  constructor() {}

  getContent(folder: string) {
    return this.allContent.filter((x) => x.type == folder);
  }
}
