import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="wrap notfound">
        <Image
          src="/images/brand/macchi-sad.webp"
          alt="Macchi, the Alleyway Muse calico cat, looking sad"
          width={360}
          height={234}
          priority
        />
        <h1 className="detail__title">Page not found</h1>
        <p className="detail__tag">That link does not lead anywhere. Try the projects list instead.</p>
        <Link href="/#projects" className="btn btn--primary" style={{ marginTop: 32 }}>
          <IconArrowLeft size={18} stroke={1.75} aria-hidden /> Back to projects
        </Link>
      </div>
    </section>
  );
}
