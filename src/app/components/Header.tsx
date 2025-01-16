import Link from 'next/link';

export default function Header() {
    return (
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <Link href="/" passHref>
              <a className="mr-4 hover:text-gray-300">Home</a>
            </Link>
            <Link href="/about" passHref>
              <a className="mr-4 hover:text-gray-300">About</a>
            </Link>
            <Link href="/projects" passHref>
              <a className="mr-4 hover:text-gray-300">Projects</a>
            </Link>
          <Link href="/contact" passHref>
            <a className="hover:text-gray-300">Contact</a>
          </Link>
          <a href="/projects" className="mr-4 hover:text-gray-300">Projects</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  