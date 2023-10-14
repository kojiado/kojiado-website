import { useEffect, useState } from 'react'
import { navLinks } from '../content'
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark : boolean;
  makeDark : () => void;
}

const Navbar: React.FC<NavbarProps> = ({isDark,makeDark}) => {
  const [isNavbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    if (isNavbarActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isNavbarActive]);

  const handleNavbar = () => {
    setNavbarActive(prevIsNavbarActive => !prevIsNavbarActive);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 80;
      const scrolled = window.scrollY;
      setIsSticky(scrolled > navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleMobileNavLinkClick = (id: string) => {
    document.body.style.overflow='auto';
    setNavbarActive(false);
  };


  return (
    <>
    <div className={`flex items-center justify-between pt-[40px] relative z-[10]`}>
      <nav className={`mx-[9vw] right-0 ssm:right-auto ssm:left-1/2 ssm:translate-x-[calc(-50%-9vw)] stickyNav border-borderLight dark:border-borderDark flex items-center bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(18,18,18,0.8)] backdrop-blur-xl ${isSticky ? 'visible' : ''}`}>
        <ul className='hidden ssm:flex mr-[4px]'>
          {navLinks.map((item,index)=>(
            <li key={index} className=''><a data-scroll href={`#${item?.id}`} className='text-primaryDark dark:text-primaryLight hover:dark:bg-borderDark hover:bg-borderLight'>{item?.title}</a></li>
          ))}
        </ul>
        <div onClick={makeDark} className='theme-switcher bg-[#F3F3F3] border-borderLight dark:bg-[#1e1e1e] dark:border-borderDark'>
          <div className={`absolute theme-switcher-button ${isDark ? 'right-[6.5px] bg-primaryLight' : 'right-[calc(100%-33.5px)] bg-primaryDark'}`}>
          </div>
          <div className='flex gap-[2px] relative z-10'>
            <div className='w-[27px] h-[27px] flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <path className={`${isDark ? 'fill-[#414141]': 'fill-primaryLight'}`} id="interface-lighting-brightness-4" d="M8.383.054a.862.862,0,0,0-.462.231.873.873,0,0,0-.253.433L7.652.781V2.236l.016.064a.873.873,0,0,0,.253.433.878.878,0,0,0,1.209,0A.873.873,0,0,0,9.384,2.3L9.4,2.236V1.509A4.487,4.487,0,0,0,9.385.723.866.866,0,0,0,9.226.39a.918.918,0,0,0-.45-.313A1,1,0,0,0,8.383.054M3.062,2.275a.875.875,0,0,0-.806.867.8.8,0,0,0,.082.387c.066.135.083.154.581.654.292.292.484.479.52.506a.864.864,0,0,0,.609.17.811.811,0,0,0,.456-.18A.865.865,0,0,0,4.84,3.9a.829.829,0,0,0-.157-.429c-.062-.089-.954-.981-1.043-1.043a.858.858,0,0,0-.578-.156m10.78,0a.825.825,0,0,0-.453.173c-.072.053-.958.941-1.012,1.014a.87.87,0,0,0-.165.6.845.845,0,0,0,.263.549.836.836,0,0,0,.53.244A.86.86,0,0,0,13.6,4.7c.083-.058.98-.953,1.039-1.037a.834.834,0,0,0,.162-.52.806.806,0,0,0-.091-.391.888.888,0,0,0-.63-.47.957.957,0,0,0-.234-.009M8.383,3.856a4.684,4.684,0,0,0-2.754,1,4.958,4.958,0,0,0-.792.792A4.69,4.69,0,0,0,3.874,7.94a5.033,5.033,0,0,0,0,1.208,4.688,4.688,0,0,0,.968,2.3,4.982,4.982,0,0,0,.78.78,4.69,4.69,0,0,0,2.3.968,5.025,5.025,0,0,0,1.209,0,4.692,4.692,0,0,0,2.3-.968,4.979,4.979,0,0,0,.78-.78,4.692,4.692,0,0,0,.968-2.3,5.039,5.039,0,0,0,0-1.209,4.69,4.69,0,0,0-.968-2.3,4.982,4.982,0,0,0-.78-.78A4.672,4.672,0,0,0,8.9,3.869c-.133-.01-.4-.017-.512-.013M8.332,5.62A2.915,2.915,0,0,0,6.9,6.107,2.927,2.927,0,0,0,5.738,9.445a2.945,2.945,0,0,0,1.9,1.89,2.947,2.947,0,0,0,1.782,0A2.933,2.933,0,0,0,11.405,8,2.93,2.93,0,0,0,8.332,5.62M.784,7.671a1.107,1.107,0,0,0-.2.054.912.912,0,0,0-.52.57.943.943,0,0,0,0,.5.918.918,0,0,0,.313.45A.866.866,0,0,0,.706,9.4a4.488,4.488,0,0,0,.786.015h.728L2.282,9.4a.873.873,0,0,0,.433-.253.878.878,0,0,0,0-1.209.881.881,0,0,0-.432-.254L2.226,7.67H1.515c-.391,0-.72,0-.731,0m14.07,0a.92.92,0,0,0-.312.105.876.876,0,0,0-.446.768.843.843,0,0,0,.247.611.875.875,0,0,0,.427.247l.064.016h.728a4.488,4.488,0,0,0,.786-.015.873.873,0,0,0,.439-.255.878.878,0,0,0,0-1.209.881.881,0,0,0-.432-.254L16.3,7.67h-.711c-.391,0-.72,0-.731,0M3.87,12.23a.864.864,0,0,0-.426.165c-.035.026-.224.21-.522.507-.5.5-.519.521-.585.657a.912.912,0,0,0,.009.774.911.911,0,0,0,.39.39.806.806,0,0,0,.391.091.834.834,0,0,0,.52-.162c.083-.059.978-.956,1.037-1.039a.829.829,0,0,0,.157-.429.863.863,0,0,0-.263-.711.836.836,0,0,0-.527-.244.682.682,0,0,0-.181,0m9.119,0a.882.882,0,0,0-.667.437.828.828,0,0,0-.11.356.87.87,0,0,0,.165.6c.06.081.956.975,1.028,1.026a.834.834,0,0,0,.52.162.807.807,0,0,0,.391-.091.911.911,0,0,0,.39-.39.807.807,0,0,0,.091-.391.834.834,0,0,0-.162-.52c-.052-.073-.945-.968-1.028-1.029a.912.912,0,0,0-.37-.157,1.2,1.2,0,0,0-.247-.007M8.383,14.123a.9.9,0,0,0-.715.664l-.016.064v1.455l.016.064a.873.873,0,0,0,.253.433.878.878,0,0,0,1.209,0,.873.873,0,0,0,.255-.439,4.487,4.487,0,0,0,.015-.786v-.728l-.016-.064a1.192,1.192,0,0,0-.039-.121.912.912,0,0,0-.57-.519,1,1,0,0,0-.392-.024" transform="translate(-0.026 -0.044)" fill="#fff" fillRule="evenodd"/>
              </svg>
            </div>
            <div className='w-[27px] h-[27px] flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="12.107" height="17" viewBox="0 0 12.107 17">
                <path className={`${isDark ? 'fill-primaryDark': 'fill-[#CCCCCC]'}`} id="Union" d="M10.5,0a8.5,8.5,0,0,0,0,17h0a8.6,8.6,0,0,0,3.226-.653.607.607,0,0,0,.074-1.086A7.893,7.893,0,0,1,9.893,8.5a7.893,7.893,0,0,1,3.878-6.761A.607.607,0,0,0,13.695.655,8.6,8.6,0,0,0,10.507,0Z" transform="translate(-2)" fill="#fff" fillRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
        <div onClick={handleNavbar} className={`ham-menu ml-[4px] w-[40px] h-[40px] flex ssm:hidden items-center justify-center ${isNavbarActive ? 'bg-primary' : ''} rounded-[10px]`}>
          <svg className={`ham hamRotate ham4 ${isNavbarActive ? 'active-mobile-menu active' : ''}`} viewBox="0 0 100 100" width="100">
            <path
                  className="line top dark:stroke-primaryLight stroke-primaryDark"
                  d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path
                  className="line middle dark:stroke-primaryLight stroke-primaryDark"
                  d="m 70,50 h -40" />
            <path
                  className="line bottom dark:stroke-primaryLight stroke-primaryDark"
                  d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
          </svg>
        </div>
      </nav>
      <div className='relative'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 33 33">
          <path className={`fill-primaryDark dark:fill-primaryLight`} id="Path_53" data-name="Path 53" d="M32.517,4.467,28.533.483A1.651,1.651,0,0,0,27.367,0H5.633A1.651,1.651,0,0,0,4.467.483L.483,4.467A1.651,1.651,0,0,0,0,5.633V27.367a1.651,1.651,0,0,0,.483,1.167l3.983,3.983A1.651,1.651,0,0,0,5.633,33H32.175A.825.825,0,0,0,33,32.175V5.633a1.651,1.651,0,0,0-.483-1.167M24.75,12.858a.824.824,0,0,1-.242.583l-2.475,2.475a.825.825,0,0,0,0,1.167l2.475,2.475a.824.824,0,0,1,.242.583v3.783a.825.825,0,0,1-.825.825H20.142a.824.824,0,0,1-.583-.242l-2.475-2.475a.825.825,0,0,0-1.167,0l-2.475,2.475a.824.824,0,0,1-.583.242H9.075a.825.825,0,0,1-.825-.825V9.075a.825.825,0,0,1,.825-.825h3.783a.824.824,0,0,1,.583.242l2.475,2.475a.825.825,0,0,0,1.167,0l2.475-2.475a.824.824,0,0,1,.583-.242h3.783a.825.825,0,0,1,.825.825Z" fill="#121212"/>
        </svg>
      </div>
      <nav className='pl-[10px] hidden ssm:block'>
        <ul className='flex'>
          {navLinks.map((item,index)=>(
            <li key={index} ><a data-scroll href={`#${item?.id}`} className='text-primaryDark dark:text-primaryLight hover:dark:bg-borderDark hover:bg-borderLight'>{item?.title}</a></li>
          ))}
        </ul>
      </nav>
      <div className='flex items-center gap-[4px]'>
        <div onClick={makeDark} className='theme-switcher bg-[#F3F3F3] border-borderLight dark:bg-[#1e1e1e] dark:border-borderDark'>
          <div className={`absolute theme-switcher-button ${isDark ? 'right-[6.5px] bg-primaryLight' : 'right-[calc(100%-33.5px)] bg-primaryDark'}`}>
          </div>
          <div className='flex gap-[2px] relative z-10'>
            <div className='w-[27px] h-[27px] flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <path className={`${isDark ? 'fill-[#414141]': 'fill-primaryLight'}`} id="interface-lighting-brightness-4" d="M8.383.054a.862.862,0,0,0-.462.231.873.873,0,0,0-.253.433L7.652.781V2.236l.016.064a.873.873,0,0,0,.253.433.878.878,0,0,0,1.209,0A.873.873,0,0,0,9.384,2.3L9.4,2.236V1.509A4.487,4.487,0,0,0,9.385.723.866.866,0,0,0,9.226.39a.918.918,0,0,0-.45-.313A1,1,0,0,0,8.383.054M3.062,2.275a.875.875,0,0,0-.806.867.8.8,0,0,0,.082.387c.066.135.083.154.581.654.292.292.484.479.52.506a.864.864,0,0,0,.609.17.811.811,0,0,0,.456-.18A.865.865,0,0,0,4.84,3.9a.829.829,0,0,0-.157-.429c-.062-.089-.954-.981-1.043-1.043a.858.858,0,0,0-.578-.156m10.78,0a.825.825,0,0,0-.453.173c-.072.053-.958.941-1.012,1.014a.87.87,0,0,0-.165.6.845.845,0,0,0,.263.549.836.836,0,0,0,.53.244A.86.86,0,0,0,13.6,4.7c.083-.058.98-.953,1.039-1.037a.834.834,0,0,0,.162-.52.806.806,0,0,0-.091-.391.888.888,0,0,0-.63-.47.957.957,0,0,0-.234-.009M8.383,3.856a4.684,4.684,0,0,0-2.754,1,4.958,4.958,0,0,0-.792.792A4.69,4.69,0,0,0,3.874,7.94a5.033,5.033,0,0,0,0,1.208,4.688,4.688,0,0,0,.968,2.3,4.982,4.982,0,0,0,.78.78,4.69,4.69,0,0,0,2.3.968,5.025,5.025,0,0,0,1.209,0,4.692,4.692,0,0,0,2.3-.968,4.979,4.979,0,0,0,.78-.78,4.692,4.692,0,0,0,.968-2.3,5.039,5.039,0,0,0,0-1.209,4.69,4.69,0,0,0-.968-2.3,4.982,4.982,0,0,0-.78-.78A4.672,4.672,0,0,0,8.9,3.869c-.133-.01-.4-.017-.512-.013M8.332,5.62A2.915,2.915,0,0,0,6.9,6.107,2.927,2.927,0,0,0,5.738,9.445a2.945,2.945,0,0,0,1.9,1.89,2.947,2.947,0,0,0,1.782,0A2.933,2.933,0,0,0,11.405,8,2.93,2.93,0,0,0,8.332,5.62M.784,7.671a1.107,1.107,0,0,0-.2.054.912.912,0,0,0-.52.57.943.943,0,0,0,0,.5.918.918,0,0,0,.313.45A.866.866,0,0,0,.706,9.4a4.488,4.488,0,0,0,.786.015h.728L2.282,9.4a.873.873,0,0,0,.433-.253.878.878,0,0,0,0-1.209.881.881,0,0,0-.432-.254L2.226,7.67H1.515c-.391,0-.72,0-.731,0m14.07,0a.92.92,0,0,0-.312.105.876.876,0,0,0-.446.768.843.843,0,0,0,.247.611.875.875,0,0,0,.427.247l.064.016h.728a4.488,4.488,0,0,0,.786-.015.873.873,0,0,0,.439-.255.878.878,0,0,0,0-1.209.881.881,0,0,0-.432-.254L16.3,7.67h-.711c-.391,0-.72,0-.731,0M3.87,12.23a.864.864,0,0,0-.426.165c-.035.026-.224.21-.522.507-.5.5-.519.521-.585.657a.912.912,0,0,0,.009.774.911.911,0,0,0,.39.39.806.806,0,0,0,.391.091.834.834,0,0,0,.52-.162c.083-.059.978-.956,1.037-1.039a.829.829,0,0,0,.157-.429.863.863,0,0,0-.263-.711.836.836,0,0,0-.527-.244.682.682,0,0,0-.181,0m9.119,0a.882.882,0,0,0-.667.437.828.828,0,0,0-.11.356.87.87,0,0,0,.165.6c.06.081.956.975,1.028,1.026a.834.834,0,0,0,.52.162.807.807,0,0,0,.391-.091.911.911,0,0,0,.39-.39.807.807,0,0,0,.091-.391.834.834,0,0,0-.162-.52c-.052-.073-.945-.968-1.028-1.029a.912.912,0,0,0-.37-.157,1.2,1.2,0,0,0-.247-.007M8.383,14.123a.9.9,0,0,0-.715.664l-.016.064v1.455l.016.064a.873.873,0,0,0,.253.433.878.878,0,0,0,1.209,0,.873.873,0,0,0,.255-.439,4.487,4.487,0,0,0,.015-.786v-.728l-.016-.064a1.192,1.192,0,0,0-.039-.121.912.912,0,0,0-.57-.519,1,1,0,0,0-.392-.024" transform="translate(-0.026 -0.044)" fill="#fff" fillRule="evenodd"/>
              </svg>
            </div>
            <div className='w-[27px] h-[27px] flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="12.107" height="17" viewBox="0 0 12.107 17">
                <path className={`${isDark ? 'fill-primaryDark': 'fill-[#CCCCCC]'}`} id="Union" d="M10.5,0a8.5,8.5,0,0,0,0,17h0a8.6,8.6,0,0,0,3.226-.653.607.607,0,0,0,.074-1.086A7.893,7.893,0,0,1,9.893,8.5a7.893,7.893,0,0,1,3.878-6.761A.607.607,0,0,0,13.695.655,8.6,8.6,0,0,0,10.507,0Z" transform="translate(-2)" fill="#fff" fillRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
        <div onClick={handleNavbar} className={`ham-menu w-[40px] h-[40px] flex ssm:hidden items-center justify-center ${isNavbarActive ? 'bg-primary' : ''} rounded-[10px]`}>
          <svg className={`ham hamRotate ham4 ${isNavbarActive ? 'active-mobile-menu active' : ''}`} viewBox="0 0 100 100" width="100">
            <path
                  className="line top dark:stroke-primaryLight stroke-primaryDark"
                  d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path
                  className="line middle dark:stroke-primaryLight stroke-primaryDark"
                  d="m 70,50 h -40" />
            <path
                  className="line bottom dark:stroke-primaryLight stroke-primaryDark"
                  d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
          </svg>
        </div>
      </div>
    </div>
    <div className={`bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(18,18,18,0.8)] backdrop-blur-xl flex justify-center navbar-mobile h-[100vh] w-full fixed top-0 left-0 z-[9] ${isNavbarActive ? 'left-0' : 'left-[-100%]'}`}>
    <AnimatePresence>
        {isNavbarActive && (
          <motion.ul
            className="flex flex-col gap-[20px] items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {navLinks.map((item, index) => (
              <motion.li
                onClick={() => handleMobileNavLinkClick(item.id)}
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, ease: [0.71,0.08,0.2,0.92], duration: 0.5 }}
              >
                <a data-scroll href={`#${item?.id}`}
                  className="text-primaryDark dark:text-primaryLight text-[32px] font-semibold"
                >
                  {item?.title}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence> 
    </div>
    </>
  )
}

export default Navbar