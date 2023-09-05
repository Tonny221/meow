import Link from "next/link"

const Aside = () => {
  return (
    <aside>
        <menu>
            <ul className="flex flex-col">
                <Link href={'/'}>Home</Link>
                <Link href={'/favourites'}>Favourites</Link>
                <Link href={'/profile'}>Profile</Link>
            </ul>
        </menu>
    </aside>
  )
}

export default Aside