import {useState, useEffect} from 'react'

const ButtonScrollToTop = () => {
    const [button, setButton] = useState(false);

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 200)
                setButton(true);
            else setButton(false);
        })
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {button && (
                <button type='button' className='fixed w-20 sm:w-14 h-20 sm:h-14 
                                    rounded-full text-primary text-3xl font-bold
                                    bg-blue-gradient drop-shadow-sm
                                    bottom-5 sm:bottom-12 right-5 sm:right-12
                                    z-50 opacity-70'
                        onClick={scrollToTop}>
                        <span className='sr-only'>Scroll to top</span>
                        ^
                        </button>
            )}
        </div>
    )
}

export default ButtonScrollToTop