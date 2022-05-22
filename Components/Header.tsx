import Image from 'next/image'
import Link from 'next/link'
import About from '../pages/about'

function Header(): any {
  return (
    <header className="flex items-center justify-between max-w-6xl mx-auto my-4">
      <div className="flex space-x-8 row">
        <Link href="/">
          <img
            src="https://links.papareact.com/yvf"
            className="object-contain cursor-pointer w-44"
          />
        </Link>
        <div className="items-center hidden space-x-6 row sm:inline-flex">
          <Link href="/about">
            <h3 className="px-4 py-1 transition-colors duration-200 ease-in rounded-full cursor-pointer hover:bg-green-600 hover:text-white">
              About
            </h3>
          </Link>
          <Link href="/contact">
            <h3 className="px-4 py-1 transition-colors duration-200 ease-in rounded-full cursor-pointer hover:bg-green-600 hover:text-white">
              Contact
            </h3>
          </Link>
          <h3 className="px-4 py-1 text-white bg-green-600 rounded-full ">
            Follow
          </h3>
        </div>
      </div>
      <div className="inline-flex items-center mx-2 space-x-4 text-green-600">
        <h2 className="cursor-pointer">Sign In</h2>
        <h2 className="px-2 py-1 border border-gray-600 rounded-full">
          Get Started
        </h2>
      </div>
    </header>
  )
}

export default Header
