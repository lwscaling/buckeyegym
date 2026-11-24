import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p>404 · Tallmadge, Ohio</p><h1>Wrong turn.<em>The gym is this way.</em></h1><Link className="btn btn--yellow" href="/">Back to Buckeye Gym</Link></main>;
}
