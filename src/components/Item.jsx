export default function Item({children: value="Valor", label="Label"}) {
  return(
    <span className="text-sm">
      <strong>{label}</strong> {value}
    </span>
  )
}