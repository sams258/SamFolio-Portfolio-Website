import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <Link href="/" passHref>
            <span className="mr-4 hover:text-gray-300">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="mr-4 hover:text-gray-300">About</span>
          </Link>
          <Link href="/projects" passHref>
            <span className="mr-4 hover:text-gray-300">Projects</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-gray-300">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
