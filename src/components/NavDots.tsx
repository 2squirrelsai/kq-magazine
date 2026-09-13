type Props = { ids: string[] }

export default function NavDots({ ids }: Props) {
  return (
    <nav className="nav-dots" aria-label="Magazine sections">
      {ids.map((id) => (
        <a key={id} href={`#${id}`} title={id}>
          {id}
        </a>
      ))}
    </nav>
  )
}
