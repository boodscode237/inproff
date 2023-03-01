import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ButtonComponent = ({arrow, handleClick}) => {
  return(
      <button
          // className='bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded-md'
          className='bg-blue-200 shadow-lg shadow-blue-500/50 text-gray-800 rounded-md py-2 px-4'
          onClick={handleClick}
      >
          {arrow}
      </button>
  )
}

export default ButtonComponent