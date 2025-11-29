interface PanelProps {
  title: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
  delay: number;
}

function Panel({ title, image, alt, icon, delay }: PanelProps) {
  const panelAnimation = `scale-in-ver-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
  const spanAnimation = `slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;

  return (
    <li
      className="opacity-0 relative shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset] hover:shadow-[rgba(255,209,98,0.25)_0px_30px_60px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset] group"
      style={{
        animation: panelAnimation,
        animationDelay: `${delay + 6}s`
      }}
    >
      <a href="#" className="text-[4.5rem] left-0 mx-auto absolute right-0 top-0">
        <span
          className="flex flex-row flex-wrap items-center justify-evenly h-fit opacity-0 px-[0.4rem] py-[1.2rem] relative w-full z-30 group-hover:text-[rgb(255,213,28)] before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[rgba(167,167,167,0.3)] before:-z-10 before:scale-y-0 before:origin-bottom-left before:transition-transform before:duration-[350ms] before:ease-in-out group-hover:before:scale-x-100 group-hover:before:origin-bottom-center"
          style={{
            animation: spanAnimation,
            animationDelay: `${delay + 6.35}s`
          }}
        >
          {title}
          <span className="group-hover:[&_path]:fill-[rgb(255,213,28)]">
            {icon}
          </span>
        </span>
      </a>
      <img
        src={image}
        alt={alt}
        className="block max-w-full object-cover w-full h-full brightness-[0.33] group-hover:brightness-100 transition-[filter] duration-[350ms]"
      />
    </li>
  );
}

export default Panel;
