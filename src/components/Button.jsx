const Button = ({styles}) => {
  return (
    <button type="button" 
    className={`py-4 px-6 font-poppins font-medium text-[18px] 
              text-primary bg-blue-gradient 
                rounded-[10px] outline-none ${styles} hover:drop-shadow-sm`}>
      Get Started
    </button>
  )
}

export default Button