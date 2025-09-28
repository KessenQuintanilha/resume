import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faDownload = faDownload;

  githubLink = 'https://github.com/KessenQuintanilha';
  linkedinLink = 'https://www.linkedin.com/in/kessenquintanilha/';
  resumeLink = 'assets/files/Curriculo-kessen-it.pdf';


  titulo1="About me";
  titulo2= ` Systems Developer and Junior Software Engineer, with experience in Human Resources
Management. Working as a PHC Technician and on the development of virtual assistants
and Artificial Intelligence solutions (watsonx), aiming to deliver high-quality projects and
create a positive impact within the company.

I am committed to quality, innovation, and continuous learning, working to deliver impactful
projects that bring meaningful value.

I am motivated by continuous learning, and I work to master new technologies and
develop practical solutions that create a positive impact for the company and its users. `;

titulo3= "Sobre Mim";
titulo4 = `Desenvolvedora de Sistemas e Software Engineer Junior, com experiência em Gestão de
Recursos Humanos. Atuando como Técnica PHC e no desenvolvimento de assistentes
virtuais e soluções de Inteligência Artificial (watsonx), buscando entregar projetos de
qualidade e gerar impacto positivo na empresa.

Valorizo a qualidade, inovação e aprendizado contínuo, comprometida em entregar
projetos de alto impacto e valor agregado.

Sou motivada pelo aprendizado contínuo, buscando dominar novas tecnologias e
desenvolver soluções úteis que gerem impacto positivo para a empresa e seus usuários.`;


}
