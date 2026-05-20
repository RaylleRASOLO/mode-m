export default function Avatar() {
  return (
    <div className="border-2 border-foreground w-max rounded-full overflow-hidden">
      <img src="/heroPicture.avif" alt="Avatar" className={`w-8 h-8`} />
    </div>
  )
}