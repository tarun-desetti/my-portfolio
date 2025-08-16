const Footer = () => {
  return <footer className="py-8 border-t border-glass-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-orbitron font-bold text-xl neon-text">Tarun Desetti</h3>
            <p className="text-glass-foreground font-jetbrains text-sm">
              Crafting digital experiences that matter
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-glass-foreground font-jetbrains text-sm">© 2025 Tarun Desetti. Built with passion and caffeine.</p>
            <p className="text-muted-foreground font-jetbrains text-xs mt-1">Designed & Developed with Js &  React + TypeScript</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;