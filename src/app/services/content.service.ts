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
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Full Stack Web-Dev',
      title: 'Warmup frontend',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Full Stack Web-Dev',
      title: 'Arrakis',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Full Stack Web-Dev',
      title: 'SAIT Vue Template',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Python',
      title: 'Documentation Audit',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Python',
      title: 'Plotly-Dash',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Python',
      title: 'SQLite - Flask SQLAlchemy',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Python',
      title: 'PyTest in AzDO',
      description: 'Words',
      lessonsLearned: 'More words',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Machine Learning',
      title: 'JCS Mod 4 assessment',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Natural Language Processing',
      title: 'JCS Mod 5 assessment',
      description: 'Words',
      lessonsLearned: 'More words',
      githubUrl: 'https://github.com/goblinsasquatch/WKF-Mil-AR-Docs-Audit',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Palantir Foundry - PySpark',
      title: 'Contour analysis',
      description: 'Words',
      lessonsLearned: 'More words',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Palantir Foundry - PySpark',
      title: 'ACLED ML model',
      description: 'Words',
      lessonsLearned: 'More words',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Raspberry Pi',
      title: 'AES Project',
      description: 'Words',
      lessonsLearned: 'More words',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Other Tech Skills',
      title: 'Octoprint',
      description: 'Words',
      lessonsLearned: 'More words',
      images: ['/assets/python-coding.jpg'],
    },
    {
      type: 'Other Tech Skills',
      title: '3D Printing Design and Manufacture',
      description: 'Words',
      lessonsLearned: 'More words',
      images: ['/assets/python-coding.jpg'],
    },
  ];

  constructor() {}

  getContent(folder: string) {
    return this.allContent.filter((x) => x.type == folder);
  }
}
