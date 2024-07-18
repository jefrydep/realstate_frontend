
export const Navbar = () => {
    return (
      <nav className="bg-primary border-b-[1px] w-full items-center py-5   top-0 z-20">
      <div className="w-full flex justify-between items-center container mx-auto">
          <div   className="flex items-center gap-2 ">
            <img src="/assets/logo_t.png" alt="logo" className="w-10 h-10 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Jefrydev
            <span className="sm:block hidden text-sm"> Software Developer</span>
            </p>
          </div>
          <p className="text-white">INMOVILIARIA PALOMINO</p>
        </div>
      </nav>
    )
  }
  