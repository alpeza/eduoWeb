// 404.js
import Link from 'next/link'
import Container from "../components/container";

export default function FourOhFour() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-tcb7 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
        <h1 className="text-4xl font-bold leading-snug tracking-tight text-tca3 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              <code>404</code>
          </h1>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Page not found
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
            <Link href="/">Back To Home 🏠</Link>
        </div>
      </div>
    </Container>
  )
}