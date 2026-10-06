import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import { person } from "@/lib/content";
import { publicFileExists } from "@/lib/assets";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import Shapes from "./Shapes";

export default function Contact() {
  const hasCv = publicFileExists(person.cv);
  return (
    <section id="contact" className="section contact">
      <Shapes preset="contact" />
      <div className="wrap">
        <Reveal>
          <h2 className="h2">Contact</h2>
          <a className="contact__mail" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <div className="contact__links">
            <Magnetic>
              <a className="btn" href={person.github} target="_blank" rel="noopener noreferrer">
                <IconBrandGithub size={18} stroke={1.75} aria-hidden /> GitHub
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn" href={person.linkedin} target="_blank" rel="noopener noreferrer">
                <IconBrandLinkedin size={18} stroke={1.75} aria-hidden /> LinkedIn
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn" href={person.instagram} target="_blank" rel="noopener noreferrer">
                <IconBrandInstagram size={18} stroke={1.75} aria-hidden /> Instagram
              </a>
            </Magnetic>
            {hasCv && (
              <Magnetic>
                <a className="btn btn--primary" href={person.cv} download>
                  <IconDownload size={18} stroke={1.75} aria-hidden /> Download CV
                </a>
              </Magnetic>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
