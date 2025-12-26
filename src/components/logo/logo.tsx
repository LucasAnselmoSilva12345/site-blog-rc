import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" title="Página inicial">
      <span className="sr-only">Site.Set</span>
      <Image src="/brand-logo.svg" alt="Site.Set" width={116} height={32} />
    </Link>
  );
}
