export default function Footer() {

  const Navigations = [
    { id: 1, name: "Marketplace", href: "#" },
    { id: 2, name: "Stylists", href: "#" },
    { id: 3, name: "Portfolio", href: "#" },
    { id: 4, name: "Contact", href: "#" },
  ];

  const Legals = [
    { id: 1, name: "Terms of Service", href: "#" },
    { id: 2, name: "Privacy Policy", href: "#" },
    { id: 3, name: "Cookie Policy", href: "#" },
    { id: 4, name: "Legal Notice", href: "#" },
  ];

  const Newsletters = [
    { id: 1, name: "Subscribe to our newsletter", href: "#" },
    { id: 2, name: "Get the latest updates and offers", href: "#" },
  ];


  return (
    <footer className="max-w-screen w-full py-12 h-max text-primary-foreground flex flex-col items-center justify-center border-t border-primary/20 mt-auto">
      <div className="grid grid-cols-4 w-full max-w-screen-2xl mx-auto px-12 gap-6 text-foreground mb-4">
        <div className="col-span1 w-2/3">
          <h1 className="text-3xl font-bold text-primary">Mode'M</h1>
          <p>Le rendez-vous de la Haute-Fashion et de l'Efficacité Professionnelle.</p>
        </div>
        <div className="col-span1">
          <h1 className="text-xl font-bold text-foreground">Navigation</h1>
          <ul className="text-foreground/50">
            {Navigations.map((nav) => (
              <li key={nav.id}>
                <a href={nav.href} className="text-sm hover:text-primary">
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span1">
          <h1 className="text-xl font-bold text-foreground">Légal</h1>
          <ul className="text-foreground/50">
            {Legals.map((legal) => (
              <li key={legal.id}>
                <a href={legal.href} className="text-sm hover:text-primary">
                  {legal.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span1">
          <h1 className="text-xl font-bold text-foreground">Newsletter</h1>
          <ul className="text-foreground/50">
            {Newsletters.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="text-sm hover:text-primary">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="inline-flex w-full justify-center items-center gap-6 max-w-7xl mx-auto px-4">
        <p className="text-sm text-primary/50">© 2026 Mode'M. All rights reserved.</p>
      </div>
    </footer>
  )
}