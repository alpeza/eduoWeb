// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>Test Page</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}