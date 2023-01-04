export default function Header({children, size}) {
  let fontSize = 'text-xl';
  if (size === 'large') {
    fontSize = 'large';
  }

  return(
    <div className="bg-yellow-300 mx-auto p-4">
      <h1 className={`text-center font-semibold ${fontSize}`}>{children}</h1>
    </div>
  )
}