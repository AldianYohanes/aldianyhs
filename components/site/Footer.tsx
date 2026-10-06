import { IconArrowUp } from "@tabler/icons-react";
import { person } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <span>© 2026 {person.name}</span>
        <a href="#top" className="back" style={{ margin: 0 }}>
          Back to top <IconArrowUp size={16} stroke={1.75} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
