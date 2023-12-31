import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section 
    id='home' 
    className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-4'>
          {/* discount label  */}
          <img src={discount} alt='discount' className='w-8 h-8'/>
          <p className={`${styles.paragraph}`}>
            <span className='text-white'>20%</span>{" "}Discount For{" "}
            <span className='text-white'>1 Month</span>{" "}Account
          </p>
        </div>

        {/* heading hero*/}
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            The Next <br className='sm:block hidden'/>{" "}
            <span className='text-gradient'>Generation</span>{" "}
          </h1>

          {/* GET STARTED btn */}
          <div className='animate-bounce md:flex hidden md:mr-4 mr-0 md:ml-12 ml-0'>
            <GetStarted />
          </div>
        </div>

        <h2 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* hero image */}
      <div className={`flex flex-1 flex-shrink-0  ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt='billing' className='object-cover flex-shrink-0 w-full h-full relative z-[5]'/>
        {/* gradient */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>

      {/* get started (screen: md and smaller)*/}
      <div className={`md:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero